package com.jfinal;

import java.util.ArrayList;
import java.util.Comparator;

public class Test {
	public int test() {
		int[] nums = {1,3,5,4,7};
		int len =1;
        int cha = 0;
        ArrayList<Integer> jieguo = new ArrayList<Integer>();
        for (int i =0 ; i<nums.length-1 ; i++){
            int chat = nums[i+1]-nums[i];
            if (chat>cha){
                cha = chat;
                jieguo.add(len);
                len =1;
            }else if(chat== cha){
                len++;
            }
        }
        jieguo.sort(Comparator.naturalOrder());
        len = jieguo.get(jieguo.size()-1);
        return len;
	}
}
