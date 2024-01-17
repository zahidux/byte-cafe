import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import { useEffect, useState } from "react";
import { Rating } from "@smastrom/react-rating";

import "@smastrom/react-rating/style.css";
import SectionTitle from "../../Components/SectionTitle/SectionTitle";

const Testimonials = () => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/review")
      .then((res) => res.json())
      .then((data) => setReviews(data));
  }, []);
  return (
    <div className="container my-20">
      <div className="flex justify-center mb-8">
        <SectionTitle Heading={"Customer Feedback"}></SectionTitle>
      </div>
      <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
        {reviews.map((review) => (
          <SwiperSlide key={review._id}>
            <div className="flex flex-col items-center m-12 md:m-24 md:mx-24 my-16">
              <Rating
                style={{ maxWidth: 180 }}
                value={review.rating}
                // onChange={setRating}
                readOnly
              />
              <p className="my-4 text-sm md:text-lg">{review.details}</p>
              <h3 className="text-lg md:text-2xl text-orange-400">
                {review.name}
              </h3>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Testimonials;
