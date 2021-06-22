package com.jfinal.annotation;

import java.lang.reflect.Field;
import java.util.ArrayList;

import org.junit.Test;

public class AnnotaionTest {
	public static void valid(Object obj) throws IllegalAccessException {
        Class<?> clazz = obj.getClass();
        Field[] fields = clazz.getDeclaredFields();
        for (Field field:fields){
        	Report test = field.getAnnotation(Report.class);//获取属性上的@Test注解
            if(test != null){
                field.setAccessible(true);//设置属性可访问
 
                if("class java.lang.String".equals(field.getGenericType().toString())){//字符串类型的才判断长度
                    String value = (String)field.get(obj);
                    if(value != null && ((value.length() > test.max()) || value.length() < test.min())){
                        System.out.println(test.description());
                    }else {
                        System.out.println("恭喜你！用户名可用！");
                    }
                }
            }
        }
 
    }
 
    public static void main(String[] args){
    	Demo3 annotation = new Demo3();
        annotation.setName("abcess");
        try {
            valid(annotation);
        } catch (IllegalAccessException e) {
 
            e.printStackTrace();
        }
    }


    @Test
    public void run() {
    	Demo3 annotation = new Demo3();
        annotation.setName("abcess");
        try {
            valid(annotation);
        } catch (IllegalAccessException e) {
 
            e.printStackTrace();
        }
        
        ArrayList<Object> arrayList = new ArrayList<>();
        arrayList.size();
	}





}
