import { BrowserRouter, Route, Routes } from "react-router-dom"
import { HomePage } from "../pages/home"
import { AboutPage } from "../pages/about"
import { createContext, useState } from "react"
import { LoginPage } from "../pages/loginPage"
import { RegisterForm } from "../pages/registerPage"
import { ProductPage } from "../pages/products"
import { ProductDetails } from "../pages/productDetails"
import { AddCartPage } from "../pages/Cartpage"


export const DataShare = createContext()
export const Navigation = () => {
    const [login, setLogin] = useState(false)
    const [userData, setUserData] = useState([])
    const [loginUser, setLoginUser]=useState([])
    const [addCartData, setAddCartData]=useState([])
    const loginMethod = () => {
        setLogin(!login)
    }

    const addCart=(eachProduct)=>{
        const result={...eachProduct,count:1,totalPrice:eachProduct.price}
        if(addCartData.some((val)=>val.id==eachProduct.id)){
       alert("already Added to cart")
    }
    else{
        const resultData=[...addCartData,result]
        setAddCartData(resultData)
        console.log(addCartData,"nav")
    }
    }

    const cartIncrement=(id)=>{
        const result=addCartData.map((val)=>{
            if(val.id==id){
                val.count+=1
                val.totalPrice=val.count*val.price
                return val
            }
            else{
                return val
            }
        })
        setAddCartData(result)
    }

    const cartDecrement=(id)=>{
        const result=addCartData.map((val)=>{
            if(val.id==id){
                if(val.count>0){
                val.count-=1
                val.totalPrice=val.count*val.price
                return val
            }
            else{
                return val
            }
            }
            else{
                return val
            }
        })
        setAddCartData(result)
    }

    const cartDelete=(id)=>{
        const result=addCartData.filter((val)=>{
            return val.id!=id
        })

        setAddCartData(result)
    }

    return (
        <DataShare.Provider value={{
            loginMethod,
            userData,
            setUserData,
            loginUser,
            setLoginUser,
            addCart,
            addCartData,
            cartDecrement,
            cartIncrement,
            cartDelete
        }} >
            <BrowserRouter>
                {
                    login
                        ?
                        <Routes>
                            <Route path="/" Component={HomePage} />
                            <Route path="/about" Component={AboutPage} />
                            <Route path="/products" Component={ProductPage}/>
                            <Route path="/products/:title/:productId" Component={ProductDetails}/>
                            <Route path="/addCartPage" Component={AddCartPage}/>
                        </Routes>
                        :

                        <Routes>
                            <Route path="/" Component={LoginPage} />
                            <Route path="/signup" Component={RegisterForm} />
                        </Routes>

                }

            </BrowserRouter>
        </DataShare.Provider>
    )

}