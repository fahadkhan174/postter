package com.blogit.repository;

import java.util.List;
import java.util.Optional;

import com.blogit.model.User;

public interface UserRepository {

	List<User> findAll();

	Optional<User> findByUsername(String username);

	User save(User user);

	Boolean existsByUsername(String username);

	Boolean existsByEmail(String email);

	User findById(String id);
}
