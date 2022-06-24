import Swiper from 'swiper/bundle';
import 'swiper/css/bundle';
const SwiperArea = document.querySelector(".infinite-slider");

export const Slider = () => {
  if (SwiperArea == null) {
    return;
  }
  new Swiper('.infinite-slider', {
    loop: true,
    loopAdditionalSlides: 1,
    slidesPerView: "auto",
    speed: 100000,
    spaceBetween: 100,
    allowTouchMove: false,
    mousewheel: false,
    autoplay: {
      delay: 0,
      disableOnInteraction: false,
    } 
  });
}
