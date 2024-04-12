import { useState } from "react"

export const ControlLogin = ({userInfo,event}) => {
    const [email, setEmail] = useState(null)
    const [password, setPassword] = useState(null)
    const [errorEmail, setErrorEmail] = useState(null)
    const [errorPassword, setErrorPassword] = useState(null)
    const [users,setUsers]=useState([])

    console.log(userInfo)
    const onChangeEmail=(e)=>{
        const newEmail=e.target.value
        setEmail(newEmail)
        console.log(newEmail)
        console.log(userInfo.some(val=>val.Email==newEmail))
        if(userInfo.some(val=>val.Email==newEmail)){
            setErrorEmail(null)
        }
        else{
            setErrorEmail("Email Id not Exists Create Account")
        }
    }

    const onChangePassword=(e)=>{
        const newPassword=e.target.value
        setPassword(newPassword)
        if(userInfo.some(val=>val.password==newPassword)){
            setErrorPassword(null)
        }
        else{
            setErrorPassword("Invalid Password")
        }
    }


    const handleSubmitCase1=(e)=>{
        e.preventDefault()
      
        if(errorEmail==null && errorPassword==null){
            const newuser=userInfo.filter((val)=>{
                return email==val.Email
            })
            setUsers(newuser)
            alert("login Successfully")
        }

        setEmail("")
        setPassword("")

    }

    return (
        <div className="main">
            <div className="formContainer">
                <h1>Signin Form</h1>
                <form onSubmit={handleSubmitCase1}>
                    <div className="inputs">
                        <div className="row">
                            <label>Email</label>
                            <input onChange={onChangeEmail} type="email" value={email} required />
                        </div>
                        <div className="errors1">
                            {errorEmail && <span>{errorEmail}</span>}
                        </div>
                    </div>

                    <div className="row">
                        <div className="inputs">
                            <label>Password</label>
                            <input onChange={onChangePassword} type="password" value={password} required />

                        </div>
                        <div className="errors2">
                            {errorPassword && <span>{errorPassword}</span>}
                        </div>
                    </div>

                    <button>Signin</button>
                </form>
                <p>new User? <span className="signin" onClick={event}>Signup</span></p>
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
    )
}