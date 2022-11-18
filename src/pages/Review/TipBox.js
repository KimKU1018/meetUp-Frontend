import React from 'react';
import '../../components/Review/TipBox.scss';

const TipBox = () => {
  return (
    <div className="tipBox">
      <span className="tipHead">Tip</span>
      <p className="tipDesc">
        사진을 첨부하여 사용자들에게 정보를 전달해주세요!
      </p>
    </div>
  );
};

export default TipBox;
