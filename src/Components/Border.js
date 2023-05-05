import React from 'react'
import Base from '../Base/Base'

const Border = () => {
  return (
    <Base>
      <div className='borders'>
        <h3>Border Utilities</h3>
        <p>Bootstrap's default utility classes can be found on the official <a href='https://getbootstrap.com/docs/5.3/getting-started/introduction/ ' >Bootstarp Documentation </a> page. The custom utilities below were created to extend this
          theme past the default utility classes built into Bootstrap's framework.</p>
        <div class="border-container">
          <div class="solid-border"></div>
          <div class="dotted-border"></div>
          <div class="dashed-border"></div>
          <div class="double-border"></div>
          <div class="groove-border"></div>
          <div class="ridge-border"></div>
          <div class="inset-border"></div>
          <div class="outset-border"></div>

        </div>

      </div>
    </Base>
  )
}

export default Border