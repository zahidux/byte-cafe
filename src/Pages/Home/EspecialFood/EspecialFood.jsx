import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper/modules";

import slide1 from "../../../assets/especial/slide1.jpg";
import slide2 from "../../../assets/especial/slide2.jpg";
import slide3 from "../../../assets/especial/slide3.jpg";
import slide4 from "../../../assets/especial/slide4.jpg";
import slide5 from "../../../assets/especial/slide5.jpg";
import SectionTitle from "../../Components/SectionTitle/SectionTitle";

const EspecialFood = () => {
  return (
    <section className="container my-24 ">
      <div className="flex justify-center text-center my-10">
        <SectionTitle subHeading={"Choose Food"} Heading={"Favourite Food"} />
      </div>
      <Swiper
        data-aos="fade-left"
        slidesPerView={4}
        spaceBetween={30}
        centeredSlides={true}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper text-lg md:text-4xl"
      >
        <SwiperSlide>
          <img className="rounded-lg " src={slide1} alt="" />
          <h3 className="invisible md:visible uppercase  font-semibold text-center -mt-24 text-white">
            Salad
          </h3>
        </SwiperSlide>
        <SwiperSlide>
          <img className="rounded-lg" src={slide2} alt="" />
          <h3 className="invisible md:visible uppercase  font-semibold text-center -mt-24 text-white">
            Pizzas
          </h3>
        </SwiperSlide>
        <SwiperSlide>
          <img className="rounded-lg" src={slide3} alt="" />
          <h3 className="invisible md:visible uppercase font-semibold text-center -mt-24 text-white">
            Soups
          </h3>
        </SwiperSlide>
        <SwiperSlide>
          <img className="rounded-lg" src={slide4} alt="" />
          <h3 className="invisible md:visible uppercase  font-semibold text-center -mt-24 text-white">
            Desserts
          </h3>
        </SwiperSlide>
        <SwiperSlide>
          <img className="rounded-lg" src={slide5} alt="" />
          <h3 className="invisible md:visible uppercase  font-semibold text-center -mt-24 text-white">
            Salad
          </h3>
        </SwiperSlide>
      </Swiper>
    </section>
  );
};

export default EspecialFood;
