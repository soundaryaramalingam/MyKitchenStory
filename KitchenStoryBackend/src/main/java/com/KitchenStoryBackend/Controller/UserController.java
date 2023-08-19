package com.KitchenStoryBackend.Controller;

import java.util.UUID;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.KitchenStoryBackend.Service.OrderService;
import com.KitchenStoryBackend.Service.UserService;
import com.KitchenStoryBackend.entity.order;
import com.KitchenStoryBackend.entity.user;




@RestController
@CrossOrigin(origins="http://localhost:4200")
public class UserController {
	
	@Autowired
	UserService userserv;
	
	@Autowired
	OrderService orderserv;
	
	@GetMapping("/userlogin/{emailid},{pass}")
	public user getvalidateuser(@PathVariable("emailid") String emailid ,@PathVariable("pass") String pass ) {
		System.out.println("entered ...   "+emailid+"   "+pass);
		user usr=new user();
		usr=userserv.getuserById(emailid);
	//	System.out.println(usr.getPass());
		if(usr!=null) {
			System.out.println(usr.getPass()+","+pass);
			if((usr.getEmailid().equals(emailid))&&(usr.getPass().equals(pass))) {
				System.out.println("entered for user validation");
				return usr;
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
	@PostMapping("/order")
	public String addMovie(@RequestBody order orde) {
		System.out.println("entered"+orde);
		Long uuid=UUID.randomUUID().getMostSignificantBits() & Long.MAX_VALUE;
		orde.setOrderId(uuid.toString());
	    order ord=orderserv.addOrder(orde);
	    System.out.println(ord);
		return ord.getOrderId();
	}
}
