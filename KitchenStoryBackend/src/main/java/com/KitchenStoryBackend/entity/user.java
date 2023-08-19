package com.KitchenStoryBackend.entity;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name="user")
public class user {

	@Id
	private String emailid;
	
	@Column(name="user_name")
	private String user_name;
	
	@Column(name="dob")
	private String dob;
	
	@Column(name="age")
	private int age;
	
	@Column(name="address")
	private String address;
	
	@Column(name="pass")
	private String pass;

	public String getEmailid() {
		return emailid;
	}

	public void setEmailid(String emailid) {
		this.emailid = emailid;
	}

	public String getUser_name() {
		return user_name;
	}

	public void setUser_name(String user_name) {
		this.user_name = user_name;
	}

	public String getDob() {
		return dob;
	}

	public void setDob(String dob) {
		this.dob = dob;
	}

	public int getAge() {
		return age;
	}

	public void setAge(int age) {
		this.age = age;
	}

	public String getAddress() {
		return address;
	}

	public void setAddress(String address) {
		this.address = address;
	}

	public String getPass() {
		return pass;
	}

	public void setPass(String pass) {
		this.pass = pass;
	}

	public user(String emailid, String user_name, String dob, int age, String address, String pass) {
		super();
		this.emailid = emailid;
		this.user_name = user_name;
		this.dob = dob;
		this.age = age;
		this.address = address;
		this.pass = pass;
	}

	public user() {
		super();
	}

	@Override
	public String toString() {
		return "user [emailid=" + emailid + ", user_name=" + user_name + ", dob=" + dob + ", age=" + age + ", address="
				+ address + ", pass=" + pass + "]";
	}
	
	
	
	
}
