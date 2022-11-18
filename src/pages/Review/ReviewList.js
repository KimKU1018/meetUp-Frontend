import React from 'react';
import '../../pages/Review/Review.scss';
import ReviewListItem from './ReviewListItem';
import '../../components/Review/ReviewList.scss';

const ReviewList = ({ review }) => {
  return (
    <ul className="reviewlist">
      {review.map(({ id, title, date, userId, userInput, imageSrc }) => (
        <ReviewListItem
          key={id}
          title={title}
          date={date}
          userId={userId}
          imageSrc={imageSrc}
          userInput={userInput}
        />
      ))}
    </ul>
  );
};

export default ReviewList;
