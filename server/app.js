const express = require("express");
const app=express();
const cors=require("cors");
const stripe=require("stripe")("sk_test_51P96L8SGiU9Du0RFM26RPVNe1CeUucwGknnnpXOncL0DU2t268SAz9VHRRvfOWkgpjMNet7zE44n4jAGeLgasUv400rVEhcITP")

app.use(express.json());
app.use(cors());

// checkout api

app.post("/api/create-checkout-session",async(req,res)=>{
    const {products} = req.body;

    const lineItems=products.map((product)=>({
        price_data:{
            currency:"inr",
            product_data:{
                name:product.title
            },
            unit_amount:product.price * 100,
        },
        quantity:product.count
    }))

    const session=await stripe.checkout.sessions.create({
        payment_method_type:["card"],
        line_items:lineItems,
        mode:"payment",
        success_url:"http://localhost:3000/success",
        cancel_url:"http//localhost:3000/cancel"
    })

    res.json({id:session.id})
    
})

app.listen(3000,()=>{
    console.log("server start")
})