import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Join = () => {

  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");
  const [Name, setName] = useState("");
  const navigate = useNavigate();

  const onEmailHandler = (event) =>{
    setEmail(event.currentTarget.value);
  }
  const onPasswordHandler = (event) =>{
    setPassword(event.currentTarget.value);
  }
  const onNameHandler = (e)=>{
    setName(e.currentTarget.value);
  }
  const onClickSubmit = () =>{
    axios.post("/join", {
      "name" : Name,
      "username": Email,
      "password": Password,
    },{
      headers: {
        'Content-Type': 'application/json',
      },
    })
    .then (()=>{
      alert('회원가입이 완료되었습니다.')
      navigate('/login');
    })
    .catch(()=>{
      alert('회원가입이 완료되지 않았습니다.')
    });
  };

  return (
    <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
          <div className="sm:mx-auto sm:w-full sm:max-w-sm">
            <img
              className="mx-auto h-20 w-auto"
              src="img/trashbox.png"
              alt="Logo"
            />
            <h2 className="mt-5 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
              구해줘! 지구🌏
            </h2>
          </div>
  
          <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
            <form className="space-y-6" action="/login" method="POST">
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                  아이디
                </label>
                <div className="mt-1">
                  <input
                    id="email"
                    name="email"
                    type="email"
                    value={Email}
                    placeholder="아이디를 입력하세요"
                    onChange={onEmailHandler}
                    required
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-green-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
  
              <div>
                <div className="flex items-center justify-between">
                  <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
                    비밀번호
                  </label>
                </div>
                <div className="mt-1">
                  <input
                    id="password"
                    name="password"
                    type="password"
                    value={Password}
                    placeholder="비밀번호를 입력하세요"
                    onChange={onPasswordHandler}
                    required
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-green-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                  닉네임
                </label>
                <div className="mt-1">
                  <input
                    id="name"
                    name="name"
                    type="name"
                    value={Name}
                    placeholder="닉네임을 입력하세요"
                    onChange={onNameHandler}
                    required
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-green-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
  
              <div>
                <button
                  type="submit"
                  onClick={onClickSubmit}
                  className="flex w-full justify-center rounded-md bg-green-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-green-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600"
                >
                  회원가입
                </button>
              </div>
            </form>
          </div>
        </div>
  )
}

export default Join

