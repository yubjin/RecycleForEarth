import { useLocation } from "react-router-dom";

const Header = () => {
  const locationNow = useLocation();
  if(window.location.pathname === '/login' || locationNow.pathname  ==='/') return null;

  return (
    <header className="text-gray-600 body-font">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <a href="/main" className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
          <img
              className="mx-auto h-10 w-auto"
              src="img/trashbox.png"
              alt="Logo"
            />
          <span className="ml-1 text-2xl font-bold">구해줘! 지구</span>
        </a>
        <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
          <a href="/main" className="mr-5 font-bold hover:text-gray-900">First Link</a>
          <a href="/search" className="mr-5 font-bold hover:text-gray-900">Second Link</a>
        </nav>
        <button className="inline-flex ml-4 items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none font-bold hover:bg-gray-200 rounded text-base mt-4 md:mt-0">
          <a href="/logout">로그아웃</a>
        </button>
        
        
      </div>
    </header>
  );
}

export default Header
