import { useState } from "react"
import "./example1.css"
import { ControlLogin } from "./examplle2/example2"


export const ControledForm = () => {
    const [click,setClick]=useState(true)
    const [form, setForm] = useState({
        userName: null,
        Email: null,
        password: null,
        confirmPassword: null
    })

    const [users, setUsers]=useState([])

    const [error, setError] = useState({
        userNameErr: null,
        EmailErr: null,
        passwordErr: null,
        confirmPasswordErr: null,
        submitError:null
    })

    const onChangeHandler = (e) => {
        
        const { name, value } = e.target
        setForm(preState => ({
            ...preState, [name]: value
        }))

        switch (name) {
            case "userName":
                if (value.length < 4) {
                    setError({
                        ...error, userNameErr: "UserName should be greter then 4 character"
                    })
                }
                else {
                    setError({
                        ...error, userNameErr: null
                    })
                }
                break;

            case "Email":
                if (value == " ") {
                    setError({
                        ...error, EmailErr: "Enter Email Id"
                    })
                }
                else {
                    setError({
                        ...error, EmailErr: null
                    })
                }
                break;

            case "password":
                if (value.length<3) {
                    setError({
                        ...error, passwordErr: "password length should be greter then 3"
                    })
                }
                else {
                    setError({
                        ...error, passwordErr: null
                    })
                }
                break;

                case "confirmPassword":
                    if(form.password!=value){
                        setError({
                            ...error,confirmPasswordErr:"password do not Match"
                        })
                    }
                    else{
                        setError({
                            ...error,confirmPasswordErr:null
                        })
                    }
                    break;

        }

    }

    const handleSubmit=(e)=>{
        e.preventDefault()
        if(error.userNameErr==null && error.EmailErr==null && error.passwordErr==null && error.confirmPasswordErr==null){
            if(users.some(val=>val.Email==form.Email)){
                setError({
                    ...error,submitError:"User already Exists"
                })
            }
            else{
                const newUser=[...users,form]
                setUsers(newUser)
               
                setError({
                    ...error,submitError:null
                })
                setForm({
                    userName: "",
                    Email: "",
                    password: "",
                    confirmPassword: ""
                })
                alert("SignUp successfully")
            }
            
        }
    }

    const handler=()=>{
        console.log(click)
        setClick(!click)
    }

    return (
        <>
      
        {
            click
            ?
            <div className="main">
            <div className="formContainer">
                <h1>Signup Form</h1>
                <form onSubmit={handleSubmit}>
                    <div className="row">
                    <div className="inputs">
                        <label>Name</label>
                        <input onChange={onChangeHandler} type="text" name="userName" value={form.userName} required/>
                    </div>
                    <div className="errors1">
                    {error.userNameErr && <span>{error.userNameErr}</span>}
                    </div>
                   
                    </div>
                    <div className="row">
                    <div className="inputs">
                        <label>Email</label>
                        <input onChange={onChangeHandler} type="email" name="Email" value={form.Email} required/>
                    </div>
                    <div className="errors2">
                    {error.EmailErr && <span>{error.EmailErr}</span>}
                    </div>
                    </div>
                    <div className="row">
                    <div className="inputs">
                        <label>Password</label>
                        <input onChange={onChangeHandler} type="password" name="password" value={form.password} required/>
                       
                    </div>
                    <div className="errors3">
                    {error.passwordErr && <span>{error.passwordErr}</span>}
                    </div>
                    </div>

                    <div className="row">
                    <div className="inputs">
                        <label>Confirm Password</label>
                        <input onChange={onChangeHandler} type="password" name="confirmPassword" value={form.confirmPassword} required/>
                    </div>
                    <div className="errors4">
                    {error.confirmPasswordErr && <span>{error.confirmPasswordErr}</span>}
                    </div>
                    </div>

                    <button>SignUp</button>
                    <div className="errors5">
                    {error.submitError && <span>{error.submitError}</span>}
                    </div>
                </form>

                <p>Already have a account? <span className="signin" onClick={handler}>Signin</span></p>
            </div>


            <div className="tables">
                <h2>User Data</h2>
            <table>
                <tr>
                    <th>Sl.no</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Password</th>
                    <th>Confirm Password</th>
                </tr>

                {
                    users.map((val,index)=>{
                        return(
                            <tr>
                                <td>{index+1}</td>
                                <td>{val.userName}</td>
                                <td>{val.Email}</td>
                                <td>{val.password}</td>
                                <td>{val.confirmPassword}</td>
                            </tr>
                        )
                    })
                }
            </table>
            </div>
        </div>

        :
              <ControlLogin userInfo={users} event={handler}/>
        }

        </>
    )
}