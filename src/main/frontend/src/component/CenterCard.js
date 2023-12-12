import { useNavigate } from "react-router-dom";
const CenterCard = ({title, content, sptag, refv,lat,lng}) => {
  const navigate = useNavigate();
  const sptags = sptag.map((item, idx) =>
  <span key={`sp${idx}`} className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
    {item}
  </span>
  );
  const handleClick = (item) =>{
    refv.current.value = item;
  }
  const handleMove = (center, lat, lng) =>{
    navigate(`/api/center?name=`+center, {state: {name:center, cla: lat, cln: lng}});
  }


  return (
      <div className="w-full rounded overflow-hidden shadow-lg relative mb-4 border border-gray-300">
        <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2" onClick={()=>handleMove(title, lat, lng)}>{title}</div>
            <p className="text-gray-700 text-base" onClick={()=>handleClick(content)}>
                {content}
            </p>
        </div>
        <div className="px-6 pt-4 pb-2">
            {sptags}
        </div>
      </div>

  )
}

export default CenterCard
