package com.blogit.repository;

import java.util.List;
import java.util.Optional;

import com.blogit.model.ERole;
import com.blogit.model.Role;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.mongodb.core.MongoTemplate;
import org.springframework.data.mongodb.core.query.Criteria;
import org.springframework.data.mongodb.core.query.Query;
import org.springframework.stereotype.Repository;

@Repository
public class RoleRepositoryImpl implements RoleRepository {

    @Autowired
    private MongoTemplate mongoTemplate;

    @Override
    public Optional<Role> findByName(ERole name) {
        Query query = new Query();
        query.addCriteria(Criteria.where("name").is(name));
        return Optional.ofNullable(mongoTemplate.findOne(query, Role.class));
    }

    @Override
    public Role save(Role role) {
        return mongoTemplate.save(role);
    }

    @Override
    public List<Role> findAll() {
        List<Role> roles = mongoTemplate.findAll(Role.class);
        return roles;
    }

}
