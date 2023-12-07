import { useEffect } from "react";
import { Map, MapMarker } from 'react-kakao-maps-sdk';

const{ kakao } = window;

function Kakao() {
        
    useEffect(()=>{
        const container = document.getElementById('map');
        const options = {
            center: new kakao.maps.LatLng(37.50883463, 127.0325018),
            level: 3
        };
        const map = new kakao.maps.Map(container, options);
        const markerPosition = new kakao.maps.LatLng(37.50883463, 127.0325018);
        const marker = new kakao.maps.Marker({
            position: markerPosition
        });
        marker.setMap(map);
    }, [])

    return(
        <div id="map" style={{
            width: '100%',
            height: '100%'
        }}></div>
    )
}

export default Kakao;