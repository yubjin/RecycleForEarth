package edu.pnu.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import edu.pnu.domain.CenterInfo;
import edu.pnu.domain.Items;
import edu.pnu.service.CenterService;
import lombok.AllArgsConstructor;

@RestController
@AllArgsConstructor
public class CenterController {
	
	@Autowired
	private CenterService cs;
	
	@GetMapping("/main")
	public List<CenterInfo> getCenters(String add_road){
		return cs.getCenters(add_road);
	}
	
	@GetMapping("/api/center")
	public CenterInfo getCenterInfo(String name) {
		return cs.getCenterInfo(name);
	}
	@GetMapping("/api/tag")
	public Items getTagInfo(String name) {
		return cs.getTagInfo(name);
	}
	
}
