import React, { useState } from 'react'

const CreatePost = () => {
    const [input,setInput]=new useState(
        {"userId":sessionStorage.getItem("userId"),"Message":""}
      )
      const inputHandler=(event)=>{
        setInput({...input,[event.target.name]:event.target.value})
      }
  return (
    <div>
      
    </div>
  )
}

export default CreatePost
