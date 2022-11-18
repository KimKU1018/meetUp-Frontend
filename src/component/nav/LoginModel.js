import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./LoginModel.scss";

function LoginModal({ setToggleModal, userName, getUserInfo, setUserName }) {
  const [unmount, setUnmount] = useState(false);
  const navigate = useNavigate();
  const movePage = url => {
    navigate(url);
  };
  const closeModal = () => {
    setUnmount(true);
    setTimeout(() => {
      setToggleModal(false);
    }, 300);
  };
  const logOut = () => {
    localStorage.removeItem("token");
  };
  return (
    <div
      className={`login-modal-bg${unmount ? " modal-bg-unmount" : ""}`}
      onClick={closeModal}
    >
      <div
        className={`login-modal ${unmount ? "side-modal-unmount" : ""}`}
        onClick={e => e.stopPropagation()}
      >
        <header>
          <div className="close-btn">
            <span className="material-symbols-outlined" onClick={closeModal}>
              close
            </span>
          </div>
        </header>
        <div className="modal-login">
          <h1>{userName !== undefined && ` ${userName?.firstName}님`} 안녕하세요!</h1>
          {userName !== undefined ? (
            <span onClick={logOut}>로그아웃</span>
          ) : (
            <span onClick={() => movePage("/login")}>로그인</span>
          )}
        </div>
        <ul>
          {LOGIN_MODAL_MENU.map(menu => {
            const { id, title, url } = menu;
            return (
              <li
                className="login-modal-menu"
                key={id}
                onClick={() => movePage(url)}
              >
                {title}
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}

const LOGIN_MODAL_MENU = [
  { id: 1, title: "나의 정보", url: "/mypage" },
  { id: 2, title: "나의 이력서", url: "/myresume" },
];
export default LoginModal;
