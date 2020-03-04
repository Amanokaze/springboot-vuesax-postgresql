package com.sindoh.sdmes.security.payload;

import java.util.Set;

import javax.validation.constraints.Email;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Size;

import lombok.Data;

@Data
public class SignupRequest {
    @NotBlank
    @Size(min = 4, max = 30)
    private String username;
 
    @NotBlank
    @Size(max = 50)
    @Email
    private String email;
    
    private Set<String> role;
    
    @NotBlank
    @Size(min = 6, max = 300)
    private String password;
    
    private String last_name;
    private String first_name;
    private String phone;
    private String gender;
    private String language;    
  
}