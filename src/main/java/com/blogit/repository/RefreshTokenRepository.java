package com.blogit.repository;

import java.util.Optional;

import com.blogit.model.RefreshToken;
import com.blogit.model.User;

public interface RefreshTokenRepository {

    Optional<RefreshToken> findById(Long id);

    Optional<RefreshToken> findByToken(String token);

    Boolean deleteByUser(User user);

    RefreshToken save(RefreshToken refreshToken);

    Boolean delete(RefreshToken token);

}
