import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "../pages/home"
import Products from "../Components/products"
import { About } from "../pages/about"

const Rounting=()=>{
    return(
       <BrowserRouter>
       <Routes>
        <Route path="/" Component={Home}/>
        <Route path="/about" Component={About}/>
        <Route />
       </Routes>
       </BrowserRouter>
    )
}

export default Rounting