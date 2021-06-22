package com.jfinal.file;

import java.io.File;
import java.io.IOException;

public class NewDemo {
	public static void main(String[] args) throws IOException {
		File f1 = new File("D:\\test\\love2.java");
        System.out.println(f1.createNewFile());
    }
}
