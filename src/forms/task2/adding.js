import { useRef, useState } from "react"
import "./adding.css"

export const Adding = () => {
    const [store, setStore] = useState([])
    const valueRef = useRef("")
    const changeValueRef = useRef("")
    const [changeIndex, setChangeIndex] = useState(null)

    const Handler = (e) => {
        e.preventDefault()
        const Data = [...store, valueRef.current.value]
        setStore(Data)
        valueRef.current.value = "";
    }
    const changHandler = (e) => {
        e.preventDefault()
        console.log(changeIndex)
        const data = store.map((val, index) => {
            if (index === changeIndex) {
                return changeValueRef.current.value
            }
            else {
                return val
            }
        })
        setStore(data)
        setChangeIndex(null)

        changeValueRef.current.value = ""
    }

    const DeleteHandler = (i) => {
        const Data = store.filter((val, index) => {
            return i != index
        })

        setStore(Data)
    }

    const UpdateHandler = (index) => {
        setChangeIndex(index)
        console.log(changeIndex)
    }





    return (
        <div className="container">
            {/* {
                changeIndex!==null ?
                    <form onSubmit={changHandler}>
                        <input type="text" ref={changeValueRef} />
                        <button onClick={UpdateHandler}>Change</button>
                    </form>
                    :
                    <form onSubmit={Handler}>
                        <input type="text" ref={valueRef} />
                        <button>ADD</button>
                    </form>
            } */}

            <div className="forms">
                <form onSubmit={changeIndex !== null ? changHandler : Handler}>
                    <input type="text" ref={changeIndex !== null ? changeValueRef : valueRef} />
                    <button>{changeIndex !== null ? "Change" : "ADD"}</button>
                </form>
            </div>

            <div className="cards">
                <table>
                    <tr>
                        <th>Sl.No</th>
                        <th>Avengers</th>
                        <th>Delete</th>
                        <th>Update</th>
                    </tr>
                    {
                        store.map((val, index) => {
                            return (
                                <tr key={index}>
                                    <td>{index+1}</td>
                                    <td>{val}</td>
                                    <td><button onClick={() => DeleteHandler(index)}>Delete</button></td>
                                    <td><button onClick={() => UpdateHandler(index)}>Update</button></td>
                                </tr>
                            )
                        })
                    }
                </table>
            </div>

        </div>
    )
}