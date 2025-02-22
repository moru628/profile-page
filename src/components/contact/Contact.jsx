import React from 'react'
import './contact.css'
import { useRef } from 'react';
import emailjs from '@emailjs/browser';
const Contact = () => {
    const form = useRef();

    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs
        .sendForm('service_topjzxh', 'template_ri7dqno', form.current, {
          publicKey: 'RuVdQInmXLG_IMjcj',
        })
        
        e.target.reset();
    };
  return (
    <section className="contact section" id='contact'>
        <h2 className="section_title">Get in touch</h2>
        <span className="section_subtitle">Contact me</span>

        <div className="contact_container container grid">
            <div className="contact_content">
                <h3 className="contact_title">Talk to me</h3>

                <div className="contact_info">
                    <div className="contact_card">
                        <i className="bx bx-mail-send contact_card-icon"></i>

                        <h3 className="contact_card-title">Email</h3>
                        <span className="contact_card-data">wangmo@tcd.ie</span>

                        <a href="" className="contact_button">Write me{" "} <i className="bx bx-right-arrow-alt contact_button-icon"></i></a>
                    </div>

                    <div className="contact_card">
                        <i className="bx bxl-whatsapp contact_card-icon"></i>

                        <h3 className="contact_card-title">Whatsapp</h3>
                        <span className="contact_card-data">+353 0892082288</span>

                        <a href="" className="contact_button">Write me{" "}<i className="bx bx-right-arrow-alt contact_button-icon"></i></a>
                    </div>

                    <div className="contact_card">
                        <i className="bx bxl-messenger contact_card-icon"></i>

                        <h3 className="contact_card-title">Wechat</h3>
                        <span className="contact_card-data">17513365969</span>

                        <a href="" className="contact_button">Write me <i className="bx bx-right-arrow-alt contact_button-icon"></i></a>
                    </div>
                </div>
            </div>

            <div className="contact_content">
                <h3 className="contact_title">Email me</h3>

                <form ref={form} onSubmit={sendEmail}className="contact_form">
                    <div className="contact_form-div">
                        <label className="contact_form-tag">Name</label>
                        <input type="text" name='name' className='contact_form-input'
                        placeholder='Write your name'/>
                    </div>

                    <div className="contact_form-div">
                        <label className="contact_form-tag">Mail</label>
                        <input type="email" name='email' className='contact_form-input'
                        placeholder='Insert your Email'/>
                    </div>

                    <div className="contact_form-div contact_form-area">
                        <label className="contact_form-tag">Message</label>
                        <textarea name="message" cols="30" rows="10" className='contact_form-input' placeholder='write your message'></textarea>
                    </div>
                    <button href="#contact" className="button button--flex contact_button-send">
                    Send Message
                    <i class="uil uil-message button_icon"></i>
                    </button>
                </form>
            </div>
        </div>
    </section>
  )
}

export default Contact