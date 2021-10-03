package com.blogit.config;

import java.time.LocalDateTime;
import java.util.Arrays;
import java.util.HashSet;

import com.blogit.model.ERole;
import com.blogit.model.Role;
import com.blogit.model.User;
import com.blogit.repository.RoleRepository;
import com.blogit.repository.UserRepository;

import org.springframework.boot.CommandLineRunner;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Component;

@Component
class Initializer implements CommandLineRunner {
	private final UserRepository userRepository;
	private final RoleRepository roleRepository;

	public Initializer(UserRepository userRepository, RoleRepository roleRepository) {
		this.userRepository = userRepository;
		this.roleRepository = roleRepository;
	}

	@Override
	public void run(String... args) throws Exception {

		roleRepository.save(new Role(ERole.ROLE_USER));
		roleRepository.save(new Role(ERole.ROLE_MODERATOR));
		roleRepository.save(new Role(ERole.ROLE_ADMIN));
		roleRepository.findAll().forEach(System.out::println);

		Role role = roleRepository.findByName(ERole.ROLE_ADMIN)
				.orElseThrow(() -> new RuntimeException("Cannot find ROLE_USER"));

		BCryptPasswordEncoder passwordEncoder = new BCryptPasswordEncoder();
		String password = "password";
		String encodedPassword = passwordEncoder.encode(password);

		userRepository
				.save(new User("Mohd", "Fahad", "fahad", "mohd.fahad@gmail.com", encodedPassword, LocalDateTime.now()));
		User user = userRepository.findByUsername("fahad")
				.orElseThrow(() -> new RuntimeException("Cannot find user fahad"));
		user.setRoles(new HashSet<>(Arrays.asList(role)));
		userRepository.save(user);

		userRepository.findAll().forEach(System.out::println);
	}
}
