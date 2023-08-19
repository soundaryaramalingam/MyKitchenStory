package com.KitchenStoryBackend.entity;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name="Orders")
public class order {
	
	@Id
	private String OrderId;
	
	@Column(name="totalitems")
	private int totalitems;
	
	@Column(name="total")
    private int total;
	
	@Column(name="emailid")
    private String emailid;
	
	
	@Column(name="items")
    private String items;
	
	@Column(name="dt")
    private String dt;

	public order() {
		super();
	}

	public order(int totalitems, int total, String emailid, String items, String dt) {
		super();
		this.totalitems = totalitems;
		this.total = total;
		this.emailid = emailid;
		this.items = items;
		this.dt = dt;
	}

	public String getOrderId() {
		return OrderId;
	}

	public void setOrderId(String orderId) {
		OrderId = orderId;
	}

	public int getTotalitems() {
		return totalitems;
	}

	public void setTotalitems(int totalitems) {
		this.totalitems = totalitems;
	}

	public int getTotal() {
		return total;
	}

	public void setTotal(int total) {
		this.total = total;
	}

	public String getEmailid() {
		return emailid;
	}

	public void setEmailid(String emailid) {
		this.emailid = emailid;
	}

	public String getItems() {
		return items;
	}

	public void setItems(String items) {
		this.items = items;
	}

	public String getDt() {
		return dt;
	}

	public void setDt(String dt) {
		this.dt = dt;
	}

	@Override
	public String toString() {
		return "Order [OrderId=" + OrderId + ", totalitems=" + totalitems + ", total=" + total + ", emailid=" + emailid
				+ ", items=" + items + ", dt=" + dt + "]";
	}

	
    
	
}
