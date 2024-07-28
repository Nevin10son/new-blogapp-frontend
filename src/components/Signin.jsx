import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Signin = () => {

    const navigate = useNavigate()
    const [input,setInput] = useState(
        {
            "emailid":"",
            "password":""
        }
    )

    const inputHandler= (event) => {
        setInput({...input,[event.target.name]:event.target.value})
    }

    const readValue=()=>{
        console.log(input)

        axios.post("http://localhost:8000/signin",input).then(
            (response)=> {
                console.log(response.data)

                if (response.data.Status == "Invalid password") {
                    alert("Incorrect Password")
                }else if(response.data.Status == "Invalid Emailid") {
                    alert("Invalid Email id")
                }
                else{
                      let token = response.data.Token
                      let userId = response.data.UserId

                      console.log(userId)
                      console.log(token)

                      sessionStorage.setItem("userId",userId)
                      sessionStorage.setItem("token",token)

                      navigate("/create")
                }
            }
        )
    }
  return (
    <div>
      <div className="container">
        <div className="row">
            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                <div className="row g-3">
                    <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                        <label htmlFor="" className="form-label">Email id:</label>
                        <input type="text" className="form-control" name='emailid' value={input.emailid} onChange={inputHandler}/>
                    </div>
                    <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                        <label htmlFor="" className="form-label">Password:</label>
                        <input type="text" className="form-control" name='password' value={input.password} onChange={inputHandler}/>
                    </div>
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <button onClick={readValue} className="btn btn-success">Login</button>
                    </div>
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <a href="signup" className="btn btn-primary">Register</a>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Signin
