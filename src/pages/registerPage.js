import { Link } from "react-router-dom"
import "./registerPage.css"
import { useContext, useRef, useState } from "react"
import { DataShare } from "../route-stack/stack"

export const RegisterForm = () => {
    const {userData, setUserData}=useContext(DataShare)
    const NameRef = useRef(null)
    const EmailRef = useRef(null)
    const passwordRef = useRef(null)
    const cPasswordRef = useRef(null)
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
                        alert("registered successfully")

                        NameRef.current.value=""
                        EmailRef.current.value=""
                        passwordRef.current.value=""
                        cPasswordRef.current.value=""
                    }

                }

            }
        }

    }

    return (
        <div className="main-container">
            <div className="Register-container">
                <h2>Signup</h2>
                <form id="signup-form" onSubmit={Handler}>

                    <div className="input-container">
                        <label htmlFor="name">Name:</label>
                        <input type="text" id="name" ref={NameRef}></input>
                    </div>

                    <div className="input-container">
                        <label htmlFor="email">Email:</label>
                        <input type="email" id="emails" ref={EmailRef}></input>
                    </div>

                    <div className="input-container">
                        <label htmlFor="psw">Password:</label>
                        <input type="password" id="psws" ref={passwordRef}></input>
                    </div>

                    <div className="input-container">
                        <label htmlFor="cpsw">Confirm password:</label>
                        <input type="password" id="cpsw" ref={cPasswordRef}></input>
                    </div>

                    {error && <p className="errMsgs">{errorValue}</p>}

                    <button id="sub">signup</button>

                </form>
                <p>Already have a Account ? <span><Link to={"/"}>Login</Link></span></p>
            </div>
            </div>
    )
}