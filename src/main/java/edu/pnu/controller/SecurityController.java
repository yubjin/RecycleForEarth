package edu.pnu.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import edu.pnu.dto.MemberDTO;
import edu.pnu.service.MemberService;
import lombok.AllArgsConstructor;

@RestController
@AllArgsConstructor
public class SecurityController {
	
	private final MemberService memService;
	
	@PostMapping("/login")
	public void login() {}
	
	@GetMapping("/logout")
	public void logout() {}
	
	@PostMapping("/join")
	@ResponseBody
	public String join(@RequestBody MemberDTO memDTO) {
		String memberId = memService.join(memDTO);
		return "join" + memberId;
	}
}
