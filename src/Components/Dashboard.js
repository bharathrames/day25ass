import React from 'react'
import Base from '../Base/Base'

const Dashboard = () => {
  return (
    <Base>
      <section class="earning-overview">
        <h1>Earning Overview</h1>
        <div class="stats">
          <div class="stat">
            <h2>$6,500</h2>
            <p>Total Earnings</p>
          </div>
          <div class="stat">
            <h2>$2,000</h2>
            <p>Last Month Earnings</p>
          </div>
          <div class="stat">
            <h2>$1,500</h2>
            <p>This Month Earnings</p>
          </div>
        </div>
      </section>
      <div class="project-container">
        <div class="project-image">
          <img src="https://thumbs.dreamstime.com/b/cartoon-man-performs-analytic-report-dashboard-bearded-character-performing-data-research-social-statistics-graphs-177404088.jpg" />
        </div>
        <div class="project-details">
          <h2>Project Name :Dashboard</h2>
          <p>A project dashboard is a collection of key data, qualitative
            information, and visuals that summarize a portfolio of projects.</p>
          <a href="#" class="project-link">View Project</a>
        </div>
      </div>
    </Base>
  )
}

export default Dashboard