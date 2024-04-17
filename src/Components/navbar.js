import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';


function NavbarExample({ cart }) {
  const [lgShow, setLgShow] = useState(false);
  const [cartProduct, setCartProducts]=useState([])

const increment=(id)=>{
  const result=cartProduct.map((val)=>{
    if(val.id==id){
      val.count+=1
      val.totalPrice=val.count*val.price
      return val
    }
    else{
      return val
    }
  })

  setCartProducts(result)
}


const decrement=(id)=>{
  const result=cartProduct.map((val)=>{
    if(val.id==id){
      val.count-=1
      val.totalPrice=val.count*val.price
      return val
    }
    else{
      return val
    }
  })

  setCartProducts(result)
}


const deleteitem=(id)=>{
      const data=cart.filter((val)=>{
        return val.id!=id
      })
      console.log(data)
      setCartProducts(data)
}




  return (
    <>
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
            Cart
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {
            cartProduct.map((val)=>{
              return(
                <div>
                  <img src={val.image}></img>
                  <h4>{val.title}</h4>
                  <p>{val.price}</p>
                  <p>{val.totalPrice}</p>
                  <div>
                    <button onClick={()=>decrement(val.id)}><i class="fa-solid fa-minus"></i></button>
                    <p>{val.count}</p>
                    <button onClick={()=>increment(val.id)}><i class="fa-solid fa-plus"></i></button>
                  </div>
                <i onClick={()=>deleteitem(val.id)} class="fa-solid fa-trash"></i>
                </div>
              )
            })
          }

          <h2>{cartProduct.reduce((acc,val)=>{
            return acc+val.totalPrice
          },0)}</h2>
        </Modal.Body>
      </Modal>
    </>

  );
}

export default NavbarExample;