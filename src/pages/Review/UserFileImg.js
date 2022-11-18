import React from 'react';
import './UserFileImg.scss';

const UserFileImg = ({ onRemove, imageSrc }) => {
  return (
    <div className="userfileimg">
      <button className="delete" onClick={onRemove}>
        삭제
      </button>
      <img src={imageSrc} alt="preview-img" />
    </div>
  );
};

export default UserFileImg;
