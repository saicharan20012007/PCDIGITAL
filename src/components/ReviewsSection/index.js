import {v4} from "uuid"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FcGoogle } from "react-icons/fc";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

// import required modules
// import { FreeMode, Pagination } from "swiper";

import {
  
  GoogleReviewsCont,
  GoogleReviewsInsideCont,
  GoogleReviewsHead,
  SwiperCont,
  EachSwiperSlide,
  ImageNameLogoCont,
  GoogleReviewerName,
  NameDateCont,
  GoogleReviewDate,
  UserReview,
} from "./BottomSectionStyledComponents";


const googleReviews = [
  {
   id:v4(),
    image:
      "https://lh3.googleusercontent.com/a/ALm5wu3OvhaElYvSjuWaEbr-oghCtawAKPOT3yXCbqWe=s120-c-c-rp-w64-h64-mo-br100",
    name: "Preeti Tiwana",
    date: "2022-09-15",
    review:
      "Very happy With the service . Great quality work and very timely delivered.",
  },
  {
    id:v4(),
    image:
      "https://lh3.googleusercontent.com/a-/ACNPEu-VF_TyfB1flg6SNvechW1947-Pkn7IaE_eF_7iMw=s120-c-c-rp-w64-h64-mo-ba2-br100",
    name: "Pratyush Kumar",
    date: "2022-08-14",
    review: "Excellent work and great customer service 👍",
  },
  {
    id:v4(),
    image:
      "https://lh3.googleusercontent.com/a-/ACNPEu83PMMaoJ5V_ZAqoPeaotr5sRaaGfM99qaaV2x-=s120-c-c-rp-w64-h64-mo-br100",
    name: "Eco Clean...",
    date: "2022-08-09",
    review: "Excellent service",
  },
  {
    id:v4(),
    image:
      "https://lh3.googleusercontent.com/a-/ACNPEu_yqrK4Y2HLBCiIuy9PMShknmLVs-oFurHK9ONR=s120-c-c-rp-w64-h64-mo-ba2-br100",
    name: "Pramita Bhat...",
    date: "2022-06-14",
    review: "",
  },
  {
    id:v4(),
    image:
      "https://lh3.googleusercontent.com/a/ALm5wu1cG3E_vRDHJCk0062YSjv9-F-AxQUFSGBMzoHr=s120-c-c-rp-w64-h64-mo-br100",
    name: "Deepak garg",
    date: "2022-04-06",
    review: "",
  },
  {
    id:v4(),
    image:
      "https://lh3.googleusercontent.com/a-/ACNPEu-vYS8__EyYAoxxUMJy5Oo6U-HdE4oGUNgxLHLfew=s120-c-c-rp-w64-h64-mo-br100",
    name: "Archana chandel",
    date: "2022-11-07",
    review:
      "Thank you Prabisha consulting for such an amazing work. Your timely and prompt response has helped me a lot. Thank you for getting the editing work done within the limited time frame.I would definitely recommend Prabisha Consulting.",
  },
  {
    id:v4(),
    image:
      "https://lh3.googleusercontent.com/a/ALm5wu3zlRWi0TRdATTdSLHFixOZpE4DzBQFYYkzRSv5=s120-c-c-rp-w64-h64-mo-br100",
    name: "sabita bhatia",
    date: "2021-11-09",
    review:
      "For digital posts about the activities of our NGO we got great help from Prabisha Consulting. The post were well created as per our briefs and always as per schedule agreed upon . The reach and page visits increased largely once we got connected with Prabisha Consulting. We are glad that we connected with Pratyush and team who are extremely diligent and patient.",
  },
  {
    id:v4(),
    image:
      "https://lh3.googleusercontent.com/a-/ACNPEu_prGd3l9k9gMnIxRGAR9wHD35CcRLRR2nAip9nxQ=s120-c-c-rp-w64-h64-mo-br100",
    name: "Imran khan",
    date: "2021-11-01",
    review:
      "Fully satisfied by the final logo, the team was very co-operative. Thank you 🙂",
  },
  {
    id:v4(),
    image:
      "https://lh3.googleusercontent.com/a/ALm5wu0KEzcGgA9qoqEh5d4IZsHZDmeAghl8C5TvTrDY=s120-c-c-rp-w64-h64-mo-br100",
    name: "harish chainani",
    date: "2021-10-02",
    review: "",
  },
  {
    id:v4(),
    image:
      "https://lh3.googleusercontent.com/a/ALm5wu2kDsJeN4cP1YD5nIfZkP_9BaODAEKd_ppObGKN=s120-c-c-rp-w64-h64-mo-br100",
    name: "Shwetha Raju",
    date: "2021-09-30",
    review:
      "Working with Bidisha for our logo was great. She is unbelievably patient and understood exactly what we wanted. She gave us so many beautiful design options. Thank you Bidisha for patiently listening to our inputs and accomodating each one of them. We absolutely love the logo, card and the sticker design!",
  },
];

const ReviewsSection = () => (
  <div>
   
    <GoogleReviewsCont>
      <GoogleReviewsHead>Google Reviews</GoogleReviewsHead>
      <GoogleReviewsInsideCont>
        
        <SwiperCont>
          <Swiper
            breakpoints={{
              0: {
                slidesPerView: 1,
              },
              768: {
                slidesPerView: 2,
              },
              992: {
                slidesPerView: 3,
              },
              1199: {
                slidesPerView: 3,
              },
            }}
            slidesPerView={3}
            spaceBetween={30}
            freeMode={true}
            pagination={{
              clickable: true,
            }}
            className="mySwiper"
          >
            {googleReviews.map((item) => (
              <SwiperSlide>
                <EachSwiperSlide>
                  <ImageNameLogoCont>
                    <img src={item.image} key={item.id} alt="img" />
                    <NameDateCont>
                      <GoogleReviewerName>{item.name}</GoogleReviewerName>
                      <GoogleReviewDate>{item.date}</GoogleReviewDate>
                    </NameDateCont>
                    <FcGoogle style={{ fontSize: "2rem" }} />
                  </ImageNameLogoCont>
                  <UserReview>{item.review}</UserReview>
                </EachSwiperSlide>
              </SwiperSlide>
            ))}
          </Swiper>
        </SwiperCont>
      </GoogleReviewsInsideCont>
    </GoogleReviewsCont>
   
  </div>
);
export default ReviewsSection;
