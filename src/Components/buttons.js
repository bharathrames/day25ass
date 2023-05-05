import React from 'react'
import Base from '../Base/Base'

const Buttons = () => {
  return (
    <Base>
      <div className='all-buttons'>
        <div className='button-right'>
          <h2>BUTTONS</h2>
          <hr />
          <p>These are the buttons with colors</p>
          <button class="primary-button">Primary Button</button>
          <button class="secondary-button">Secondary Button</button>
          <button class="success-button">Success Button</button>
          <button class="warning-button">Warning Button</button>
          <button class="error-button">Error Button</button>
          <button class="disabled-button">Disabled Button</button>

          <h2>Outline buttons</h2>
          <hr />
          <p>In need of a button, but not the hefty background colors they bring? Replace the default modifier classes with the .btn-outline-*
            ones to remove all background images and colors on any button.</p>
          <button type="button" class="btn btn-outline-primary">Primary</button>
          <button type="button" class="btn btn-outline-secondary">Secondary</button>
          <button type="button" class="btn btn-outline-success">Success</button>
          <button type="button" class="btn btn-outline-danger">Danger</button>
          <button type="button" class="btn btn-outline-warning">Warning</button>
          <button type="button" class="btn btn-outline-info">Info</button>
          <button type="button" class="btn btn-outline-dark">Dark</button>
        </div>

        <div className='button-left'>
          <h2>BLOCK LEVEL BUTTONS</h2>
          <hr />
          <p>Create block level buttons-those that span the full width of a parent—by adding .btn-block.</p>
          <button type="button" class="btn btn-primary btn-lg btn-block">Block level button</button>
          <button type="button" class="btn btn-secondary btn-lg btn-block">Block level button</button>

          <h2>Small Size Buttons</h2>
          <hr />
          <p>Fancy  smaller buttons? Add .btn-sm for additional sizes.</p>
          <button type="button" class="btn btn-primary btn-sm">Small button</button>
          <button type="button" class="btn btn-secondary btn-sm">Small button</button>
        </div>
      </div>
    </Base>
  )
}

export default Buttons