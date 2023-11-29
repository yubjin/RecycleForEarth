package edu.pnu.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;

import lombok.AllArgsConstructor;

@RestController
@AllArgsConstructor
public class SecurityController {
	@PostMapping("/users/login")
	public void login() {}
	
	@GetMapping("/users/accessDenied")
	public void accessDenied() {}
	
	@GetMapping("/users/logout")
	public void logout() {}
	
	@PostMapping("/users/join")
	public void join() {}
}
