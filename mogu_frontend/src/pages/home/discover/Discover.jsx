import React, { useEffect } from 'react';
import './discover.css'
import Swiper from 'swiper'
import 'swiper/css/swiper.min.css'


function Discover() {
    useEffect(() => {
        new Swiper('.swiper-container', {
            direction: 'vertical',//竖向轮播
            loop: true,//无缝轮播
            pagination: {//小圆点分页
                el: '.swiper-pagination',
            },
            // scrollbar: {//下划线分页
            //     el: '.swiper-scrollbar',
            // }
        })
        return () => {
            cleanup
        }
    }, [])
    return (
        <>
            <div class="swiper-container">
                <div class="swiper-wrapper">

                    <div class="swiper-slide">Slide 1</div>
                    <div class="swiper-slide">Slide 2</div>
                    <div class="swiper-slide">Slide 3</div>
                </div>

                <div class="swiper-pagination"></div>

                <div class="swiper-scrollbar"></div>
            </div>

        </>
    )
}

export default Discover;