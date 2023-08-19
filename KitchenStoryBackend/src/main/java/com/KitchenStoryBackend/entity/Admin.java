package com.KitchenStoryBackend.entity;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name="admin")
public class Admin {
	
@Id
private String emailid;

@Column(name="pass")
private String pass;


public String getEmailid() {
	return emailid;
}

@Override
public String toString() {
	return "Admin [emailid=" + emailid + ", pass=" + pass + "]";
}

public void setEmailid(String emailid) {
	this.emailid = emailid;
}



public String getPass() {
	return pass;
}

public void setPass(String pass) {
	this.pass = pass;
}

public Admin() {
	super();
}

public Admin(String emailid, String pass) {
	super();
	this.emailid = emailid;
	this.pass = pass;
}


}

