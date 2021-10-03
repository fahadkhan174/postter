package com.blogit.service;

import java.util.Optional;

import com.blogit.model.User;
import com.blogit.repository.UserRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class UserService {

    @Autowired
    UserRepository userRepository;
    
    public Optional<User> findByUsername(String username) {
        Optional<User> user = userRepository.findByUsername(username);
        return user;
    };

    public User create(User user){
        User savedUser = userRepository.save(user);
        return savedUser;
    }

}
