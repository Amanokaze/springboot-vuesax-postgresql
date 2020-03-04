package com.sindoh.sdmes.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.sindoh.sdmes.model.MesUser;

@Repository
public interface UserRepository extends JpaRepository<MesUser, Long> {
	Optional<MesUser> findByUsername(String username);
	
	Boolean existsByUsername(String username);
	
}
