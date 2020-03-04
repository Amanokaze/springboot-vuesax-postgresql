package com.sindoh.sdapp.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.sindoh.sdapp.model.AppSites;

public interface SiteRepository extends JpaRepository<AppSites, Long>{

}
