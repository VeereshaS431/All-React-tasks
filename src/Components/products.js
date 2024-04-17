import axios from "axios"
import { useEffect, useState } from "react"
import "./products.css"
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

// import NavbarExample from "./navbar"

const Products = () => {
    const [lgShow, setLgShow] = useState(false);
    const [product, setProducts] = useState([])
    const [cart, setCart] = useState([])

    useEffect(() => {
        fetchData()
    }, [])


    const fetchData = async () => {
        const response = await axios.get('https://fakestoreapi.com/products')
        console.log(response)
        var result = response.data.map((val) => {
            const data = { ...val, count: 1, totalPrice: val.price }
            return data
        })

        setProducts(result)
    }

    const addCart = (id) => {
        if (cart.some((val) => { return id == val.id })) {
            alert("Already Added to Cart")
        }
        else {
            const results = product.filter((val) => {
                return val.id == id
            })
            const results1 = [...cart, results[0]]
            setCart(results1)
            console.log(cart)
        }

    }


    const increment = (id) => {
        const result = cart.map((val) => {
            if (val.id == id) {
                val.count += 1
                val.totalPrice = val.count * val.price
                return val
            }
            else {
                return val
            }
        })

        setCart(result)
    }

    const decrement = (id) => {

        const result = cart.map((val) => {
            if (val.id == id) {
                if (val.count > 0) {
                    val.count -= 1
                    val.totalPrice = val.count * val.price
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

        setCart(result)
    }

    const deleteitem = (id) => {
        const data = cart.filter((val) => {
            return val.id != id
        })
        console.log(data)
        setCart(data)
    }

    return (
        <>
            {/* <NavbarExample cart={cart}/> */}

            <Navbar bg="dark" data-bs-theme="dark">
                <Container>
                    <Navbar.Brand>Navbar</Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link><Link to={"/"}>Home</Link></Nav.Link>
                        <Nav.Link><Link to={"/about"}>About</Link></Nav.Link>
                        <Nav.Link>Pricing</Nav.Link>
                    </Nav>
                    <div className='cart-function'>
                        <Button onClick={() => setLgShow(true)}> <i class="fa-solid fa-cart-shopping"></i></Button>
                        <p className='count'>{cart.length > 0 ? cart.length : null}</p>
                    </div>
                </Container>
            </Navbar>

            <Modal
                size="lg"
                show={lgShow}
                onHide={() => setLgShow(false)}
                aria-labelledby="example-modal-sizes-title-lg"
            >
                <Modal.Header closeButton>
                    <Modal.Title id="example-modal-sizes-title-lg">
                       <h3>Cart</h3> 
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    {
                        cart.length > 0
                            ?
                            <div className="cart-box">
                                {
                                    cart.map((val) => {
                                        return (
                                            <div className="cart">
                                                <img className="cart-img" src={val.image}></img>
                                                <div className="cart-detail">
                                                    <h4>{val.title}</h4>
                                                    <p>Base Price: ₹{val.price}</p>
                                                    <p>Total Price: ₹{val.totalPrice}</p>
                                                </div>

                                                <div className="btns">
                                                    <button className="buts" onClick={() => decrement(val.id)}><i class="fa-solid fa-minus"></i></button>
                                                    <h4>{val.count}</h4>
                                                    <button className="buts" onClick={() => increment(val.id)}><i class="fa-solid fa-plus"></i></button>
                                                </div>
                                                <i onClick={() => deleteitem(val.id)} class="fa-solid fa-trash"></i>
                                            </div>
                                        )
                                    })
                                }

                                <h2 className="pay"><span>Total Amount</span> <span>₹{cart.reduce((acc, val) => {
                                    return acc + Math.floor(val.totalPrice)
                                }, 0)}</span></h2>
                            </div>
                            :
                                <h3>Empty Cart Please Add Items</h3>
                    }
                </Modal.Body>
            </Modal>



            <div className="card-Container">
                {
                    product.map((val) => {
                        return (
                            <div id="cards">
                                <img src={val.image} alt="img" />
                                <p>{val.title}</p>
                                <p>₹{val.price}</p>
                                <button className="add" onClick={() => addCart(val.id)}>Add to Cart</button>
                            </div>
                        )
                    })
                }
            </div>
        </>
    )
}

export default Products