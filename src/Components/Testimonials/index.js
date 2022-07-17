import * as S from "./style";
import Slider from "react-slick";
import TestimonialsCard from "./TestimonialsCard";

function SampleNextArrow(props) {
  const { className, onClick } = props;
  return (
    <div style={{ display: "none" }} className={className} onClick={onClick}>
      <img src="./images/arrowNext.png" alt="" />
    </div>
  );
}

function SamplePrevArrow(props) {
  const { className, onClick } = props;
  return (
    <div style={{ display: "none" }} className={className} onClick={onClick}>
      <img src="./images/arrowPrev.png" alt="" />
    </div>
  );
}

function Testimonials() {
  const settings = {
    dots: true,
    infinite: false,
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 550,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <S.TestimonialsContainer id="testimonials">
      <h6>Customer Reviews</h6>
      <p>Some feedback from happy customers About our products</p>

      <Slider {...settings}>
        <div>
          <TestimonialsCard
            image="./images/user.png"
            name="Philip Hudson"
            paragraph="Just an excellent device overall. It does what it needs to do without adding all kinds of files it needs to do without adding all kinds of files it needs to do without adding all kinds of files."
            date="Mar 25, 2018"
            rating={2}
          />
        </div>
        <div>
          <TestimonialsCard
            image="./images/user.png"
            name="Kyle Mendez"
            paragraph="Just an excellent device overall. It does what it needs to do without adding all kinds of files it needs to do without adding all kinds of files it needs to do without adding all kinds of files."
            date="Mar 25, 2018"
            rating={2}
          />
        </div>
        <div>
          <TestimonialsCard
            image="./images/user.png"
            name="Jerry Stanley"
            paragraph="Just an excellent device overall. It does what it needs to do without adding all kinds of files it needs to do without adding all kinds of files it needs to do without adding all kinds of files."
            date="Mar 25, 2018"
            rating={2}
          />
        </div>
        <div>
          <TestimonialsCard
            image="./images/user.png"
            name="Kyle Mendez"
            paragraph="Just an excellent device overall. It does what it needs to do without adding all kinds of files it needs to do without adding all kinds of files it needs to do without adding all kinds of files."
            date="Mar 25, 2018"
            rating={2}
          />
        </div>
      </Slider>
    </S.TestimonialsContainer>
  );
}

export default Testimonials;
