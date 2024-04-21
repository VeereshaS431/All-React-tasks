import axios from "axios"
import { useContext, useEffect, useState } from "react"
import "./products.css"
import { CustomNavbarExample } from "../components/navBarExaple"
import { Link } from "react-router-dom"
import { DataShare } from "../route-stack/stack"

export const ProductPage = () => {
    const [products, setProducts] = useState([])
    const {addCart}=useContext(DataShare)

    useEffect(() => {
        fetchData()
    }, [])


    const fetchData = async () => {
        const response = await axios.get("https://api.escuelajs.co/api/v1/products")
        console.log(response)
        setProducts(response.data)
    }
    return (
        <>
        <CustomNavbarExample/>
        <div className="card-container">
            {
                products.map((eachProducts, index) => {
                    const { title, price, images,id } = eachProducts
                    if(index<48){
                        return (
                            <div className="cards">
                                <img className="card-img" src={images}></img>
                                <h4 className="card-title">{title}</h4>
                                <h5 className="card-price">₹ {price}</h5>
                                <button className="card-btn"><Link to={`${title}/${id}`}>View</Link></button>
                                <i onClick={()=>addCart(eachProducts)} class="fa-solid fa-cart-plus"></i>
                            </div>
                        )
                    }
                   
                })
            }

        </div>
        </>
    )
}