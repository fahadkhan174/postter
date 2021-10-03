package com.blogit.repository;

import java.util.Objects;
import java.util.Optional;

import com.blogit.model.RefreshToken;
import com.blogit.model.User;
import com.mongodb.client.result.DeleteResult;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.mongodb.core.MongoTemplate;
import org.springframework.data.mongodb.core.query.Criteria;
import org.springframework.data.mongodb.core.query.Query;
import org.springframework.stereotype.Repository;

@Repository
public class RefreshTokenRepositoryImpl implements RefreshTokenRepository {
    @Autowired
    private MongoTemplate mongoTemplate;

    @Override
    public Optional<RefreshToken> findById(Long id) {
        Query query = new Query();
        query.addCriteria(Criteria.where("id").is(id));
        return Optional.ofNullable(mongoTemplate.findOne(query, RefreshToken.class));
    }

    @Override
    public Optional<RefreshToken> findByToken(String token) {
        Query query = new Query();
        query.addCriteria(Criteria.where("token").is(token));
        return Optional.ofNullable(mongoTemplate.findOne(query, RefreshToken.class));
    }

    @Override
    public Boolean deleteByUser(User user) {
        Query query = new Query();
        query.addCriteria(Criteria.where("user").is(user));
        RefreshToken refreshToken = mongoTemplate.findAndRemove(query, RefreshToken.class);
        return Objects.isNull(refreshToken) ? false : true;
    }

    @Override
    public RefreshToken save(RefreshToken refreshToken) {
        RefreshToken savedRefreshToken = mongoTemplate.save(refreshToken);
        return savedRefreshToken;
    }

    @Override
    public Boolean delete(RefreshToken refreshToken) {
        DeleteResult deleteResult = mongoTemplate.remove(refreshToken);
        return deleteResult.wasAcknowledged();
    }

}
