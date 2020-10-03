import React from 'react'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/swiper.scss';

import About from "../About/About"
import Profile from "../Profile/Profile"

const Swipe = () => {
    return (
        <Swiper spaceBetween={50} slidesPerView={1} style={{ height: 'auto' }}>
            <SwiperSlide>
                <About />
            </SwiperSlide>
            <SwiperSlide>
                <Profile />
            </SwiperSlide>
        </Swiper>
    )
}

export default Swipe
