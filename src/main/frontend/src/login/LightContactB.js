import React, { useEffect, useRef, useState } from "react";
import Kakao from "../component/Kakao";
import axios from "axios";
import CenterCard from "../component/CenterCard";
import Slider from "react-slick";
import styled from "styled-components";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function LightContactB() {
  const [centers, setCenters] = useState([]);
  const [searchCenter, setSearchCenter] = useState("");

  useEffect(()=>{
    const getCenter = async() => {
      try{
        const response = await axios.get('http://10.125.121.220:3000/main', {
          params: searchCenter?{add_road: searchCenter} : null
        });
        setCenters(centers=>response.data);
      }catch(e){
        console.error(e);
      }
    }
    getCenter();
  }, [searchCenter]);

  const myInput = useRef();
  const onButtonClick = e =>{
    setSearchCenter(myInput.current.value);
  }
    const settings = {
      dots: false,
      infinite: false,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 3,
      vertical: true,
      verticalSwiping: true,
      arrows: true,
      responsive: [           // 반응형 속성 설정
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        initialSlide: 1,      // 초기 슬라이드 위치
      },
    },
  ],
      
    };
  const Wrap = styled(Slider)`
  .slick-prev::before,
  .slick-next::before {
    opacity: 0;
    display: none;
  }
.slick-prev, .slick-next {
    height: 25px;
    width: 25px;
    position: relative;
    background-repeat: no-repeat;
}
.slick-prev {
    background-image: url('https://img.icons8.com/external-dreamstale-lineal-dreamstale/20/external-up-arrow-arrows-dreamstale-lineal-dreamstale-6.png');
    /* place button top right */
    top: 1%;
    right: 1%;
    margin: auto;
    transform : translate(100%, 1%);   
}
.slick-next {
    background-image: url('https://img.icons8.com/external-dreamstale-lineal-dreamstale/20/external-down-arrow-arrows-dreamstale-lineal-dreamstale-2.png');
    /* place button bottom right */
    right: -0.5%;
    bottom: 2%;
    margin: auto;
}
  `;
  
  return (
    <section className="text-gray-600 body-font relative">
      <div className="container px-5 py-14 mx-auto flex sm:flex-nowrap flex-wrap">
        <div className="lg:w-2/3 md:w-1/2 bg-gray-300 rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative">
          <Kakao searchPlace={centers}/>
        </div>
        <div className="lg:w-1/3 md:w-1/2 bg-white flex flex-col md:ml-auto w-full md:py-6 mt-8 md:mt-0">
          <h2 className="text-gray-900 text-lg mb-1 font-bold title-font ">
            주소 검색하기
          </h2>
          <p className="leading-relaxed mb-1 text-gray-600">
            가까운 재활용센터를 검색합니다.
          </p>
          <div className="relative mb-4">
            <input
              type="text"
              id="keyword"
              name="keyword"
              placeholder="주소를 입력해주세요"
              ref={myInput}
              className={`w-full bg-white rounded border border-gray-300 focus:border-green-500 focus:ring-2 focus:ring-green-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out`}
            />
          </div>
          <button type="button" onClick={onButtonClick} className={`text-white mb-8 bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded text-lg`}>
            검색하기
          </button>
          <div >
              {centers.length> 0 ? (
                <Wrap>
                  <Slider {...settings}>
                    {centers.map((i) => {
                      return (
                        <CenterCard key={i.id}
                        title={i.centerNm}
                        content={i.addRoad}
                        sptag={i.itemInfo.split('+')}
                        refv={myInput}
                      />
                      );
                    })}
                  </Slider>
                </Wrap>
              ) : (
                <table>
                  <tbody>
                    <tr>
                      <td>검색결과가 없습니다.</td>
                    </tr>
                  </tbody>
                </table>
              )}
          </div>
        </div>
      </div>
    </section>
  );
}

export default LightContactB;


