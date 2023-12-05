const Logout = () => {
    //let token = localStorage.getItem('token')

    localStorage.clear()
    window.location.replace('/')
    return (
        <div>
          로그아웃되었습니다.
        </div>
      )
}


export default Logout
