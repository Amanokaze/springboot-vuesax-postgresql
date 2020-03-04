package com.sindoh.sdmes.repository;

import java.util.Map;

import org.apache.ibatis.annotations.Mapper;
import org.springframework.stereotype.Repository;

@Repository
@Mapper
public interface MesProcMapper {
	public void createMenu(Map params);
	public void getMenuDesc(Map params);
}
