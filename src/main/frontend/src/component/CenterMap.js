import React, { useEffect, useState, useRef } from 'react'
import { Map,MapMarker } from 'react-kakao-maps-sdk';
import Kakao from './Kakao';

const {kakao} = window;
const CenterMap = ({clat, clng}) => {

    const mapRef = useRef({ markers: [] });
    const [marker, setMarker] = useState([]);
    const [myCenter, setMyCenter] = useState({
        center: {
            lat: clat, lng: clng,
        },
        errMsg: null,
        isLoading: true,
    });
    
   /*  useEffect(()=>{
        const geocoder = new kakao.maps.services.Geocoder();
        const updateMark = () =>{
            const full = centers.addRoad;
            geocoder.addressSearch(full, (result, status)=>{
                if(status == kakao.maps.services.Status.OK){
                    const coords = new kakao.maps.LatLng(result[0].y, result[0].x);
                    const marker = new kakao.maps.Marker({
                        position: coords,
                    });
                    marker.setMap(mapRef.current);
                }
            })
        }
        setMarker(updateMark);
       
        if (centers.length > 0) {
            const firstAddr = centers[0].addRoad;
            geocoder.addressSearch(firstAddr, (result, status) => {
                if (status === kakao.maps.services.Status.OK) {
                    const coords = new kakao.maps.LatLng(result[0].y, result[0].x);

                    setMyCenter((prev) => ({
                        ...prev,
                        center: {
                            lat: coords.getLat(),
                            lng: coords.getLng(),
                        },
                    }));
                    // });
                }
            });
            console.log(myCenter)
        }
    }, [centers]);
    
 */
  return (
    <div id="map" style={{
        width: '100%',
        height: '100%'}}>
        <Map ref={mapRef} // 지도를 표시할 Container
            center={myCenter.center}
            style={{
                // 지도의 크기
                width: "100%",
                height: "700px",
                display: "flex",
            }}
            level={3} // 지도의 확대 레벨
        >
            <MapMarker position={{ lat: myCenter.center?.lat, lng: myCenter.center?.lng }} />
        </Map>
    </div>
  )
}

export default CenterMap