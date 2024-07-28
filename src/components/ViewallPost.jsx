import axios from 'axios'
import React, { useState } from 'react'

const ViewallPost = () => {
    const [data, setData] = useState([])
    const fetchData=()=>{
        axios.post("http://localhost:3030/viewall",{},{
            headers:{"token":sessionStorage.getItem("token"),"Content-Type":"application/json"},
            params: {
              populate: 'userId'
            }
        }).then(
            (response)=>{
                console.log(response.data)
                setData(response.data)
            }
        ).catch(
            (error)=>{
                console.log(error)
            }
        )
    }
    useEffect(()=>{fetchData()},{})
  return (
    <div>
      
    </div>
  )
}

export default ViewallPost
