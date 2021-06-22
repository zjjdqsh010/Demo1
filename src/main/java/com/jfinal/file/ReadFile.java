package com.jfinal.file;

import java.io.FileInputStream;
import java.io.IOException;
import java.io.InputStream;

import org.junit.Test;


public class ReadFile {

	@Test
	public void readFile() throws IOException{
		InputStream input = new FileInputStream("D:\\test\\love.txt");
		for (;;) {
	        int n = input.read(); // 反复调用read()方法，直到返回-1
	        if (n == -1) {
	            break;
	        }
            System.out.print((char)n);
	    }
		input.close(); // 关闭流
	}
}
