package com.KitchenStoryBackend.Controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.KitchenStoryBackend.Repository.KitchenRepository;
import com.KitchenStoryBackend.Service.AdminService;
import com.KitchenStoryBackend.Service.KitchenService;
import com.KitchenStoryBackend.entity.Admin;
import com.KitchenStoryBackend.entity.Kitchen;


@RestController
@CrossOrigin(origins="http://localhost:4200")
public class KitchenController {

@Autowired
KitchenService kitchenserv;

@Autowired
AdminService adminserv;

@GetMapping("/listkitchen")
public ResponseEntity<List<Kitchen>> listKitchen() {
	
	List<Kitchen> kitchen=kitchenserv.ListKitchen();
	return new ResponseEntity<List<Kitchen>>(kitchen,HttpStatus.OK);
	
}
@PostMapping("/addkitchen")
public Kitchen addMovie(@RequestBody Kitchen mov) {
	System.out.println("entered");
	Kitchen mov1=kitchenserv.addkitchen(mov);
	return mov1;
}
@GetMapping("/deletekitchen/{id}")
public String deleteMedicine(@PathVariable("id") long id) {
	System.out.println("entered delete item");
	kitchenserv.deletekitchen(id);
	return "Item Deleted Successfully";
}

@PostMapping("/updatekitchen/{id}")
public Kitchen updateMovie(@RequestBody Kitchen mov, @PathVariable("id") long id) {
	System.out.println("entered update backend");
	return kitchenserv.updatekitchen(mov, id);
}
@GetMapping("/{id}")
public Kitchen getMovieById(@PathVariable("id") long id) {
	System.out.println("Entered get movie by id");
	return kitchenserv.getkitchenById(id).get();
}






}
