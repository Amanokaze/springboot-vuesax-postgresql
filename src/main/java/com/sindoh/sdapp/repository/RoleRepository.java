package com.sindoh.sdapp.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.sindoh.sdapp.model.AppGroups;

@Repository
public interface RoleRepository extends JpaRepository<AppGroups, Long> {
	Optional<AppGroups> findByName(String name);
}