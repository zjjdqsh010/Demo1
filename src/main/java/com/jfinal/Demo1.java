package com.jfinal;

public class Demo1 {
	  //注解拥有什么属性，在修饰的时候就要给出相对应的值
    @MyAnnotation(username = "孙悟空", age = 20)
    public void add(String username, int age) {
	    System.out.print(username);
	    System.out.print(age);
    }
}
