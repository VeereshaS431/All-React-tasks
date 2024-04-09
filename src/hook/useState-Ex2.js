import "./useState-Ex2.css"
import { useState } from "react";

function CustomCard() {
    const [data, setData] = useState([{
        "id": 1,
        "title": "iPhone 9",
        "description": "An apple mobile which is nothing like apple",
        "price": 549,
        "discountPercentage": 12.96,
        "rating": 4.69,
        "stock": 94,
        "brand": "Apple",
        "category": "smartphones",
        "thumbnail": "https://cdn.dummyjson.com/product-images/1/thumbnail.jpg",
        "images": [
            "https://cdn.dummyjson.com/product-images/1/1.jpg",
            "https://cdn.dummyjson.com/product-images/1/2.jpg",
            "https://cdn.dummyjson.com/product-images/1/3.jpg",
            "https://cdn.dummyjson.com/product-images/1/4.jpg",
            "https://cdn.dummyjson.com/product-images/1/thumbnail.jpg"
        ]
    },
    {
        "id": 2,
        "title": "iPhone X",
        "description": "SIM-Free, Model A19211 6.5-inch Super Retina HD display with OLED technology A12 Bionic chip with ...",
        "price": 899,
        "discountPercentage": 17.94,
        "rating": 4.44,
        "stock": 34,
        "brand": "Apple",
        "category": "smartphones",
        "thumbnail": "https://cdn.dummyjson.com/product-images/2/thumbnail.jpg",
        "images": [
            "https://cdn.dummyjson.com/product-images/2/1.jpg",
            "https://cdn.dummyjson.com/product-images/2/2.jpg",
            "https://cdn.dummyjson.com/product-images/2/3.jpg",
            "https://cdn.dummyjson.com/product-images/2/thumbnail.jpg"
        ]
    },
    {
        "id": 3,
        "title": "Samsung Universe 9",
        "description": "Samsung's new variant which goes beyond Galaxy to the Universe",
        "price": 1249,
        "discountPercentage": 15.46,
        "rating": 4.09,
        "stock": 36,
        "brand": "Samsung",
        "category": "smartphones",
        "thumbnail": "https://cdn.dummyjson.com/product-images/3/thumbnail.jpg",
        "images": [
            "https://cdn.dummyjson.com/product-images/3/1.jpg"
        ]
    },
    {
        "id": 4,
        "title": "OPPOF19",
        "description": "OPPO F19 is officially announced on April 2021.",
        "price": 280,
        "discountPercentage": 17.91,
        "rating": 4.3,
        "stock": 123,
        "brand": "OPPO",
        "category": "smartphones",
        "thumbnail": "https://cdn.dummyjson.com/product-images/4/thumbnail.jpg",
        "images": [
            "https://cdn.dummyjson.com/product-images/4/1.jpg",
            "https://cdn.dummyjson.com/product-images/4/2.jpg",
            "https://cdn.dummyjson.com/product-images/4/3.jpg",
            "https://cdn.dummyjson.com/product-images/4/4.jpg",
            "https://cdn.dummyjson.com/product-images/4/thumbnail.jpg"
        ]
    },
    {
        "id": 5,
        "title": "Huawei P30",
        "description": "Huawei’s re-badged P30 Pro New Edition was officially unveiled yesterday in Germany and now the device has made its way to the UK.",
        "price": 499,
        "discountPercentage": 10.58,
        "rating": 4.09,
        "stock": 32,
        "brand": "Huawei",
        "category": "smartphones",
        "thumbnail": "https://cdn.dummyjson.com/product-images/5/thumbnail.jpg",
        "images": [
            "https://cdn.dummyjson.com/product-images/5/1.jpg",
            "https://cdn.dummyjson.com/product-images/5/2.jpg",
            "https://cdn.dummyjson.com/product-images/5/3.jpg"
        ]
    }])


    const changeHandle = (type, id) => {
        if ("update" === type) {
            const result1 = data.map((val, i) => {
                if (id == i) {
                    return ({
                        "id": 6,
                        "title": "MacBook Pro",
                        "description": "MacBook Pro 2021 with mini-LED display may launch between September, November",
                        "price": 1749,
                        "discountPercentage": 11.02,
                        "rating": 4.57,
                        "stock": 83,
                        "brand": "Apple",
                        "category": "laptops",
                        "thumbnail": "https://cdn.dummyjson.com/product-images/6/thumbnail.png",
                        "images": [
                            "https://cdn.dummyjson.com/product-images/6/1.png",
                            "https://cdn.dummyjson.com/product-images/6/2.jpg",
                            "https://cdn.dummyjson.com/product-images/6/3.png",
                            "https://cdn.dummyjson.com/product-images/6/4.jpg"
                        ]
                    })


                }
                else {
                    return val
                }
            })

            setData(result1)
            console.log(data)
        }

        else if ("delete" === type) {
            const result2 = data.filter((val, i) => {
                return id != i
            })

            setData(result2)
            console.log(data)
        }

        else if ("add" == type) {
            const result3 = [...data, {
                "id": 7,
                "title": "Samsung Galaxy Book",
                "description": "Samsung Galaxy Book S (2020) Laptop With Intel Lakefield Chip, 8GB of RAM Launched",
                "price": 1499,
                "discountPercentage": 4.15,
                "rating": 4.25,
                "stock": 50,
                "brand": "Samsung",
                "category": "laptops",
                "thumbnail": "https://cdn.dummyjson.com/product-images/7/thumbnail.jpg",
                "images": [
                    "https://cdn.dummyjson.com/product-images/7/1.jpg",
                    "https://cdn.dummyjson.com/product-images/7/2.jpg",
                    "https://cdn.dummyjson.com/product-images/7/3.jpg",
                    "https://cdn.dummyjson.com/product-images/7/thumbnail.jpg"
                ]
            }]

            setData(result3)
            console.log(data)
        }

        else if ("reset" === type) {
            const result4 = [{
                "id": 1,
                "title": "iPhone 9",
                "description": "An apple mobile which is nothing like apple",
                "price": 549,
                "discountPercentage": 12.96,
                "rating": 4.69,
                "stock": 94,
                "brand": "Apple",
                "category": "smartphones",
                "thumbnail": "https://cdn.dummyjson.com/product-images/1/thumbnail.jpg",
                "images": [
                    "https://cdn.dummyjson.com/product-images/1/1.jpg",
                    "https://cdn.dummyjson.com/product-images/1/2.jpg",
                    "https://cdn.dummyjson.com/product-images/1/3.jpg",
                    "https://cdn.dummyjson.com/product-images/1/4.jpg",
                    "https://cdn.dummyjson.com/product-images/1/thumbnail.jpg"
                ]
            },
            {
                "id": 2,
                "title": "iPhone X",
                "description": "SIM-Free, Model A19211 6.5-inch Super Retina HD display with OLED technology A12 Bionic chip with ...",
                "price": 899,
                "discountPercentage": 17.94,
                "rating": 4.44,
                "stock": 34,
                "brand": "Apple",
                "category": "smartphones",
                "thumbnail": "https://cdn.dummyjson.com/product-images/2/thumbnail.jpg",
                "images": [
                    "https://cdn.dummyjson.com/product-images/2/1.jpg",
                    "https://cdn.dummyjson.com/product-images/2/2.jpg",
                    "https://cdn.dummyjson.com/product-images/2/3.jpg",
                    "https://cdn.dummyjson.com/product-images/2/thumbnail.jpg"
                ]
            },
            {
                "id": 3,
                "title": "Samsung Universe 9",
                "description": "Samsung's new variant which goes beyond Galaxy to the Universe",
                "price": 1249,
                "discountPercentage": 15.46,
                "rating": 4.09,
                "stock": 36,
                "brand": "Samsung",
                "category": "smartphones",
                "thumbnail": "https://cdn.dummyjson.com/product-images/3/thumbnail.jpg",
                "images": [
                    "https://cdn.dummyjson.com/product-images/3/1.jpg"
                ]
            },
            {
                "id": 4,
                "title": "OPPOF19",
                "description": "OPPO F19 is officially announced on April 2021.",
                "price": 280,
                "discountPercentage": 17.91,
                "rating": 4.3,
                "stock": 123,
                "brand": "OPPO",
                "category": "smartphones",
                "thumbnail": "https://cdn.dummyjson.com/product-images/4/thumbnail.jpg",
                "images": [
                    "https://cdn.dummyjson.com/product-images/4/1.jpg",
                    "https://cdn.dummyjson.com/product-images/4/2.jpg",
                    "https://cdn.dummyjson.com/product-images/4/3.jpg",
                    "https://cdn.dummyjson.com/product-images/4/4.jpg",
                    "https://cdn.dummyjson.com/product-images/4/thumbnail.jpg"
                ]
            },
            {
                "id": 5,
                "title": "Huawei P30",
                "description": "Huawei’s re-badged P30 Pro New Edition was officially unveiled yesterday in Germany and now the device has made its way to the UK.",
                "price": 499,
                "discountPercentage": 10.58,
                "rating": 4.09,
                "stock": 32,
                "brand": "Huawei",
                "category": "smartphones",
                "thumbnail": "https://cdn.dummyjson.com/product-images/5/thumbnail.jpg",
                "images": [
                    "https://cdn.dummyjson.com/product-images/5/1.jpg",
                    "https://cdn.dummyjson.com/product-images/5/2.jpg",
                    "https://cdn.dummyjson.com/product-images/5/3.jpg"
                ]
            }]


            setData(result4)
        }
    }


    return (
        <>
            <div className="container">
                <div className="btns">
                <button onClick={() => changeHandle("add")}>Add</button>
                <button onClick={() => { changeHandle("reset") }}>Reset</button>
                </div>
                <div className="mainContainer">
                    {
                        data.map((val, index) => {

                            return (
                                <div className="cards" key={index}>
                                    <img src={val.images[0]} alt={val.title} />
                                    <h3>{val.title}</h3>
                                    <h6>₹ {val.price}</h6>
                                    <div className="containBtns">
                                        <button onClick={() => { changeHandle("delete", index) }}>Delete</button>
                                        <button onClick={() => { changeHandle("update", index) }}>Update</button>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </>
    )


}

export default CustomCard;