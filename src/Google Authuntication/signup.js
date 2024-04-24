import { useState } from "react"
import { auth } from "../firebase/config"
import { createUserWithEmailAndPassword } from "firebase/auth";
import { signInWithEmailAndPassword } from "firebase/auth";
import "./signup.css"
import { sendPasswordResetEmail } from "firebase/auth/web-extension";
export const Signup = () => {
    const [userCredentials, setUserCredentials] = useState({
        email:null,
        password:null
    })
    const [loginType, setLoginType] = useState(false)
    const [error, setError] = useState(null)
    console.log(auth)

    const changeLoginType = () => {
        setLoginType(true)
    }

    const changeSignupType = () => {
        setLoginType(false)
    }

    const onChangeHandler = (e) => {
        setError("")
        console.log(e.target.name)
        console.log(e.target.value)
        const { name, value } = e.target

        setUserCredentials(() => (
            { ...userCredentials, [name]: value }
        ))

    }

    const signUpSubmitHandler = (e) => {
        e.preventDefault()
        setError("")
        createUserWithEmailAndPassword(auth, userCredentials.email, userCredentials.password)
            .then((userCredential) => {
                const user = userCredential.user;
                console.log(user)
                alert("Registered Successfully")
                setError("")
                setLoginType(true)
                setUserCredentials({
                    ...userCredential, email:"",password:""
                })

            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                setError(errorMessage)
            });

    }

    const loginSubmitHandler = (e) => {
        setError("")
        e.preventDefault()
        signInWithEmailAndPassword(auth, userCredentials.email, userCredentials.password)
            .then((userCredential) => {
                const user = userCredential.user;
                console.log(user)
                alert("Login Successfully")
                setError("")
                 setUserCredentials({
                    ...userCredential, email:"",password:""
                })
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log(errorCode)
                console.log(errorMessage)
                setError(errorMessage)
            });

    }

    const passwordReset = () => {
        const email = prompt("Please Enter your Email")
        sendPasswordResetEmail(auth, email)
        alert("Email sent! check your inbox for password reset instractions")
    }

    return (
        <div className="main-container">
            <div className="btns">
                <button className="btn1" onClick={changeLoginType}>Signin</button>
                <button className="btn1" onClick={changeSignupType}>Signup</button>
            </div>
            <div className="form-container">
                <h3>{loginType ? "Login" : "Signup"}</h3>
                <form onSubmit={loginType ? loginSubmitHandler : signUpSubmitHandler}>
                    <div className="input-box">
                        <lebel>Email:</lebel>
                        <input type="email" value={userCredentials.email} name="email" onChange={onChangeHandler} required />
                    </div>
                    <div className="input-box">
                        <lebel>Password:</lebel>
                        <input type="password" value={userCredentials.password} name="password" onChange={onChangeHandler} required />
                    </div>
                    {error && <span className="error">{error}</span>}
                    <input className="loginbtn" type="submit" value={loginType ? "Signin" : "Signup"} />
                </form>
                <p className="forget" onClick={passwordReset}>forget Password?</p>
            </div>
        </div>
    )
}