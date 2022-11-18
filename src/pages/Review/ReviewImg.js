import React from 'react';
import '../../components/Review/ReviewImg.scss';

const ReviewImg = ({ imageSrc, title }) => {
  return (
    <div className="reviewimg">
      <img src={imageSrc} alt={title} />
    </div>
  );
};

export default ReviewImg;
