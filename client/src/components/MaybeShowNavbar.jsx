import React,{useEffect,useState} from 'react'
import { useLocation } from 'react-router-dom'
const MaybeShowNavbar = ({children}) => {
  
  const Location = useLocation()
  const [showNavbar,setShowNavbar] = useState(false)
  useEffect(()=>{
    console.log('this is location: ',location)
    console.log(location.pathname.startsWith('/verify/'))
    if (location.pathname.startsWith('/verify/')) {
        setShowNavbar(false)
    } else{
        setShowNavbar(true)
    }
},[location])
    return (
    <div>{showNavbar && children}</div>
    // childeren is the NAvbar
  )
}

export default MaybeShowNavbar
