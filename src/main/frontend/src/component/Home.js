const Home = () => {
  return (
    <>
      <img src="/img/home.svg" className="w-full"/>
      <div className="absolute w-full h-full top-20 flex flex-col justify-center items-center">
        <button className="text-white mt-40 bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded text-lg font-bold">
          <a href="/login">시작하기</a>
        </button>
      </div>
    </>
  )
}

export default Home
