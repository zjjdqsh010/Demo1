package com.jfinal.email;

import java.security.GeneralSecurityException;
import java.util.Properties;

import javax.mail.Address;
import javax.mail.Message;
import javax.mail.MessagingException;
import javax.mail.Session;
import javax.mail.Transport;
import javax.mail.internet.InternetAddress;
import javax.mail.internet.MimeMessage;


public class EmailDemo1 {

	public static void main(String[] args) throws GeneralSecurityException, MessagingException {
		// 服务器地址:
		String smtp = "smtp.qq.com";
		// 登录用户名:
		String username = "username";
		// 登录口令:
		String password = "password";
		//授权码
		String epassword = "password";
		// 连接到SMTP服务器587端口:
		Properties props = new Properties();
		 
		// 开启debug调试
		props.setProperty("mail.debug", "true");
		// 发送服务器需要身份验证
		props.setProperty("mail.smtp.auth", "true");
		// 设置邮件服务器主机名
		props.setProperty("mail.host", smtp);
		// 发送邮件协议名称
		props.setProperty("mail.transport.protocol", "smtp");
		
		Session session = Session.getInstance(props);
		
		Message msg = new MimeMessage(session);
		msg.setSubject("Hello");
		StringBuilder builder = new StringBuilder();
		builder.append("Hi CJX .This is a new email from QSH!");
		msg.setText(builder.toString());
		msg.setFrom(new InternetAddress(username));
		
		Transport transport = session.getTransport();
		transport.connect(smtp, username, epassword);
		
		transport.sendMessage(msg, new Address[] { new InternetAddress(username) });
		transport.close();
	}
}
