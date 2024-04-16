import axios from "axios"
import { useEffect } from "react"
import { useState } from "react"


export const UseEffectExample1 = () => {
    const [data, setData] = useState([])
    const [eachProduct, setEachProduct] = useState({})
    const [control, SetControl] = useState(true)
    const [image, setImage] = useState("")
    useEffect(() => {
        fetchData()
        console.log("use Effect")
    }, [])

    useEffect(() => {
        eachObjectFetch()
    }, [])

    const fetchData = async () => {
        const result = await axios.get("https://dummyjson.com/products")
        console.log(result)
        setData(result.data.products)
        console.log(data)
    }

    const eachObjectFetch = async (id) => {
        if (id > 0) {
            const result = await axios.get(`https://dummyjson.com/products/${id}`)
            console.log(result)
            setEachProduct(result.data)
            SetControl(false)
        }

    }
    const changeHandler = () => {
        SetControl(true)
    }

    const changeImage = (i) => {
        const result = eachProduct.images.filter((val, index) => {
            return i == index
        })

        setImage(result)
    }

    return (
        <>
            <h1>Products</h1>
            {
                control
                    ?
                    <div className="products">

                        {
                            data.map((val) => {
                                return (
                                    <div className="card" key={val.id}>
                                        <img className="mainImg" src={val.images[0]} alt="image" />
                                        <h3>{val.title}</h3>
                                        <p> $ {val.price}</p>
                                        <button onClick={() => eachObjectFetch(val.id)}>See More</button>
                                    </div>
                                )
                            })
                        }
                    </div>
                    :
                    <>
                        <button className="btn" onClick={changeHandler}>Back</button>
                        <div className="container">
                            <div className="imageCart">
                                <div className="images">
                                    {
                                        eachProduct.images.map((val, index) => {
                                            return (
                                                <>
                                                    <img onClick={() => changeImage(index)} className="eachImages" src={val} alt="images/" />
                                                </>
                                            )
                                        })
                                    }
                                </div>
                                <div className="display">
                                    <img className="disImg" src={image} alt="main" />
                                </div>
                            </div>
                            <div className="content">
                                <h2>{eachProduct.title}</h2>
                                <p><i class="fa-solid fa-star"></i> {eachProduct.rating}</p>
                                <p className="desc">{eachProduct.description}</p>
                                <h1>₹ {eachProduct.price}</h1>
                            </div>
                        </div>
                    </>
            }

        </>
    )
}