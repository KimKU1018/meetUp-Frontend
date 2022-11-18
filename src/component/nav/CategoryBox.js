import React from "react";
import { useNavigate } from "react-router-dom";
import CATEGORY from "./CATEGORY";
import "./CategoryBox.scss";

function CategoryBox({ showCategory }) {
  const navigate = useNavigate();
  const movePage = url => {
    navigate(url);
  };
  return (
    <div
      className={`category-box-wrapper ${
        showCategory ? "show" : "hide"
      }-category-box`}
    >
      <ul className="category-box">
        {CATEGORY.map(category => {
          const { id, title, url } = category;
          return (
            <li className="bold-text" key={id} onClick={() => movePage(url)}>
              {title}
            </li>
          );
        })}
      </ul>
    </div>
  );
}
export default CategoryBox;
