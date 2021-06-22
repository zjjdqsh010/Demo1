package com.jfinal.annotation;

import java.lang.annotation.Target;
import java.lang.annotation.RetentionPolicy;

import java.lang.annotation.ElementType;
import java.lang.annotation.Retention;


@Target(ElementType.FIELD)
@Retention(RetentionPolicy.RUNTIME)
public @interface Report {

	 
    int max() default 0;
 
    int min() default 0;
 
    String description() default "";

}
