package com.KitchenStoryBackend.Repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.KitchenStoryBackend.entity.order;


@Repository
public interface OrderRepository extends JpaRepository<order, String>{

}
