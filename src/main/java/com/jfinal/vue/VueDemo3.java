package com.jfinal.vue;

import java.util.Date;

import com.jfinal.core.Controller;
import com.jfinal.kit.DateUtil;

public class VueDemo3 extends Controller{

	public void index() {
		render("test_demo3.html");
	}
	

	public void test() {
		String date = DateUtil.dateToStr(new Date(), "yyyyMMdd");
		setAttr("date", date);
		System.out.print(getRequest());
		String result = getPara("test");
		System.out.print(result);
	}
}
