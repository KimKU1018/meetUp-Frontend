import React from 'react';
import './Review.scss';
import ReviewBox from './ReviewBox';

function Review() {
  return (
    <>
      <div className="review">
        <h1 className="reviewHeader">후기</h1>
        <hr />
        <ReviewBox />
      </div>
    </>
  );
}

export default Review;
