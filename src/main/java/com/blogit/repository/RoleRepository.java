package com.blogit.repository;

import java.util.List;
import java.util.Optional;

import com.blogit.model.ERole;
import com.blogit.model.Role;

public interface RoleRepository {

    Optional<Role> findByName(ERole name);

    Role save(Role role);

    List<Role> findAll();

}
