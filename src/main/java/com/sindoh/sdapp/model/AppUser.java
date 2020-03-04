package com.sindoh.sdapp.model;

import java.util.HashSet;
import java.util.Set;

import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.JoinTable;
import javax.persistence.ManyToMany;
import javax.persistence.Table;
import javax.persistence.UniqueConstraint;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Size;

import lombok.Data;

@Data
@Entity
@Table(name="app_user",
	   uniqueConstraints = {
			   @UniqueConstraint(columnNames = "username")
	   })
public class AppUser {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
	
	@NotBlank
	@Size(max = 20)
	private String username;
	
	@NotBlank
	@Size(max = 120)
	private String password;
	
	private String email;
	private String last_name;
    private String first_name;
    private String phone;
    private String gender;
    private String language; 
    
    @ManyToMany(fetch = FetchType.LAZY)
    @JoinTable(name = "app_user_groups",
    	joinColumns = @JoinColumn(name="user_id"),
    	inverseJoinColumns = @JoinColumn(name="group_id"))
    private Set<AppGroups> roles = new HashSet<>();
    
	public AppUser() {
		
	}
	
	public AppUser(String username, String password) {
		this.username = username;
		this.password = password;
	}

}
