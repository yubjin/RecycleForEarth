import axios from "axios";
import { useEffect, useRef, useState } from "react"
import Slider from "react-slick";
import styled from "styled-components";
const Center = () => {
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
    const onButtonClick = e=>{
      setSearchCenter(myInput.current.value);
    }

    
    const settings = {
      dots: true,
      infinite: false,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 3,
      vertical: true,
      verticalSwiping: true,
      arrows: true,
      centerPadding: '0px',
      
    };

    
  const Wrap = styled(Slider)`

  
  /* Slider Section */

.slick-slider {
    width: 100%;
    padding: 0;
    position: relative;
    top: 5%; 
        
}

#slider {
    height: 100%;
    padding: 2% 10%;
}

#slider img {
    width: 100%;
    margin: 0;
    padding: 0;
}

.slide {
    position: relative;
    border: none;
}

.slide-content {
    position: absolute;
    top: 0px;
    right: 0%;
    height: 100%;
    width: 35%;
    background-color: #000;
    opacity: 0.8;
    color: #fff;
    text-align: center; 
    padding: 25px 70px 25px 25px;  
    text-align: left;  
}

/* Slick Arrows */

.slick-prev, .slick-next {
    height: 20px;
    width: 20px;
    background-size: contain;
    background-repeat: no-repeat;
    position: absolute;
   
}

.slick-prev {
    background-image: url('/images/slider-up-arrow.png');

    /* place button top right */
    top: 2%;
    right: 1%;
    z-index: 10;
}


.slick-next {
    background-image: url('/images/slider-down-arrow.png');

    /* place button bottom right */
    right: 1%;
    bottom: 2%;
    z-index: 20;
}

.slick-prev:hover {
    background-image: url('/images/slider-up-arrow-hover.png');
    background-color: grey;

    /* place button top right */
    top: 2%;
    right: 1%;
    z-index: 10;
}

.slick-next:hover {
    background-image: url('/images/slider-down-arrow-hover.png');

    /* place button bottom right */
    right: 1%;
    bottom: 2%;
    z-index: 20;
}
  `;

  return (
    <div>
      <form>
        <input type="text" name="keyword" ref={myInput}/>
        <button type="button" onClick={onButtonClick}>검색하기</button>
      </form>
      <hr/>

      <table border='1'>
        <tbody>
          {centers.length> 0 ? (
            <Wrap>
              <Slider {...settings}>
              {centers.map((v) => {
              return (
                <tr key={v.id}>
                  <td>{v.centerNm}</td>
                  <td>{v.addRoad}</td>
                  <td>{v.lat}</td>
                  <td>{v.lng}</td>
                </tr>
              );
            })}
              </Slider>
            </Wrap>
            
          ) : (
            <tr>
              <td>검색결과가 없습니다.</td>
            </tr>
          )}
        </tbody>
      </table>
        
    </div>
  )
}

export default Center
