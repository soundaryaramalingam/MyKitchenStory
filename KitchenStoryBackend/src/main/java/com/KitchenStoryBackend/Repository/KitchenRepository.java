package com.KitchenStoryBackend.Repository;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.KitchenStoryBackend.entity.Kitchen;

@Repository
public interface KitchenRepository extends CrudRepository<Kitchen, Long>{

}
