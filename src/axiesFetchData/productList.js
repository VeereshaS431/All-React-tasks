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


        const result1 = result.data.products.map((val) => {
            const data = { ...val, count: 1, totalPrice: val.price }
            return data
        })

        this.setState({
            items: result1
        })

    }


    increment = (id) => {
        const newItems = this.state.items.map((val) => {
            if (id == val.id) {
                val.count += 1
                val.totalPrice = val.price * val.count
                return val
            }
            else {
                return val
            }
        })

        this.setState({
            items: newItems
        })
    }

    decrement = (id) => {
        const newItems = this.state.items.map((val) => {
            if (id == val.id) {
                if (val.count > 0) {
                    val.count -= 1
                    val.totalPrice = val.price * val.count

                    return val
                }
                else {
                    return val
                }
            }
            else {
                return val
            }
        })

        this.setState({
            items: newItems
        })

    }



    render() {
        console.log(this.state.items)
        return (
            <div className="center">

                {

                    this.state.items.length > 0
                        ?
                        <div className="container">
                            <div className="totalsum"><h1>Total Sum: ₹ <span>
                                {
                                    this.state.items.reduce((acc, val) => {
                                        return acc + val.totalPrice
                                    }, 0)
                                }
                            </span>
                            </h1>
                            </div>
                            <div className="main">
                                {
                                    this.state.items.map((val) => {
                                        console.log(val)
                                        return (
                                            <div className="cards">
                                                <img src={val.images[0]} alt={val.title} />
                                                <h2>{val.title}</h2>
                                                <h6>₹ {val.price}</h6>

                                                <div className="btn1">
                                                    <button onClick={() => this.decrement(val.id)}><i class="fa-solid fa-minus"></i></button>
                                                    <h4>{val.count}</h4>
                                                    <button onClick={() => this.increment(val.id)}><i class="fa-solid fa-plus"></i></button>
                                                </div>

                                                <div>
                                                    <h4>Total: ₹ <span>{val.totalPrice}</span></h4>
                                                </div>

                                            </div>
                                        )
                                    })
                                }
                            </div>
                        </div>
                        :

                        <CustomSpinner />
                }

            </div>
        )
    }
}
export default Products;