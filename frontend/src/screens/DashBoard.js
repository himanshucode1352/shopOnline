import React from 'react'
import { useAuth } from '../contextApi/auth'
const DashBoard = () => {
    const[auth,setAuth]= useAuth()
  return (
    <div>
      heloo dash{JSON.stringify(auth)}
    </div>
  )
}

export default DashBoard
