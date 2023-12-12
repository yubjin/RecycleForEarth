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

    const [selectedMarkers, setSelectedMarkers] = useState();

    // 초기 위치 표시
    const [state, setState] = useState({
        center: {
            lat: 35.234879,
            lng: 129.077231,
        },
        errMsg: null,
        isLoading: true,
    });

    useEffect(()=>{

        const geocoder = new kakao.maps.services.Geocoder();
        markersRef.current.forEach(marker => marker.setMap(null));

        const updateMark = searchPlace.map((item) => {
            const fullAddr = item.addRoad;
            geocoder.addressSearch(fullAddr, (result, status) => {
                if (status == kakao.maps.services.Status.OK) {
                    const coords = new kakao.maps.LatLng(result[0].y, result[0].x);
                    const marker = new kakao.maps.Marker({
                        position: coords,
                    });
                    marker.setMap(mapRef.current);
                    // 이전 마커를 배열에 저장
                    markersRef.current.push(marker);

                    // 마커 클릭 이벤트 리스너 추가
                    window.kakao.maps.event.addListener(marker, 'click', () => {
                        // 클릭할때마다 마커 상태 변화
                        setSelectedMarkers(coords);
                    })
                }
            });
        });

        console.log('selectedMarker', selectedMarkers);
        //마커들을 상태에 저장하고 지도에 추가
        setMarkers(updateMark);

        if (searchPlace.length > 0) {
            const firstAddr = searchPlace[0].addRoad;
            geocoder.addressSearch(firstAddr, (result, status) => {
                if (status === kakao.maps.services.Status.OK) {
                    const coords = new kakao.maps.LatLng(result[0].y, result[0].x);

                    setState((prev) => ({
                        ...prev,
                        center: {
                            lat: coords.getLat(),
                            lng: coords.getLng(),
                        },
                    }));
                    // });
                }
            });
        }
    }, [searchPlace]);


    return(
        <div id="map" style={{
            width: '100%',
            height: '100%'
        }}>
            <Map ref={mapRef} // 지도를 표시할 Container
                center={state.center}
                style={{
                    // 지도의 크기
                    width: "100%",
                    height: "700px",
                    display: "flex",
                }}
                level={3} // 지도의 확대 레벨
            >
                <MapMarker position={{ lat: state.center?.lat, lng: state.center?.lng }} />
            </Map>
        </div>
    )
}

export default Kakao;