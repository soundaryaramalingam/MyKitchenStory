package com.KitchenStoryBackend.Repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.KitchenStoryBackend.entity.user;


@Repository
public interface UserRepository extends JpaRepository<user, String> {

}
