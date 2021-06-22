package com.jfinal.controller;

import com.jfinal.core.Controller;

public class MessageController extends Controller{

	public void index() {
		render("message_maintain.html");
	}
	
}
