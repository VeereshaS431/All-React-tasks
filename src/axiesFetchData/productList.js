import { Component } from "react";
import axios from 'axios';
import "./productsstyle.css"
import CustomSpinner from "./spinner";




class Products extends Component {

    state = {
        items: [],
        dummyItem: []
    }

    componentDidMount() {
        this.fecthData()
    }



    fecthData = async () => {
        const result = await axios.get("https://dummyjson.com/products")

        this.setState({
            items: result.data.products,
            dummyItem: result.data.products
        })

    }



    LowToHigh = () => {

        setTimeout(()=>{
            this.setState({
                items: this.state.dummyItem
            })
        },0)


        setTimeout(()=>{
            const result = this.state.items.sort((a, b) => a.price - b.price)
            this.setState({
                items: result
            })
        },100)
    }

    HighToLow = () => {
        
        setTimeout(()=>{
            this.setState({
                items: this.state.dummyItem
            })
        },0)
       

        
        
        setTimeout(()=>{
            const result = this.state.items.sort((a, b) => b.price - a.price)
            this.setState({
                items: result
            })
        },100)
        
    }

    Range1To1000 = () => {

        setTimeout(()=>{
            this.setState({
                items: this.state.dummyItem
            })
        },0)
    


        setTimeout(()=>{
            const result = this.state.items.filter((val) => {
                return val.price >= 1 && val.price <= 1000
            })
            this.setState({
                items: result
            })
        },100)

    }

    Range1000To2000 = () => {

        setTimeout(()=>{
            this.setState({
                items: this.state.dummyItem
            },()=>{
                console.log(this.state.items)
            })
        },0)

    
        setTimeout(()=>{
            const result = this.state.items.filter((val) => {
                return val.price >= 1000 && val.price <= 2000
            })

            this.setState({
                items: result
            },()=>{
                console.log(this.state.items)
            })
        },100)

    }





    render() {
        return (
            <div className="center">


                {
                    this.state.items.length > 0
                        ?

                        <div className="main">
                            <div className="btns">
                                <button onClick={this.LowToHigh}>Low to High</button>
                                <button onClick={this.HighToLow}>High to Low</button>
                                <button onClick={this.Range1To1000}>₹1 - ₹1000</button>
                                <button onClick={this.Range1000To2000}>₹1000 - ₹2000</button>
                            </div>

                            <div className="mainContainer">

                            {
                                this.state.items.map((val) => {

                                    return (
                                        <div className="cards" key={val.id}>
                                            <img src={val.images[0]} alt={val.title} />
                                            <h2>{val.title}</h2>
                                            <h6>₹ {val.price}</h6>
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