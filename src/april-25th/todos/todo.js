import { useDispatch, useSelector } from "react-redux"
import { todoActionAdd, todoActionDelete, todoActionUpdate } from "../redux/action/action"
import { useState } from "react"
import "./todo.css"

export const Todo=()=>{
    const [todoValue,setTodoValue]=useState("")
    const [updateIndex, setUpdateIndex]=useState(null)
    const [controler,setControler]=useState(true)
    const {todos}=useSelector((state)=>state)

  
    const disptch=useDispatch()

    const addTodo=()=>{
        disptch(todoActionAdd(todoValue))
        setTodoValue("")
    }

    const deleteTodo=(index)=>{
        disptch(todoActionDelete(index))
    }

    const updateTodo=()=>{
        disptch(todoActionUpdate(updateIndex,todoValue))
        setControler(true)
        setTodoValue("")
    }

    const updateIndexValue=(index)=>{
        setUpdateIndex(index)
        setControler(false)
    }


    const inputFunction=(e)=>{
        setTodoValue(e.target.value)
    }
    return(
        <div className="todo-main">
            <h2 className="todo-title">Todo-List</h2>
            <div id="todo-input">
            <input className="todo" type="text" value={todoValue} onChange={inputFunction} required/>
           {controler?<button className="todo-btn" onClick={addTodo}>Add</button>:<button className="todo-btn" onClick={updateTodo}>Update</button>} 
           </div>
           <div className="todo-container">
            <table>
            {
                todos.map((val,index)=>{
                    return(
                        // <div className="todo-list">
                        //     <h5>{val}</h5>
                        //     <button onClick={()=>deleteTodo(index)}><i className="fa-solid fa-trash"></i></button>
                        //     <button onClick={()=>updateIndexValue(index)}><i className="fa-solid fa-pen-to-square"></i></button>
                        // </div>
                        <tr>
                            <td> {val}</td>
                            <td><i onClick={()=>deleteTodo(index)} className="fa-solid fa-trash"></i></td>
                            <td><i onClick={()=>updateIndexValue(index)} className="fa-solid fa-pen-to-square"></i></td>
                        </tr>
                    )
                })
            }
            </table>
            </div>
        </div>
    )
}