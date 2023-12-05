package edu.pnu;

import java.util.List;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import edu.pnu.domain.CenterInfo;
import edu.pnu.domain.Member;
import edu.pnu.domain.Role;
import edu.pnu.persistence.CenterRepository;
import edu.pnu.persistence.MemberRepository;

@SpringBootTest
class MyTest {
	@Autowired
	CenterRepository centerRepo;
	@Autowired
	MemberRepository memRepo;
	
	//@Test
	public void doWork() {
		List<CenterInfo> list = centerRepo.findByAddRoadContaining("부산");
		
		list.forEach(c->System.out.println(c));
	}
	@Test
	public void test() {
		Member mem = Member.builder()
				.username("abcd@naver.com")
				.password("1234")
				.name("홍길동")
				.role(Role.ROLE_MEMBER)
				.build();
		
		memRepo.save(mem);
	}

}



