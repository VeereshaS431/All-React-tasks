import { useRef, useState } from "react"
import { CustomTable } from "./table"
import "./uncontrolledForm.css"

export const Uncontrolled = () => {
    const NameRef = useRef(null)
    const EmailRef = useRef(null)
    const passwordRef = useRef(null)
    const cPasswordRef = useRef(null)
    const [userData, setUserData] = useState([])
    const [error, setError] = useState(false)
    const [errorValue, setErrorValue] = useState(null)


    const Handler = (e) => {
        e.preventDefault()

        const user = {
            name: NameRef.current.value,
            email: EmailRef.current.value,
            password: passwordRef.current.value,
            confirmPassword: cPasswordRef.current.value
        }


        if (user.email.length < 5) {
            setError(true)
            setErrorValue("Email Should have more Then 5 Character")
        }
        else {
            setError(false)
            setErrorValue(null)
            if (user.password != user.confirmPassword) {
                setError(true)
                setErrorValue("Password Donot Match")
            }
            else {
                setError(false)
                setErrorValue(null)
                if (user.password.length < 5 || user.confirmPassword.length < 5) {
                    setError(true)
                    setErrorValue("Password Should have more Then 5 Character")
                }
                else {
                    setError(false)
                    setErrorValue(null)
                    if (userData.some(val => val.email == user.email)) {
                        setError(true)
                        setErrorValue("User Already Exists")
                    }
                    else {
                        setError(false)
                        setErrorValue(null)
                        const userInfo = [...userData, user]
                        setUserData(userInfo)

                        NameRef.current.value=""
                        EmailRef.current.value=""
                        passwordRef.current.value=""
                        cPasswordRef.current.value=""
                    }

                }

            }
        }

    }

    console.log(userData)
    return (
        <>
        <div className="container">
        <h1>Register Form</h1>
            <form onSubmit={Handler}>
                
                <div className="box">
                    <label htmlFor="name">Name</label>
                    <input type="text" id="name" ref={NameRef}></input>
                </div>

                <div className="box">
                    <label htmlFor="email">Email</label>
                    <input type="email" id="email" ref={EmailRef}></input>
                </div>

                <div className="box">
                    <label htmlFor="psw">password</label>
                    <input type="password" id="psw" ref={passwordRef}></input>
                </div>

                <div className="box">
                    <label htmlFor="cpsw">Confirm password</label>
                    <input type="password" id="cpsw" ref={cPasswordRef}></input>
                </div>

                {error && <p>{errorValue}</p>}

                <button id="btn">Submit</button>

            </form>


            <div>
                
                {userData==0?null:<div><h1>User Data</h1><CustomTable allData={userData}/></div>}
            </div>
            </div>
        </>
    )
}