import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";
import CenterMap from "./CenterMap";
import { Box, Modal, Typography } from "@mui/material";


function CenterDetail() {
    const {state} =  useLocation();
    const [centers, setCenters] = useState([]);
    const [isOpen, setIsOpen] = useState(false);
    const [items, setItems] = useState([]);
    const [details, setDetails] = useState([]);

    const openModal = (el) => {
      setIsOpen(true);
      setItems(el);
      const getItems = async () => {
        const {data} = await axios.get(`http://10.125.121.220:3000/api/tag?name=${items}`);
        return data;
      }
      getItems().then(result => setDetails(result));
    }
    const closeModal = () => setIsOpen(false);
    const style = {
      position: 'absolute',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      width: 600,
      bgcolor: 'background.paper',
      boxShadow: 24,
      p: 4,
      borderRadius: '8px',
      
    };


    useEffect(()=>{
      const getCenter = async() => {
        try{
          const response = await axios.get('http://10.125.121.220:3000/api/center', {
            params: state.name?{name: state.name}: null
          });
          setCenters(centers=>response.data);
          console.log(centers);
        }catch(e){
          console.error(e);
        }
      }
      getCenter();
    }, []);
    useEffect(() => {
      const getItems = async () => {
        const {data} = await axios.get(`http://10.125.121.220:3000/api/tag?name=${items}`);
        return data;
      }
      getItems().then(result => setDetails(result));
      console.log(details)
    }, [])
/*     useEffect(()=>{
      const getItem = async() => {
        try{
          const response = await axios.get('http://10.125.121.220:3000/api/tag', {
            params: items?{name: items}: null
          });
          setDetails(details=>response.data);
          console.log(details);
        }catch(e){
          console.error(e);
        }
      }
      getItem();
    }, []); */


  return (
    <section className="text-gray-600 body-font relative">
      <div className="container px-5 py-24 mx-auto flex sm:flex-nowrap flex-wrap">
        <div className="lg:w-2/3 md:w-1/2 bg-gray-300 rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative">
          <CenterMap clat={state.cla} clng={state.cln}/>
          <div className="w-200 bg-white flex flex-wrap py-6 rounded shadow-md z-50 absolute bottom-10 left-10">
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
              
              <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs mb-2">
                취급 품목
              </h2>
              <a href className={`text-green-500 leading-relaxed`}>
                {(centers.itemInfo || "").split('+').map((item, idx) =>
                <span key={idx} className="inline-block rounded-full px-3 py-1 text-sm border-green-200 border-2 text-green-800 mr-2 mb-2 hover:bg-green-200">
                  <button onClick={()=>openModal(item)}>{item}</button>
                  <Modal
                    open={isOpen}
                    onClose={closeModal}>
                      <Box sx={style}>
                        <Typography id="modal-modal-title" variant="h6" component="h2">
                          {items}
                        </Typography>
                        <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                        {details.recycleMethod}
                        </Typography>
                      </Box>
                  </Modal>
                </span>)}
              </a>
              <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs mt-4">
                전화번호
              </h2>
              <p className="leading-relaxed">{centers.busiCall}</p>
            </div>
          </div>
        </div>
        <div className="lg:w-1/3 md:w-1/2 bg-white flex flex-col md:ml-auto w-full md:py-8 px-7 mt-8 md:mt-0">
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