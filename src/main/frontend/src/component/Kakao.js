import { useEffect, useRef, useState } from "react";
import { Map, MapMarker } from 'react-kakao-maps-sdk';

const{ kakao } = window;

const Kakao = ({searchPlace}) => {
    // 위치 표시하기 위한 useRef
    const mapRef = useRef({ markers: [] }); //빈 배열로 초기화
    // 이전 마커를 저장
    const markersRef = useRef([]);

    // 마커 표시
    const [desMarkers, setMarkers] = useState([]);

    // 초기 위치 표시
    const [state, setState] = useState({
        center: {
            lat: 37.50883463,
            lng: 127.0325018,
        },
        errMsg: null,
        isLoading: true,
    });

    useEffect(()=>{
        const container = document.getElementById('map');
        const options = {
            center: new kakao.maps.LatLng(37.50883463, 127.0325018),
            level: 3,
        };
        const map = new kakao.maps.Map(container, options); //지도 생성
        searchPlace.forEach((i)=>{
            const marker = new kakao.maps.Marker({
                map: map,
                position: new kakao.maps.LatLng(i.lat, i.lng),
            });
            marker.setMap(map);
        })


    }, [])

    return(
        <div id="map" style={{
            width: '100%',
            height: '100%'
        }}></div>
    )
}

export default Kakao;