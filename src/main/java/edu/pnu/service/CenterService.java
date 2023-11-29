package edu.pnu.service;

import java.util.List;

import org.springframework.stereotype.Service;

import edu.pnu.domain.Board;
import edu.pnu.domain.CenterInfo;
import edu.pnu.domain.Items;
import edu.pnu.domain.Member;
import edu.pnu.persistence.BoardRepository;
import edu.pnu.persistence.CenterRepository;
import edu.pnu.persistence.ItemsRepository;
import edu.pnu.persistence.MemberRepository;
import lombok.RequiredArgsConstructor;

@RequiredArgsConstructor
@Service
public class CenterService {
	
	private final CenterRepository centerRepo;
	private final ItemsRepository itemsRepo;
	private final BoardRepository boardRepo;
	private final MemberRepository memRepo;
	
	public void test(CenterInfo center) {
		centerRepo.save(center);
	}

	public List<CenterInfo> getCenters() {
		return centerRepo.findAll();
	}

	public List<CenterInfo> getCenters(String add_road) {
		// TODO Auto-generated method stub
		return centerRepo.findByAddRoadContaining(add_road);
	}

	public CenterInfo getCenterInfo(String centerName) {
		
		return centerRepo.findByCenterNm(centerName);
	}

	public Items getTagInfo(String tagName) {
		return itemsRepo.findByDetails(tagName);
	}

	public void insertBoard(Board board) {
		
		Member member = memRepo.findById("member").get();
		board.setMember(member);
		boardRepo.save(board);
	}

	public void deleteBoard(Board board) {
		boardRepo.deleteById(board.getSeq());
	}

	public void updateBoard(Board board) {
		Board findBoard = boardRepo.findById(board.getSeq()).get();
		findBoard.setContent(board.getContent());
		boardRepo.save(findBoard);
	}

}
