import { Swiper, SwiperSlide } from "swiper/react";
import classes from "./SwiperComponent.module.scss";
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from "swiper";
import "swiper/scss";
import "swiper/scss/navigation";
import "swiper/scss/pagination";
import "swiper/scss/scrollbar";

const SwiperComponent = (props) => {
  // slides
  const slides = props.images.map((img, i) => (
    <SwiperSlide key={i} className={classes.slides}>
      <div className={classes["img-container"]}>
        <img src={img} alt={props.name} />
      </div>
    </SwiperSlide>
  ));

  return (
    <>
      <Swiper
        id="picSwiper"
        className={classes["swiper"]}
        modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
        spaceBetween={0}
        slidesPerView={1}
        autoplay={{
          delay: 4500,
          disableOnInteraction: false,
        }}
        pagination={{ clickable: true, dynamicBullets: true }}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
      >
        {slides}
      </Swiper>
    </>
  );
};

export default SwiperComponent;
