package com.sindoh.sdapp.controller;

import java.util.List;
import java.util.Map;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.sindoh.sdapp.model.AppSites;
import com.sindoh.sdapp.repository.ProcMapper;
import com.sindoh.sdapp.repository.SiteRepository;

@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
@RequestMapping(value = "/api/data", produces = "application/json;charset=UTF-8")
public class DataController {
	@Autowired
	SiteRepository siteRepository;
	
	@Autowired
	ProcMapper mesProcMapper;

	@GetMapping(value = "/getSites")
	public List<AppSites> GetSites(HttpServletRequest request) {
		List<AppSites> sites = siteRepository.findAll();
		System.out.println(sites);

		return sites;
	}
	
	@PostMapping(value = "/insertMenu")
	public Map InsertMenu(HttpServletRequest request, @RequestBody Map params, HttpServletResponse response) throws Exception {
		mesProcMapper.createMenu(params);
		
		return params;
	}
	
	@PostMapping(value = "/getMenuDesc")
	public Map GetMenuDesc(HttpServletRequest request, @RequestBody Map params, HttpServletResponse response) throws Exception {
		mesProcMapper.getMenuDesc(params);
		return params;
	}
	

}
