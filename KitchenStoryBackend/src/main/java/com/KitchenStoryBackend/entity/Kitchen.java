package com.KitchenStoryBackend.entity;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name="kitchen")
public class Kitchen {
   
	@Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;
    
   @Column(name="name")
    private String name;
   
   @Column(name="descr")
    private String descr;
    
   @Column(name="category")
    private String category;
   
     
   @Column(name="price")
    private int price;
      
	public Kitchen() {
	super();
}

	public Kitchen(String name, String descr, String category, int price) {
	super();
	this.name = name;
	this.descr = descr;
	this.category = category;
	this.price = price;
	
}

public int getPrice() {
	return price;
}

public void setPrice(int price) {
	this.price = price;
}

public String getDescr() {
	return descr;
}

public void setDescr(String descr) {
	this.descr = descr;
}

public String getCategory() {
	return category;
}

public void setCategory(String category) {
	this.category = category;
}

	public long getId() {
	return id;
}

public void setId(long id) {
	this.id = id;
}

public String getName() {
	return name;
}

public void setName(String name) {
	this.name = name;
}

@Override
public String toString() {
	return "Kitchen [id=" + id + ", name=" + name + ", descr=" + descr + ", category=" + category + ", price=" + price 
			+ "]";
}


}
