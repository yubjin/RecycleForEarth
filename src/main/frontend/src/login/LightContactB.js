import React, { useEffect, useRef, useState } from "react";
import Kakao from "../component/Kakao";
import axios from "axios";

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
  return (
    <section className="text-gray-600 body-font relative">
      <div className="container px-5 py-24 mx-auto flex sm:flex-nowrap flex-wrap">
        <div className="lg:w-2/3 md:w-1/2 bg-gray-300 rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative">
          <Kakao/>
          
        </div>
        <div className="lg:w-1/3 md:w-1/2 bg-white flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0">
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

          <div className="relative mb-4">
            <textarea
              id="message"
              name="message"
              className={`w-full bg-white rounded border border-gray-300 focus:border-green-500 focus:ring-2 focus:ring-green-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out`}
            ></textarea>
          </div>
          <div className="relative mb-4">
            <textarea
              id="message"
              name="message"
              className={`w-full bg-white rounded border border-gray-300 focus:border-green-500 focus:ring-2 focus:ring-green-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out`}
            ></textarea>
          </div>
          <table border='1'>
        <tbody>
          {centers.length> 0 ? (
            centers.map((v) => {
              return (
                <tr  key={v.id}>
                  <td>{v.centerNm}</td>
                  <td>{v.addRoad}</td>
                  <td>{v.lat}</td>
                  <td>{v.lng}</td>
                </tr>
              );
            })
          ) : (
            <tr>
              <td>검색결과가 없습니다.</td>
            </tr>
          )}
        </tbody>
      </table>

        </div>
      </div>
    </section>
  );
}

export default LightContactB;