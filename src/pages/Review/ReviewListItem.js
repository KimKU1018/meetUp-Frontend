import React from 'react';
import ReviewImg from './ReviewImg';
import TipBox from './TipBox';
import './ReviewListItem.scss';

const ReviewListItem = ({ title, date, userId, userInput, imageSrc }) => {
  return (
    <li className="reviewlistitem">
      <div className="reviewHead">
        <h3 className="reviewMenu">{title}</h3>
        <span>{date}</span>
      </div>
      <div className="starBox">
        <span className="star">★★★★★</span>
        <span>|</span>
        <span>{userId}</span>
      </div>

      {imageSrc ? (
        <div className="reviewBoxWrap">
          <ReviewImg imageSrc={imageSrc} title={title} />
          <div>
            {userInput}
            <TipBox />
          </div>
        </div>
      ) : (
        <div className="reviewBoxWrap">
          <div>{userInput}</div>
        </div>
      )}
    </li>
  );
};

export default ReviewListItem;
