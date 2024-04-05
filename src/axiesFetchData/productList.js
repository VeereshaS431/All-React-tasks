import { Component } from "react";
import axios from 'axios';
import "./productsstyle.css"
import { Spinner } from "react-bootstrap";
import CustomSpinner from "./spinner";


class Products extends Component {

    state = {
        items: []
    }

    componentDidMount() {
        this.fecthData()
    }

    fecthData = async () => {
        const result = await axios("https://dummyjson.com/products")

        this.setState({
            items: result.data.products
        })

    }


    Delete=(id)=>{
        const newItems=this.state.items.filter((val)=>{
            return val.id!=id
        })

        this.setState({
            items:newItems
        })
    }

    Update=(id)=>{
        const newItems=this.state.items.map((val)=>{
            if(val.id==id){
                return ({
                    "id": 3,
                    "title": "Mens Cotton Jacket",
                    "price": 55.99,
                    "description": "great outerwear jackets for Spring/Autumn/Winter, suitable for many occasions, such as working, hiking, camping, mountain/rock climbing, cycling, traveling or other outdoors. Good gift choice for you or your family member. A warm hearted love to Father, husband or son in this thanksgiving or Christmas Day.",
                    "category": "men's clothing",
                    "images": ["https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg"],
                    "rating": {
                        "rate": 4.7,
                        "count": 500
                    }
                })
            }
            else{
                return val
            }
           
        })

        this.setState({
            items:newItems
        })
    }




    render() {
        console.log(this.state.items)
        return (
            <div className="center">
                {

                    this.state.items.length > 0
                        ?
                        <div className="main">
                            {
                                this.state.items.map((val) => {
                                    console.log(val)
                                    return (
                                        <div className="cards">
                                            <img src={val.images[0]} alt={val.title}/>
                                            <h2>{val.title}</h2>
                                            {/* <p>{val.description}</p> */}
                                            <h6>₹ {val.price}</h6>
                                            <div className="btn1">
                                                <button onClick={()=>this.Delete(val.id)}>Delete</button>
                                                <button onClick={()=>this.Update(val.id)}>Update</button>
                                            </div>
                                        </div>
                                    )
                                })
                            }
                        </div>
                        :
          
                        <CustomSpinner/>
                }
    
            </div>
        )
    }
}
export default Products;