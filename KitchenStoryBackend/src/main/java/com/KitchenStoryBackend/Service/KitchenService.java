package com.KitchenStoryBackend.Service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.KitchenStoryBackend.Repository.KitchenRepository;
import com.KitchenStoryBackend.entity.Kitchen;


@Service
public class KitchenService {

	@Autowired
	KitchenRepository kitchenrepo;
	
	public List<Kitchen> ListKitchen(){
		
		return (List<Kitchen>) kitchenrepo.findAll();
	}

	public void deletekitchen(long id) {
		kitchenrepo.deleteById(id);
		
	}

	public Kitchen addkitchen(Kitchen mov) {
		return kitchenrepo.save(mov);
	}
	public Kitchen updatekitchen(Kitchen mov,Long id) {
		Kitchen movi=kitchenrepo.findById(id).get();
		movi.setCategory(mov.getCategory());
		movi.setDescr(mov.getDescr());
	//	medic.setExpirydate(med.getExpirydate());
		movi.setName(mov.getName());
		movi.setPrice(mov.getPrice());
	
		return kitchenrepo.save(movi);
	}

	public Optional<Kitchen> getkitchenById(long id) {
		return kitchenrepo.findById(id);
	}

	

}
