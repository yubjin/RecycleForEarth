import { BrowserRouter, Routes, Route } from "react-router-dom"

const recycleForEarth = () => {
  return (
    <BrowserRouter>
        <article className="">

        </article>
        <article className="">
            <Routes>
                <Route path="/login" element={<Login/>}/>
            </Routes>
        </article>
    </BrowserRouter>
  )
}

export default recycleForEarth
