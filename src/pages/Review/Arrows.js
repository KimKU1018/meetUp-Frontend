import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons';

const Arrows = ({ prevSlide, nextSlide, currentSlide }) => {
  return (
    <div className="arrows">
      <button className="paginationBtn" onClick={prevSlide}>
        <FontAwesomeIcon icon={faAngleLeft} />
      </button>
      <span className="pagenation">{currentSlide + 1} / 5</span>
      <button className="paginationBtn" onClick={nextSlide}>
        <FontAwesomeIcon icon={faAngleRight} />
      </button>
    </div>
  );
};

export default Arrows;
