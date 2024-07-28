import axios from 'axios'
import React, { useState } from 'react'
import Navbar from './Navbar'

const Signup = () => {

    const [input,setInput] = new useState(
        {
            "name":"",
            "phoneno":"",
            "emailid":"",
            "password":"",
            "cpassword":""
        }
    )
    
    const inputHandler = (event) => {
        setInput({...input,[event.target.name]:event.target.value})
    }

    const readValue = () => {
        if(input.password == input.cpassword) {
            
            let newInput = {"name":input.name, "phoneno":input.phoneno,"emailid":input.emailid, "password":input.password}
            axios.post("http://localhost:8000/signUp",newInput).then(
                (response) => {
                    console.log(response.data)
                    if(response.data.Status == "Success") {
                        alert("Registered Successfully")
                        setInput({"name":"","phoneno":"","emailid":"","password":"","cpassword":""})
                    }else{
                        alert("This Email id is already registered")
                        setInput({"name":"","phoneno":"","emailid":"","password":"","cpassword":""})
                    }
                }
            ).catch(
                (error) => {
                    console.log(error)
                }
            )
        }else {
            alert("Opps! Password doesn't match")
        }
    }
  return (
    
    <div>
        
      <div className="container">
        <div className="row">
            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                <div className="row g-3">
                    <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                        <label htmlFor="" className="form-label">Name:</label>
                        <input type="text" className="form-control" name='name' value={input.name} onChange={inputHandler} />
                    </div>
                    <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                        <label htmlFor="" className="form-label">Phone no:</label>
                        <input type="text" className="form-control" name='phoneno' value={input.phoneno} onChange={inputHandler}/>
                    </div>
                    <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                        <label htmlFor="" className="form-label">Email Id:</label>
                        <input type="text" className="form-control" name='emailid' value={input.emailid} onChange={inputHandler} />
                    </div>
                    <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                        <label htmlFor="" className="form-label">password:</label>
                        <input type="password" className="form-control" name='password' value={input.password} onChange={inputHandler}/>
                    </div>
                    <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                        <label htmlFor="" className="form-label">Confirm Password:</label>
                        <input type="password" className="form-control" name='cpassword' value={input.cpassword} onChange={inputHandler} />
                    </div><br />
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <button onClick={readValue} className="btn btn-success">Register</button>
                    </div>
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <a href="/" className="btn btn-primary">Back to Signin</a>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Signup
