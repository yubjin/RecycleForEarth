import { useLocation } from "react-router-dom";

const Header = () => {
  const locationNow = useLocation();
  if(window.location.pathname === '/login' || locationNow.pathname  ==='/'|| window.location.pathname  ==='/join') return null;

  return (
    <header className="text-gray-600 body-font ">
      <div 
      className="container mx-auto flex flex-wrap h-1/4 p-5 flex-col md:flex-row items-center ">
        
        <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
          <a href="/main" className="mr-5 font-bold hover:text-gray-900">센터 정보</a>
          <a href="/search" className="mr-5 font-bold hover:text-gray-900">마이페이지</a>
        </nav>
        <button className="inline-flex ml-4 items-center bg-green-200 border-0 py-1 px-3 focus:outline-none font-bold hover:bg-green-300 rounded text-base mt-4 md:mt-0">
          <a href="/logout">로그아웃</a>
        </button>
        
        
      </div>
    </header>
  );
}

export default Header
