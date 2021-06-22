package com.jfinal.api;

import com.jfinal.plugin.activerecord.Db;


public class LoginApi {
	public static final LoginApi api = new LoginApi();


	/**
	 * 用户名密码登录
	 * @param userName
	 * @param pwd
	 * @param loginIp
	 * @return
	 */
	public Integer doLogin(String userName,String pwd) {
		StringBuilder sql = new StringBuilder();
		sql.append("select count(1) from user t");
		sql.append("  where t.user =? ");
		sql.append("  and t.password =? ");
		return Db.queryNumber(sql.toString(),userName,pwd).intValue();
	}
}
