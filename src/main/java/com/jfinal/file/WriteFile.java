package com.jfinal.file;

import java.io.FileOutputStream;
import java.io.IOException;
import java.io.OutputStream;

import org.junit.Test;

public class WriteFile {
	
	@Test
	public void writeFile() throws IOException {
//	    OutputStream output = new FileOutputStream("D:\\test\\love.txt");
//	    output.write(72); // H
//	    output.write(101); // e
//	    output.write(108); // l
//	    output.write(108); // l
//	    output.write(111); // o
//	    output.close();
	
	 try (OutputStream output = new FileOutputStream("D:\\test\\love.txt")) {
	        output.write("Hello".getBytes("UTF-8")); // Hello
	    } // 编译器在此自动为我们写入finally并调用close()
	}
}
