package com.KitchenStoryBackend.Service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.KitchenStoryBackend.Repository.OrderRepository;
import com.KitchenStoryBackend.entity.order;


@Service
public class OrderService {
	@Autowired
	OrderRepository orderrepo;
	
	public order addOrder(order order) {
		return orderrepo.save(order);
	}
}
