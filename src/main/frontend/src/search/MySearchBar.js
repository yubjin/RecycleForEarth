import React, { useState } from "react";


function MySearchBar(props) {
  const [searchKeyWord, setSearchKeyWord] = useState("");

  const onChangeHandler = (e) => {
    setSearchKeyWord(e.target.value);

    // 부모 컴포넌트에서 생성한 필터링 함수에 검색어를 전달한다.
    props.filtering(e.target.value);
  };

  return (
    <div className="flex justify-center my-4">
      <input
        placeholder="키워드를 입력해주세요."
        value={searchKeyWord}
        onChange={onChangeHandler}
        className="pl-2 mb-2 font-semibold w-[250px] h-[40px] border-2 border-[#ffcdd2] rounded focus:border-[#e57373] focus:outline-none sm:w-[400px] md:w-[500px] lg:w-[500px] lg:h-[50px]"
      />
    </div>
  );
}

export default MySearchBar;