import { BrowserRouter, Route, Routes } from "react-router-dom"
import { HomePage } from "../pages/home"

export const Navigation=()=>{
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" Component={HomePage} />
            </Routes>
        </BrowserRouter>
    )
}