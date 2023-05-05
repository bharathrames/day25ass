import React from 'react'
import Base from '../Base/Base'
import { useHistory } from "react-router-dom"

const Nopage = () => {
  const history = useHistory()
  return (
    <Base>

      <div class="containers">
        <div class="text">404 Error - Page Not Found</div>
        <div class="animation"></div>
        <p>Sorry, the page you're looking for cannot be found.</p>
        <p>Please check the URL and try again.</p>
        <button
          onClick={() => history.push("/")}
        >Go Back</button>
      </div>

    </Base>
  )
}

export default Nopage