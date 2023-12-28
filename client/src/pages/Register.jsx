import { useState } from "react"
import {toast} from 'react-hot-toast'
import axios from 'axios'
import { useNavigate } from "react-router-dom"
// create state
export default function Register() {
  const navigate = useNavigate()
    const [data,setData]= useState({
        name:'',
        email:'',
        password:'',
    })
    const registerUser = async (e) => {
        // not to automatically load
        e.preventDefault()
        const {name,email,password} = data
        try {
          const {data} = await axios.post('/register',{
            name,email,password
          })
          if(data.error){
            toast.error(data.error)
          }
          else{
            // empty object reset input field
            setData({})
            toast.success("Registrationssss Successful")
            navigate('/login')
          }
        } catch (error) {
          console.log(error) 
        }
    }
  return ( 

    <form onSubmit={registerUser} >
        <input type="text" placeholder='Name' value={data.name} onChange={(e) => setData({...data,name:e.target.value})}/>
        <input type="email" placeholder='Email' value={data.email} onChange={(e) => setData({...data,email:e.target.value})}/>
        <input type="password" placeholder='Password' value={data.password} onChange={(e) => setData({...data,password:e.target.value})}/>
        <button type='submit'>Submit</button>     
    </form>
    
  )
}
