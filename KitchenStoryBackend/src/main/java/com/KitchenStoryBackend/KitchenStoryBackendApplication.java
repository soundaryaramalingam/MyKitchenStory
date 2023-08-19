package com.KitchenStoryBackend;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.ComponentScan;

import com.KitchenStoryBackend.Repository.KitchenRepository;
import com.KitchenStoryBackend.entity.Kitchen;

@SpringBootApplication
@ComponentScan(basePackages = "com.KitchenStoryBackend.*")
public class KitchenStoryBackendApplication  implements CommandLineRunner {

	public static void main(String[] args) {
		SpringApplication.run(KitchenStoryBackendApplication.class, args);
	}
@Autowired
KitchenRepository kitchenrepo;


@Override
public void run(String... args) {
  //  String file="C:/Users/sound/OneDrive/Pictures/zebra_in_forest.jfif";
     
	   
		this.kitchenrepo.save(new Kitchen("Fried Rice","chinese","international",200));
	
}
	
}
