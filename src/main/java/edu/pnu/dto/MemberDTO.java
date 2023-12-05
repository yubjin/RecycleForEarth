package edu.pnu.dto;

import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.util.StringUtils;

import edu.pnu.domain.Role;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Data
@Getter
@NoArgsConstructor
@AllArgsConstructor
public class MemberDTO {
	private String name;
	private String username;
	private String password;
	private Role role;
	private boolean enabled;

	public void encodingPassword(PasswordEncoder passwordEncoder) {
		if (StringUtils.isEmpty(password)) {
			return;
		}
		password = passwordEncoder.encode(password);
	}
}
