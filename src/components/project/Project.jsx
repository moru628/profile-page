import React from 'react'
import {Data} from './Data'
import "./project.css"
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';

const Project = () => {
  return (
    <section className="project container section" id='project'>
        <h2 className="section_title">Restaurant Recommendation App</h2>
        <span className="section_subtitle">Summer Project</span>

        <Swiper className="project_container"
            loop={true}
            grabCursor = {true}
            spaceBetween={24}
            pagination={{
              clickable: true,
            }}
            breakpoints={{
              576: {
                slidesPerView: 3,
            
              },
              768: {
                slidesPerView: 3,
                spaceBetween: 48,
              },
            }}
            modules={[Pagination]}
        >
            {Data.map(({id, image, title, description}) => {
                return(
                    <SwiperSlide key={id} className='project_swiper'>
                        <div className='img_container'>
                            <img src={image} alt="" className='project_img' />
                        </div>
                        
                        <div className='project_card'>
                            <h3 className="project_name">{title}</h3>
                            <p className="project_description">{description}</p>
                        </div>
                    </SwiperSlide>
                )
            })}
        </Swiper>
    </section>
  )
}

export default Project