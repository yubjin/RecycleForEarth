package edu.pnu.domain;


import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

@Getter
@Setter
@ToString
@Entity
public class CenterInfo {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int id;
	
	private String centerNm;	//재활용센터명
	private String manage;		//재활용센터운영구분
	private String addRoad;		//소재지도도로명주소
	private String addLand;		//소재지지번주소
	
	private double lat;			//위도
	private double lng;			//경도
	private double area;		//면적
	
	private String est;			//설립연월
	
	private int carNum;			//차량보유대수
	
	private String itemInfo;	//주요취급품목정보
	private String busiNm;		//운영기관명
	private String busiCall;	//운영기관전화번호
	private String busiPNm;		//운영기관대표자명
	private String weekStDt;	//평일운영시작시각
	private String weekEndDt;	//평일운영종료시각
	private String holiStDt;	//공휴일운영시작시각
	private String holiEndDt;	//공휴일운영종료시각
	private String closeInfo;	//휴무일정보
	private String serInfo;		//애프터서비스정보
	private String webAdd;		//홈페이지주소
	private String mngCall;		//관리기관전화번호
	private String mngNm;		//관리기관명
	private String dataDt;		//데이터기준일자
	
	private int proCd;			//제공기관코드
	
	private String proNm;		//제공기관명

}
