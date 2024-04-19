import { useState } from "react"
// import { useAccordionButton } from "react-bootstrap"

export const CustomButton=()=>{
    const [count,setCount]=useState({})
    const[control,setControl]=useState(null)

    const increment=()=>{
        const result={
            name:"veeresh",
            id:101,
            course:"mech"
        }
        setCount(result)
        setControl(true)
    }

    const decrement=()=>{
        const result={
            name:"mallika"
        }
        setCount(result)
        setControl(false)
    }

    return(
        <>        
        <button onClick={increment}>increment</button>
        <button onClick={decrement}>decrement</button>
           {/* { count && <h1>{count.name}</h1>} */}

           {control?
           <>
           <h1>{count.name}</h1>
           <h1>{count.id}</h1>
           <h1>{count.course}</h1>
           </>
           :
           <h1>{count.name}</h1>}
        </>
    )
}