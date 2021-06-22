package com.jfinal.vue;

import java.util.Date;

import com.jfinal.core.Controller;
import com.jfinal.kit.DateUtil;

public class VueDemo1 extends Controller{

	public void index() {
		render("test.html");
	}
	

	public void test() {
		String date = DateUtil.dateToStr(new Date(), "yyyyMMdd");
		setAttr("date", date);
		System.out.print(getRequest());
		String result = getPara("test");
		System.out.print(result);
	}
}
