import React from 'react'
import { useHistory } from "react-router-dom"
function Base({ children }) {
  const history = useHistory()
  return (
    <div className='base'>
      <div className='leftcontent'>
        <h3><a href='#'>😀SB ADMIN </a></h3>
        <button
          onClick={() => history.push("/")}
        >Dashboard</button>
        <button
          onClick={() => history.push("/nopage")}
        >404</button>
        <button
          onClick={() => history.push("/login")}
        >Login</button>
        <button
          onClick={() => history.push("/forget")}
        >Forgot-Password</button>
        <button
          onClick={() => history.push("/buttons")}
        >button</button>
        <button
          onClick={() => history.push("/border")}
        >Border</button>
        <button
          onClick={() => history.push("/color")}
        >Color</button>
      </div>
      <div className='rigthcontent'>
        {children}
      </div>
    </div>
  )
}

export default Base