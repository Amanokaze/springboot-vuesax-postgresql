package com.sindoh.sdmes.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.sindoh.sdmes.model.MesSites;

public interface SiteRepository extends JpaRepository<MesSites, Long>{

}
