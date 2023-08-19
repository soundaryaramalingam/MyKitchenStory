package com.KitchenStoryBackend.Service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.KitchenStoryBackend.Repository.AdminRepository;
import com.KitchenStoryBackend.entity.Admin;


@Service
public class AdminService {

	@Autowired
	AdminRepository adminrepo;
	
	public Admin getAdminById(String emailid) {
		 Optional<Admin> admin = adminrepo.findById(emailid);
		if(admin.isPresent()) {
			 return admin.get();
		 }
		 else {
			 return null;
		 }
	}
	public List<Admin> listadmin(){
		return adminrepo.findAll();
	}
	
	public Admin updatepass(Admin adm) {
		Admin admin=adminrepo.findById(adm.getEmailid()).get();
		
		admin.setPass(adm.getPass());	
		return adminrepo.save(admin);
	}
}
