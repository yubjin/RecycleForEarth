import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {

  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");
  const [isLogin, setIsLogin] = useState("");
  const navigate = useNavigate();

  const onEmailHandler = (event) =>{
    setEmail(event.currentTarget.value);
  }
  const onPasswordHandler = (event) =>{
    setPassword(event.currentTarget.value);
  }
  const onClickLogin = () =>{
    axios.post("/login", {
      "username": Email,
      "password": Password,
    },{
      headers: {
        'Content-Type':'application/json;charset=UTF-8',
        'Accept' : 'application/json',
        'Accept-Control-Allow-Origin' : '*',
      },
    })
    .then ((res)=>{

      const jwtToken = res.headers.get('Authorization');
      console.log('response', res);
      if (jwtToken != null){
        localStorage.setItem('jwt', jwtToken);
        setIsLogin(localStorage.getItem('jwt', jwtToken));
        navigate("/home");
      }
    })
    .catch((error)=>{
      console.log(error, "error");
      window.alert('이메일이나 비밀번호가 바르지 않습니다. 다시 입력해주세요.')
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
            <form className="space-y-6" action="#" method="POST">
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
                    onChange={onPasswordHandler}
                    required
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-green-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
  
              <div>
                <button
                  type="submit"
                  onClick={onClickLogin}
                  className="flex w-full justify-center rounded-md bg-green-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-green-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600"
                >
                  로그인
                </button>
              </div>
            </form>
  
            <p className="mt-10 text-center text-sm text-gray-500">
              회원이 아니라면?{' '}
              <a href="/join" className="font-semibold leading-6 text-green-600 hover:text-green-500">
                회원가입하기
              </a>
            </p>
          </div>
        </div>
  )
}

export default Login

