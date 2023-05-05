import React from 'react'
import Base from '../Base/Base'

function Color() {
  return (
    <Base>
      <div className='allcolor'>
        <div class="color-utils">
          <h2>Text Color Utilities</h2>
          <p class="color-red">Red Text</p>
          <p class="color-blue">Blue Text</p>
          <p class="color-green">Green Text</p>

          <div class="bg-gradient-utils">
            <h2>Background Gradient Utilities</h2>
            <div class="bg-gradient-1"></div>
            <div class="bg-gradient-2"></div>
            <div class="bg-gradient-3"></div>
            <div class="bg-gradient-4"></div>
            <div class="bg-gradient-5"></div>
            <div class="bg-gradient-6"></div>
          </div>
        </div>
      </div>

    </Base>
  )
}

export default Color