package com.jfinal.controller;

import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.HashMap;
import java.util.Map;

import org.apache.commons.lang3.StringUtils;

import com.jfinal.api.CdApi;
import com.jfinal.api.Personal;
import com.jfinal.api.Cd;
import com.jfinal.core.ActionException;
import com.jfinal.core.Controller;
import com.jfinal.enums.CdStatusEnum;
import com.jfinal.kit.DateUtil;
import com.jfinal.kit.Ret;
import com.jfinal.plugin.activerecord.Page;
import com.jfinal.plugin.activerecord.Record;
import com.mj.constant.CoreConstant;

public class CdController extends Controller{
	
	/**
	 * @Description: cd管理页面
	 * @author H
	 * @date 2021-02-08 13:55:27
	 * @return
	 */
	public void index() {
		setAttr("nav", "maintain");
//		setAttr("Cd", Cd.dao.findById("5fd03b1f132b377143d78227"));
		render("cd_maintain.html");
	}
	
	public void list() {
		Integer offset = 0, pageSize = 20;
		try {
			offset = this.getParaToInt("offset", 0);
			pageSize = this.getParaToInt("limit", 10);
		} catch (ActionException e) {
			// do nothing
		}
		Integer pageNo = 1;
		if (offset > 0) {
			pageNo = (offset / pageSize) + 1;
		}
		Map<String, Object> cond = new HashMap<String, Object>(5);
		// 搜索
		cond.put(CoreConstant.SEARCH_KEYWORD, getPara("search", StringUtils.EMPTY));
		cond.put(CoreConstant.ORDER_FIELD, getPara("sort", StringUtils.EMPTY));
		cond.put(CoreConstant.ORDER_DIR, getPara("order", "asc"));
		///////////////////////////////////////////////////////////////////
		// 列表查询：每个页面都要这样写 - 固定代码快
		cond.put("pageNo", pageNo);
		cond.put("pageSize", pageSize);
		///////////////////////////////////////////////////////////////////
		this.setSessionAttr("CD_LIST_COND_COOKIE", cond);
		Page<Record> page = CdApi.api.page(pageNo, pageSize, cond);
		for (Record record : page.getList()) {
			String date_str = DateUtil.dateToStr(record.getDate("creat_date"), "yyyyMMdd");
			String status = CdStatusEnum.getDisp(record.getInt("status"));
		}
		renderJson(page);
	}
	

	public static String dateTimeToStr(Date aDate) {
		if(aDate == null){
			return StringUtils.EMPTY;
		}
		SimpleDateFormat df = new SimpleDateFormat("yyyyMMdd HH:mm");
		return df.format(aDate);
	}
	/**
	 * @Description: 详情
	 * @author H
	 * @date 2020-12-08 14:09:32
	 * @return
	 */
	public void view() {
		Integer id = getParaToInt("id");
		Cd entity = CdApi.api.findById(id);
		setAttr("entity", entity);
		render("cd_view.html");
	}
	
	/**
	 * @Description: 借阅
	 * @author H
	 * @date 2020-12-08 14:09:32
	 * @return
	 */
	public void borrow() {
		Integer id = getParaToInt("id");
		Cd entity = CdApi.api.findById(id);
		setAttr("entity", entity);
		render("cd_borrow.html");
	}

	/**
	 * @Description: 执行借阅
	 * @author H
	 * @date 2021-05-13 15:52:17
	 * @return
	 */
	public void doBorrow() {
		Ret ret;
		Cd cd = getBean(Cd.class, "entity");
		Personal borrow = getBean(Personal.class, "psnl");
		ret = CdApi.api.borrow(borrow,cd);
		renderJson(ret);
	}
	/**
	 * @Description: 归还
	 * @author H
	 * @date 2021-05-13 15:52:17
	 * @return
	 */
	public void back() {
		Ret ret;
		Integer cdId = getParaToInt("id");
		ret = CdApi.api.back(cdId);
		renderJson(ret);
	}
}
