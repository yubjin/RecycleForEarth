package edu.pnu.domain;

import java.util.ArrayList;
import java.util.List;

import jakarta.persistence.Entity;
import jakarta.persistence.EnumType;
import jakarta.persistence.Enumerated;
import jakarta.persistence.FetchType;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import jakarta.persistence.OneToMany;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@Getter
@Setter
@ToString(exclude="boardList")
@Builder
@AllArgsConstructor
@NoArgsConstructor
@Entity
public class Member {
	@Id
	private String username;
	private String password;
	private String name;
	
	@Enumerated(EnumType.STRING)
	private Role role;
	private boolean enabled;
	
	@Builder.Default
	@OneToMany(mappedBy="member", fetch=FetchType.EAGER)
	private List<Board> boardList = new ArrayList<Board>();
}
