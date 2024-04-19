import { Link } from "react-router-dom"
import "./navBarExaple.css"

export const CustomNavbarExample = () => {
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
                            <li className="nav-item"><Link>Home</Link></li>
                            <li className="nav-item"><Link>About</Link></li>
                            <li className="nav-item"><Link>Products</Link></li>
                        </ul>
                    </div>
                </div>
            </nav>

        </>
    )
}