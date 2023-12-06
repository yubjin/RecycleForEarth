import axios from "axios";
import { useEffect, useRef, useState } from "react"

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
  )
}

export default Center
