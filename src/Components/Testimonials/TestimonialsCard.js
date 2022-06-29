import Rating from "./rating";
import * as S from "./style";

function TestimonialsCard({ rating, name, image, paragraph, date }) {
  return (
    <S.CardContainer>
      <div className="card-body">
        <div className="img-container">
          <img src={image} alt="user img" />
          <div>
            <h6>{name}</h6>
            <Rating rating={rating} />
          </div>
        </div>
        <p>{paragraph}</p>
        <h5>{date}</h5>
      </div>
    </S.CardContainer>
  );
}

export default TestimonialsCard;
