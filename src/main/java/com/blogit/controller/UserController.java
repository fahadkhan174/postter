package com.blogit.controller;

import java.util.List;

import javax.annotation.security.RolesAllowed;

import com.blogit.model.User;
import com.blogit.repository.UserRepository;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin(origins = "*")
@RequestMapping("/api")
public class UserController {

	private final Logger log = LoggerFactory.getLogger(HomeController.class);

	@Autowired
	public UserRepository userRepository;

	@GetMapping("/users")
	@RolesAllowed({ "ROLE_ADMIN" })
	List<User> findAll() {
		log.info("Getting All Users");
		List<User> users = (List<User>) userRepository.findAll();
		return users;
	}

	@GetMapping("/user")
	@RolesAllowed({ "ROLE_USER" })
	List<User> findByUsername() {
		log.info("Find user by username: ");
		List<User> users = (List<User>) userRepository.findAll();
		return users;
	}

}
