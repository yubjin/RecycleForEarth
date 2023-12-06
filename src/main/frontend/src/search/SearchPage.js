import { useContext, useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import Layout from "../../layout/Layout";
import Table from "../../components/Table";
import { useHttpClient } from "../../hoc/http-hook";
import { AuthContext } from "../../context/auth-context";
import SearchBar from "../search/SearchBar";
import FetchLoadingSpinner from "../../shared/FetchLoadingSpinner";

function LecturePage() {
  const auth = useContext(AuthContext);
  const { isLoading, sendRequest } = useHttpClient();

  const [lectureList, setLectureList] = useState([]);

  const location = useLocation();

  useEffect(() => {
    const keyWord = decodeURI(location.search);

    if (!!keyWord) {
      const fetchLectures = async () => {
        try {
          const responseData = await sendRequest(
            `http://10.125.121.220:3000/main${keyWord}`
          );

          setLectureList(responseData.searchedLectures.reverse());
        } catch (err) {}
      };

      fetchLectures();
    } else {
      const fetchLectures = async () => {
        try {
          const responseData = await sendRequest(
            `http://10.125.121.220:3000/main`
          );

          setLectureList(responseData.lectures.reverse());
        } catch (err) {}
      };

      fetchLectures();
    }
  }, [location]);

  return (
    <Layout>
      {isLoading && <FetchLoadingSpinner />}

      <div className="flex flex-col items-center px-2 mt-4 md:px-4 lg:px-10">
        <div className="w-full border-b-2 mb-2 pb-1 border-[#ffa4a2] flex justify-between items-center">
          <h1 className="text-xl font-bold sm:text-2xl md:text-3xl">강의</h1>

          {auth.manager ? (
            <Link
              to="/lecture/write"
              className="px-2 rounded border-2 border-[#ffcdd2] hover:bg-[#ffcdd2] hover:text-white hover:font-semibold hover:cursor-pointer"
            >
              강의 올리기
            </Link>
          ) : null}
        </div>

        <SearchBar/>

        {isLoading && <div>강의 불러오는 중</div>}

        {lectureList.length !== 0 && <Table dataList={lectureList} />}
      </div>
    </Layout>
  );
}

export default LecturePage;
