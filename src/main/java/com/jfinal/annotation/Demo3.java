package com.jfinal.annotation;


public class Demo3 {
	
	@Report(min = 6,max = 10,description = "用户名长度在6-10个字符之间")
	private String name;

	 
    public String getName() {
        return name;
    }
 
    public void setName(String name) {
        this.name = name;
    }
}
