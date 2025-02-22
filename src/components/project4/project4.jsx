import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Data } from './Data';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import './project4.css'

const Docbooker = () => {
  return (
    <section className="project container section" id='project4'>
      <h2 className='section_title'>TravelCard</h2>
      <p className='section_subtitle'>A travel guider</p>
      <Swiper className="project_container"
        spaceBetween={50}
        slidesPerView={1}
        navigation={true}
        pagination={{
            clickable: true,
          }}
        loop={true}
        breakpoints={{
            640: {
              slidesPerView: 1,
            },
            768: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 2,
            },
          }}
          modules={[Pagination]}
      >
        {Data.map((item) => (
          <SwiperSlide key={item.id} className="project-swiper">
            <div>
                <div className='image-card'>
                    <img src={item.image} alt='' className='projectImg'/>
                </div>
              <div className='project_card'>
                <h3 className='project_name'>{item.title}</h3>
                <p className='description'>{item.description}</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Docbooker;
