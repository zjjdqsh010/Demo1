package com.jfinal;

import java.lang.reflect.Method;

public class Demo2 {

	public static void main(String[] args) throws Exception{
		
	    //反射出该类的方法
	    Class aClass = Demo1.class;
	    Method method = aClass.getMethod("add", String.class, int.class);
	
	    //通过该方法得到注解上的具体信息
	    MyAnnotation annotation = method.getAnnotation(MyAnnotation.class);
	    String username = annotation.username();
	    int age = annotation.age();
	    System.out.print(username);
	    System.out.print(age);
	    //将注解上的信息注入到方法上
	    Object o = aClass.newInstance();
	    method.invoke(o, username, age);
	}
}
