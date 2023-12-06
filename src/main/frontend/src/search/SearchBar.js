import React, { useState } from "react";
import { BsSearch } from "react-icons/bs";
import { useNavigate, useSearchParams } from "react-router-dom";

function SearchBar() {
  const [searchKeyWord, setSearchKeyWord] = useState("");
  // useSearchParams는 URL에 쿼리 스트링을 입력해준다.
  const [searchParams, setSearchParams] = useSearchParams();
  const navigate = useNavigate();
  const onChangeHandler = (e) => {
    setSearchKeyWord(e.target.value);
  };

  const searchSubmitHandler = (e) => {
    e.preventDefault();

    // 검색 키워드가 존재하는 경우에만 setState를 진행한다.
    if (!!searchKeyWord) {
      setSearchParams({
        add_road: searchKeyWord,
      });
  };

  return (
    <form className="relative my-4" onSubmit={searchSubmitHandler}>
      <input
        placeholder="검색어를 입력해주세요"
        value={searchKeyWord}
        onChange={onChangeHandler}
        className="pl-2 mb-2 font-semibold w-[250px] h-[40px] border-2 border-[#ffcdd2] rounded focus:border-[#e57373] focus:outline-none sm:w-[400px] md:w-[500px] lg:w-[500px] lg:h-[50px]"
      />

      <button
        type="submit"
        className="absolute top-3 right-3 md:text-lg lg:top-4"
      >
        <BsSearch />
      </button>
    </form>
  );
}
}
export default SearchBar;