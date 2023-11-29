package edu.pnu;

import java.util.List;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import edu.pnu.domain.CenterInfo;
import edu.pnu.persistence.CenterRepository;

@SpringBootTest
class MyTest {
	@Autowired
	CenterRepository centerRepo;
	
	@Test
	public void doWork() {
		List<CenterInfo> list = centerRepo.findByAddRoadContaining("부산");
		
		list.forEach(c->System.out.println(c));
	}
}



