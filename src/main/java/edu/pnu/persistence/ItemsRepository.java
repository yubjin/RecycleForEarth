package edu.pnu.persistence;

import org.springframework.data.jpa.repository.JpaRepository;

import edu.pnu.domain.Items;

public interface ItemsRepository extends JpaRepository<Items, Integer> {

	Items findByType(String tagName);

}
