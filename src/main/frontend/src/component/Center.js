import { useEffect, useState } from "react"

const Center = () => {
    const [centers, setCenters] = useState([]);

    useEffect(()=>{
        fetch('http://localhost:8080/main?add_road=')
        .then(response => response.json())
        .then(data => setCenters(data._embedded.centers))
        .catch(err => console.error(err));
    }, [])
  return (
    <div>
        
    </div>
  )
}

export default Center
