package com.sindoh.sdmes.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.sindoh.sdmes.model.MesGroups;

@Repository
public interface RoleRepository extends JpaRepository<MesGroups, Long> {
	Optional<MesGroups> findByName(String name);
}