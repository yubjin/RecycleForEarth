package edu.pnu.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import edu.pnu.domain.Board;
import edu.pnu.service.CenterService;
import lombok.AllArgsConstructor;

@RestController
@AllArgsConstructor
public class BoardController {
	
	@Autowired
	private CenterService cs;
	
	@PostMapping("/api/center/board")
	public void insertBoard(@RequestBody Board board) {
		cs.insertBoard(board);
	}
	
	@DeleteMapping("/api/center/board")
	public void deleteBoard(@RequestBody Board board) {
		cs.deleteBoard(board);
	}
	
	@PutMapping("/api/center/board")
	public void updateBoard(@RequestBody Board board) {
		cs.updateBoard(board);
	}
}
