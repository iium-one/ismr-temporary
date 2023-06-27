'use strict'

import { addZero } from './modules/add-zero.js';
import { skipNav, scrollZero } from './common.js';

// [plugin-Swiper] main visual
const mainVisualTimebar = (state) => {
  if (state == 'init') {
    $(".main_visual-time .bar span").stop().css({"width":"0"});
  } else if (state == 'ing') {
    $(".main_visual-time .bar span").stop().animate({width: "100%"}, 4000);
  } else {
    $(".main_visual-time .bar span").stop().css({"width":"0"});
  }
}

const mainVisualPageNum = (cur, total) => {
  $(".main_visual-pagination .current").text(cur);
  if(total) {
    $(".main_visual-pagination .total").text(total);
  }
}

const mainVisualSwiper = new Swiper('.main_visual-slider', {
  draggable: true,
  loop: true,
  autoplay: {
    delay: 4000,
    disableOnInteraction: false
  },
  navigation: {
    nextEl: '.main_visual-next',
    prevEl: '.main_visual-prev'
  },
  on: {
    init: function (swiper) {
      let activeIndex = addZero(parseInt(swiper.realIndex) + 1);
      let totalSlides = addZero(swiper.slides.length - 2);

      mainVisualPageNum(activeIndex, totalSlides)
      mainVisualTimebar('ing')
    },
    slideChangeTransitionEnd: function (swiper) {
      let activeIndex = addZero(parseInt(swiper.realIndex) + 1);

      mainVisualPageNum(activeIndex)

      mainVisualTimebar('init')
      mainVisualTimebar('ing')
    },
  },
});

const mainVisualPlayBtn = document.querySelector(".main_visual-play");

if(mainVisualPlayBtn) {
  mainVisualPlayBtn.addEventListener("click", function(){
    mainVisualSwiper.autoplay.start();
    mainVisualTimebar('ing')
  })
}

// [plugin-Swiper] main popup
const mainPopupSwiper = new Swiper('.main_popup-slider', {
  draggable: true,
  loop: false,
  slidesPerView: 2,
  spaceBetween: 13,
  autoplay: {
    delay: 4000,
    disableOnInteraction: false
  },
});

$(document).ready(function(){
  skipNav();
  scrollZero();
}) //End Document