import { Link } from "react-router-dom"
import "./navBarExaple.css"
import { useContext } from "react"
import { DataShare } from "../route-stack/stack"

export const CustomNavbarExample = () => {
    const {loginMethod,loginUser,addCartData}=useContext(DataShare)
    return (
        <>
            <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
                <div className="container-fluid">
                   <h3 style={{color:"white"}}>Logo</h3>
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#mynavbar"
                    >
                        <span className="navbar-toggler-icon" />
                       
                    </button>
                    <div className="collapse navbar-collapse" id="mynavbar">
                        <ul className="navbar-nav me-auto">
                            <li className="nav-item"><Link to={"/"}>Home</Link></li>
                            <li className="nav-item"><Link to={"/about"}>About</Link></li>
                            <li className="nav-item"><Link to={"/products"}>Products</Link></li>
                        </ul>
                    </div>
                    <div className="logout-container">
                        <div className="user-container">
                        <i className="fa-solid fa-user"></i>
                        <h4 className="user">{loginUser.name}</h4>
                        </div>
                       <div className="cartIcon">
                        <Link to={"/addCartPage"}><i className="fa-solid fa-cart-shopping"></i></Link>
                        <p className="cartcount">{addCartData.length}</p>
                        </div>
                        <button className="nav-logout" onClick={loginMethod}>Logout</button>
                    </div>
                </div>
            </nav>

        </>
    )
}