import { useContext, useState } from "react"
import "./loginPage.css"
import { Link } from "react-router-dom"
import { DataShare } from "../route-stack/stack"

export const LoginPage = () => {
   const{loginMethod,userData,setLoginUser,loginUser} =useContext(DataShare)
    const [form, setForm] = useState({
        email: null,
        password: null
    })

    const [formError, setFormError] = useState({
        emailError: null,
        passwordError: null
    })

    const inputChange = (e) => {
        e.preventDefault()
        const { name, value } = e.target
        console.log(name, value)
        setForm(prevState => (
            { ...prevState, [name]: value }
        ))
        console.log(form, inputChange)

        switch (name) {
            case "email":
                if (value.length < 6) {
                    setFormError(prevState => (
                        { ...prevState, emailError: "Email length should be more then 6" }
                    ))
                }
                else {
                    setFormError(prevState => (
                        { ...prevState, emailError: null }
                    ))
                }
                break


            case "password":
                if (value.length < 4) {
                    setFormError(prevState => (
                        { ...prevState, passwordError: "Password length should be more then 4" }
                    ))
                }
                else {
                    setFormError(prevState => (
                        { ...prevState, passwordError: null }
                    ))
                }
                break

            default:
                setFormError(prevState => (
                    { ...prevState, emailError: null, passwordError: null }
                ))
        }
    }


    const submitHandler = (e) => {
        e.preventDefault();
        if (formError.emailError == null && formError.passwordError == null) {
           if(userData.some((val)=>val.email==form.email && val.password==form.password)){
            alert("login Successful")
            const userResult=userData.filter((val)=>val.email==form.email)
            setLoginUser(userResult[0])
            loginMethod()

            setForm(prevState => (
                {...prevState,email:"",password:""}
            ))
        }
        else{
            alert("Invalid email and Password")
        }
        }
        else {
            alert("Enter Currect Details")
        }
    }

    return (
        <>
        <div className="main-container">
            <div className="form-container">
                <h2>Login</h2>
                <form id="login-form" onSubmit={submitHandler}>
                    <div className="input-container">
                        <label>Email:</label>
                        <input id="email" onChange={inputChange} type="email" value={form.email} name="email" required />
                        {formError.emailError && <span className="errMsg">{formError.emailError}</span>}
                    </div>
                    <div className="input-container">
                        <label>Password:</label>
                        <input id="psw" onChange={inputChange} type="password" value={form.password} name="password" required />
                        {formError.passwordError && <span className="errMsg">{formError.passwordError}</span>}
                    </div>
                    <input id="submit" type="submit" />
                </form>
                <p>New User ? <span><Link to={"/signup"}>Register</Link></span></p>
            </div>
            </div>
        </>
    )
}