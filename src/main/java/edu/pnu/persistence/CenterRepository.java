package edu.pnu.persistence;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import edu.pnu.domain.CenterInfo;


public interface CenterRepository extends JpaRepository<CenterInfo, Integer>{
	List<CenterInfo> findByAddRoadContaining(String add_road);

	CenterInfo findByCenterNm(String centerName);
}
