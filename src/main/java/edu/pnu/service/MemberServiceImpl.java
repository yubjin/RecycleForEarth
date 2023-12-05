package edu.pnu.service;

import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import edu.pnu.domain.Member;
import edu.pnu.domain.Role;
import edu.pnu.dto.MemberDTO;
import edu.pnu.persistence.MemberRepository;
import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class MemberServiceImpl implements MemberService{
	private final MemberRepository memRepo;
	private final PasswordEncoder passwordEncoder;
	
	@Override
	public String join(MemberDTO memDTO) {
		memDTO.encodingPassword(passwordEncoder);
		Member mem = Member.builder()
				.username(memDTO.getUsername())
				.password(memDTO.getPassword())
				.name(memDTO.getName())
				.role(Role.ROLE_MEMBER)
				.enabled(true)
				.build();
		
		return memRepo.save(mem).getUsername();
	}
}
