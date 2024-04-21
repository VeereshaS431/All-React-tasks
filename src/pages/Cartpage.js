import { useContext } from "react"
import { DataShare } from "../route-stack/stack"
import { CustomNavbarExample } from "../components/navBarExaple"
import "./cartpage.css"

export const AddCartPage = () => {
    const { addCartData,cartDelete, cartIncrement, cartDecrement } = useContext(DataShare)
    return (
        <>
        <CustomNavbarExample/>
            <div className="cart-main">
                {
                    addCartData.length>0
                    ?
                    <div className="cart-container" >
                    <div className="cart-card">
                        {
                            addCartData.map((eachProduct) => {
                                return (
                                    <div className="add-card">
                                        <img className="add-img" src={eachProduct.images}></img>
                                        <div className="add-desc">
                                            <p className="add-title">{eachProduct.title}</p>
                                            <p>Price: ₹ {eachProduct.price}</p>
                                            <p>Total Price: ₹ {eachProduct.totalPrice}</p>
                                        </div>
                                        <div className="incremet">
                                            <i onClick={()=>cartDecrement(eachProduct.id)} className="fa-solid fa-minus"></i>
                                            <p className="eachproduct-count">{eachProduct.count}</p>
                                            <i onClick={()=>cartIncrement(eachProduct.id)} className="fa-solid fa-plus"></i>
                                        </div>
                                        <i onClick={()=>cartDelete(eachProduct.id)} className="fa-solid fa-trash"></i>
                                    </div>
                                )
                            })
                        }
                    </div>

                    <div className="cart-total">
                        <div className="cart-pay">
                            <span className="cart-pay-value">Payable Amount</span>
                            <span className="cart-pay-value">₹ 
                                {
                                    addCartData.reduce((acc,val)=>{
                                        return acc+val.totalPrice
                                    },0)
                                }
                            </span>
                        </div>
                        <button className="order">Place Order</button>
                    </div>

                </div>

                :
                
                <h1>Empty Cart Please Add Items</h1>

                }
               
            </div>

        </>
    )
}