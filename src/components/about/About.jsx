import React from 'react'
import './about.css'
import CV from '../../assets/Moru Wang.pdf'
import Info from './info'

const About = () => {
  return (
    <section className="about section" id="about">
        <h2 className="section_title">About Me</h2>
        <span className="section_subtitle">My introduction</span>

        <div className="about_container container grid">
            <div className="about_data">
                <Info />
                <p className="about_description">
                    I am a graduated student of Trinity College Dublin with strong passion on Web development. I've worked on many group projects during my studing. With a solid foundation in front-end and back-end technologies, I continuously enhance my skills and keep updating with the latest industry trends. I am a quick learner and outgoing communicator, focused on creating impactful application that meet user's needs.
                </p>

                <div className="about_button_container">
                    <a download="" href={CV} className="button button--flex about_button">
                        Download CV
                        <i className="uil uil-file-download-alt button_icon"></i>
                    </a>
                </div>

            </div>
        </div>
    </section>
  )
}

export default About