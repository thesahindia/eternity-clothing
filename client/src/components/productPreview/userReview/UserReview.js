import React from "react";
import Rating from "../../productCard/Rating";
import "./userReview.scss";
export default function UserReview({ reviews, rating }) {
  const renderReviews = reviews.map(
    ({ name, img, rating, time, date, review }) => {
      return (
        <div key={name} className="review-container">
          <div className="user-info">
            <div className="profile-img">
              <img src={img} alt=" " />
            </div>
            <div className="right-section">
              <div className="user-name">{name}</div>
              <div className="date-time">
                <div className="time">{time}</div>
                <div className="date">{date}</div>
              </div>
            </div>
          </div>
          <div className="rating">
            <Rating stars={rating} />
          </div>
          <div className="review">{review}</div>
        </div>
      );
    }
  );
  return (
    <div className="userReview">
      <div className="review-header">
        <div className="heading">Review and rating</div>
        <div className="sub-heading">
          <div className="rating-num">{rating}/5</div>
          <Rating stars={rating} width="20px" height="20px" />
          <div className="review-count">{reviews.length} reviews</div>
        </div>
      </div>
      {renderReviews}
    </div>
  );
}
