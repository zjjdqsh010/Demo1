package com.jfinal.api;

import java.util.ArrayList;
import java.util.Date;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.apache.commons.lang3.StringUtils;

import com.jfinal.enums.CdStatusEnum;
import com.jfinal.kit.DateUtil;
import com.jfinal.kit.Ret;
import com.jfinal.kit.RetKit;
import com.jfinal.plugin.activerecord.Db;
import com.jfinal.plugin.activerecord.Page;
import com.jfinal.plugin.activerecord.Record;
import com.mj.constant.CoreConstant;


public class CdApi {
	public static final CdApi api = new CdApi();

	public Cd findById(Integer id) {
		return Cd.dao.findById(id);
	}

	/*---------------------------------------排序----------------------------------------------------------*/
	@SuppressWarnings("serial")
	private static Map<String, String> sortConfigMap = new HashMap<String, String>() {
		{
			put("cdName", "t.cdName");
			put("price", "t.price");
			put("type", "t.type");
		}
	};

	/**
	 * @Description: 专辑信息
	 * @author H
	 * @date 2020-12-08 08:59:58
	 * @return
	 */
	public Page<Record> page(Integer pageNo, Integer pageSize, Map<String, Object> cond) {

		List<Object> queryArgs = new ArrayList<Object>();
		String select = "select t.id,t.cdName,t.authort.price,t.type";
		StringBuilder sql = new StringBuilder();

		sql.append("  from cd t ");
		sql.append("    where 1=1");


		// 查询
		String keyword = StringUtils.trim((String) cond.get(CoreConstant.SEARCH_KEYWORD));
		if (StringUtils.isNotEmpty(keyword)) {
			sql.append(" and (INSTR(t.cdName,?) > 0 OR INSTR(t.author,?) > 0 )");
			queryArgs.add(keyword);
			queryArgs.add(keyword);
		}

		String orderField = StringUtils.trim((String) cond.get(CoreConstant.ORDER_FIELD));
		// 默认排序
		if (StringUtils.isNotEmpty(orderField) && sortConfigMap.containsKey(orderField)) {
			sql.append(" order by ").append(sortConfigMap.get(orderField)).append(" ")
					.append(StringUtils.trim((String) cond.get(CoreConstant.ORDER_DIR)));
		} else {
			sql.append(" order by t.create_date desc");
		}

		return Db.paginate(pageNo, pageSize, select, sql.toString(), queryArgs.toArray());
	}


	/**
	 * @Description: 保存或更新专辑
	 * @author H
	 * @date 2020-12-08 10:07:26
	 * @return
	 */
	public Ret saveOrUpdate(Cd entity) {
		boolean isNew = entity.getId() == null;
		if (isNew) {
//			entity.setCreator(loginUserName);
			entity.setCreateDate(new Date());
			entity.save();
		} else {
			Cd uEntity = findById(entity.getId());
			uEntity.setCdName(entity.getCdName());
			uEntity.setAuthor(entity.getAuthor());
			uEntity.setPrice(entity.getPrice());
			uEntity.setType(entity.getType());
//			uEntity.setUpdator(loginUserName);
			uEntity.setUpdateDate(new Date());
			uEntity.update();
		}
		
		return RetKit.ok(entity.getId());
	}
	
	/**
	 * @Description: 借阅
	 * @author H
	 * @date 2021-05-13 15:58:52
	 * @return
	 */
	public Ret borrow(Personal entity,Cd cd) {
		//借阅人信息
		entity.save();
		
		//借阅信息
		Borrow borrow = new Borrow();
		borrow.setCdId(cd.getId());
		borrow.setPsnlId(entity.getId());
		borrow.setBorrowDate(new Date());
		borrow.save();
		
		//更新专辑状态
		cd.setStatus(CdStatusEnum.BORROWING.getOrdinal());
		cd.update();
		return RetKit.ok(entity.getId());
	}
	
	/**
	 * @Description: 归还专辑
	 * @author H
	 * @date 2021-05-13 16:46:13
	 * @return
	 */
	public Ret back(Integer cdId) {
		Cd entity = findById(cdId);
		//归还时间
		Date backDate = new Date();
		Record record = BorrowApi.api.findByCdId(cdId);
		//借阅时间
		Date borrowDate = record.getDate("borrowDate");
		//判断是否逾期
		if(DateUtil.getDays(borrowDate, backDate)>30) {
			entity.setStatus(CdStatusEnum.OVERDUE.getOrdinal());
		}else {
			entity.setStatus(CdStatusEnum.LOANABLE.getOrdinal());
		}
		entity.update();
		
		Borrow borrow = BorrowApi.api.findById(record.getInt("id"));
		borrow.setBackDate(backDate);
		borrow.update();
		
		return RetKit.ok(entity.getId());
	}

}
