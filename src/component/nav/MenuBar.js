import React, { useState } from "react";
import Logo from "../Logo/Logo";
import CategoryBox from "./CategoryBox";
import MENUS from "./MENUS";
import "./MenuBar.scss";

function MenuBar({ setToggleMenu }) {
  const [unmount, setUnmount] = useState(false);
  const [showCategory, setShowCategory] = useState(false);
  const closeMenu = () => {
    setUnmount(true);
    setTimeout(() => {
      setToggleMenu(false);
    }, 300);
  };
  const categoryHandler = () => {
    showCategory ? setShowCategory(false) : setShowCategory(true);
  };
  return (
    <div
      className={`menu-bar-bg${unmount ? " menu-bar-bg-unmount" : ""}`}
      onClick={closeMenu}
    >
      <div
        className={`menu-bar ${unmount ? "menu-bar-unmount" : ""}`}
        onClick={e => e.stopPropagation()}
      >
        <header>
          <div className="close-btn">
            <span className="material-symbols-outlined" onClick={closeMenu}>
              close
            </span>
          </div>
          <div className="logo-wrapper">
            <Logo />
          </div>
        </header>
        <ul className="menu-list">
          <li className="big-text" onClick={categoryHandler}>
            후기 게시판
          </li>
          <CategoryBox showCategory={showCategory} />
          {MENUS.map(menu => {
            const { id, title, type } = menu;
            return (
              <li className={type} key={id}>
                {title}
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}

export default MenuBar;
