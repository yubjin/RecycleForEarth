import React, { useEffect, useState } from "react";
import Kakao from "../component/Kakao";
import { useLocation } from "react-router-dom";
import axios from "axios";
import CenterMap from "./CenterMap";

function CenterDetail() {
    const {search} = useLocation();
    const encoded = decodeURI(search).split('=');
    const center = encoded[1]
    useEffect(()=>{
        console.log(center);
    }, [center]);

    const [centers, setCenters] = useState([]);

    useEffect(()=>{
      const getCenter = async() => {
        try{
          const response = await axios.get('http://10.125.121.220:3000/api/center', {
            params: center?{name: center}: null
          });
          setCenters(centers=>response.data);
          console.log(centers);
        }catch(e){
          console.error(e);
        }
      }
      getCenter();
    }, []);

  return (
    <section className="text-gray-600 body-font relative">
      <div className="container px-5 py-24 mx-auto flex sm:flex-nowrap flex-wrap">
        <div className="lg:w-2/3 md:w-1/2 bg-gray-300 rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative">
          <div className="z-10">
          <CenterMap centers={centers}/>
          </div>
          <div className="w-full bg-white flex flex-wrap py-6 rounded shadow-md z-50">
            <div className="lg:w-1/2 px-6">
              
              <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs">
                도로명 주소
              </h2>
              <p className="mt-1">
                {centers.addRoad}
              </p>
              <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs mt-4">
                운영 시간
              </h2>
              <p className="mt-1">
                {centers.weekStDt} - {centers.weekEndDt}
              </p>
            </div>
            <div className="lg:w-1/2 px-6 mt-4 lg:mt-0">
              
              <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs">
                취급 품목
              </h2>
              <a href className={`text-green-500 leading-relaxed`}>
                {centers.itemInfo}
              </a>
              <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs mt-4">
                전화번호
              </h2>
              <p className="leading-relaxed">{centers.busiCall}</p>
            </div>
          </div>
        </div>
        <div className="lg:w-1/3 md:w-1/2 bg-white flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0">
          <h2 className="text-gray-900 text-2xl mb-5 font-bold title-font">
            {centers.centerNm}
          </h2>
          <p className="leading-relaxed mb-5 text-gray-600">
            아직 작성된 후기가 없습니다.
          </p>
          <div className="relative mb-4">
            <label
              htmlFor="message"
              className="leading-7 text-sm text-gray-600"
            >
              이용 후기
            </label>
            <textarea
              id="message"
              name="message"
              className={`w-full bg-white rounded border border-gray-300 focus:border-green-500 focus:ring-2 focus:ring-green-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out`}
            ></textarea>
          </div>
          <button className={`text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded text-lg`}>
            등록
          </button>
        </div>
      </div>
    </section>
  );
}


export default CenterDetail;