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

import com.KitchenStoryBackend.Service.AdminService;
import com.KitchenStoryBackend.entity.Admin;
import com.KitchenStoryBackend.entity.user;


@RestController
@CrossOrigin(origins="http://localhost:4200")
public class AdminController {

	@Autowired
	AdminService adminserv;

	@GetMapping("/listadmin")
	public ResponseEntity<List<Admin>> listadmin(){
		
		List<Admin> admin=adminserv.listadmin();
		return new ResponseEntity<List<Admin>>(admin,HttpStatus.OK);
		
		
	}
	
	@GetMapping("/adminlogin/{emailid},{pass}")
	public Admin getvalidate(@PathVariable("emailid") String emailid ,@PathVariable("pass") String pass ) {
		System.out.println("entered ...   "+emailid);
		Admin admin=new Admin();
		admin=adminserv.getAdminById(emailid);
		if(admin!=null) {
			System.out.println(admin.getPass()+","+pass);
			if((admin.getEmailid().equals(emailid))&&(admin.getPass().equals(pass))) {
				System.out.println("entered for admin validation");
				return admin;
			}
			else {
				System.out.println("noo....");
				return null;
			}
			
		}
		else {
			System.out.println("no...");
			return null;
		}
		
	
		
	}
	@PostMapping("/updatepass")
	public Admin updatepass(@RequestBody Admin admin) {
		System.out.println("entered update backend "+admin.getEmailid()+" "+admin.getPass());
		return adminserv.updatepass(admin);
	}
	

	
	
		
	


	
}
