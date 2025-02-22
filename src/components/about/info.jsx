import React from 'react'

const info = () => {
  return (
    <div className="about_info grid">
        <div className="about_box">
            <i class='bx bx-award about_icon'></i>
            <h3 className="about_title">Education</h3>
            <span className="about_subtitle">Master degree</span>
        </div>

        <div className="about_box">
            <i class='bx bx-briefcase-alt about_icon'></i>
            <h3 className="about_title">Project</h3>
            <span className="about_subtitle">TodoApp</span>
        </div>

        <div className="about_box">
            <i class='bx bx-book-open about_icon'></i>
            <h3 className="about_title">Major</h3>
            <span className="about_subtitle">Interactive digital media</span>
        </div>
    </div>
  )
}

export default info