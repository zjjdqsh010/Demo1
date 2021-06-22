package com.jfinal.api;


import com.jfinal.plugin.activerecord.Db;
import com.jfinal.plugin.activerecord.Record;


public class BorrowApi {
	public static final BorrowApi api = new BorrowApi();

	public Borrow findById(Integer id) {
		return Borrow.dao.findById(id);
	}

	/**
	 * @Description: 根据cdId查找借阅信息
	 * @author H
	 * @date 2021-05-13 16:36:10
	 * @return
	 */
	public Record findByCdId(Integer cdId) {
		StringBuilder sql = new StringBuilder();
		sql.append("select t.* from borrow t");
		sql.append("where t.cdId = ?");
		return Db.findFirst(sql.toString(), cdId);
	}
}
