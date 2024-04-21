import axios from "axios"
import { useContext, useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import "./productDetails.css"
import { CustomNavbarExample } from "../components/navBarExaple"
import { DataShare } from "../route-stack/stack"

export const ProductDetails=()=>{
    const {addCart}=useContext(DataShare)
const {productId}=useParams()
const [eachProduct,setEachProduct]=useState({})
console.log("product")
useEffect(()=>{
fetchEachProduct()
},[productId])

const fetchEachProduct=async()=>{
    const response= await axios.get(`https://api.escuelajs.co/api/v1/products/${productId}`)
    setEachProduct(response.data)
}
console.log(eachProduct, "eachproduct")

    return(
        <>
        <CustomNavbarExample/>
        <div className="eachproduct-container">
        <div className="eachproduct-card">
            <img className="eachproduct-img" src={eachProduct.images} alt="eachProduct"/>
            <div className="eachproduct-para">
            <p>{eachProduct.title}</p>
            <p className="eachproduct-desc">{eachProduct.description}</p>
            <p> ₹ {eachProduct.price}</p>

            <button onClick={()=>addCart(eachProduct)} className="eachproduct-add">Add to Cart</button>
            </div>
        </div>
        </div>
        </>
    )
}