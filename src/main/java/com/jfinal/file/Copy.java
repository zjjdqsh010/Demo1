package com.jfinal.file;

import java.io.File;
import java.io.FileInputStream;
import java.io.FileOutputStream;
import java.io.IOException;
import java.io.OutputStream;

import org.junit.Test;

public class Copy {

	public static void main(String[] args) {
		try {
			copy("D:\\test\\love.txt","D:\\test\\love5.txt");
		} catch (IOException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
	}
	/**
	 * @Description: 复制文件夹
	 * @author H
	 * @date 2021-06-11 13:53:55
	 * @return
	 */
	@Test
	public static void copy(String source,String copy) throws IOException{

		File f1 = new File(copy);
		f1.createNewFile();
		// 定义1000个字节大小的缓冲区:
		byte[] buffer = new byte[1000];
		try (FileInputStream input = new FileInputStream(source)) {
	        int n;
	        while ((n = input.read(buffer)) != -1) { // 读取到缓冲区
	            System.out.println("read " + n + " bytes.");
	        }
		} // 编译器在此自动为我们写入finally并调用close()
		
		try (OutputStream output = new FileOutputStream(f1)) {
			output.write(buffer); // Hello
		} // 编译器在此自动为我们写入finally并调用close()
	}
}
