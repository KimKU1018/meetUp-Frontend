import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Logo from "../Logo/Logo";
import MenuBar from "./MenuBar";
import LoginModal from "./LoginModel";
import { loginUser } from "../../api/user";

import "./Nav.scss";
import styled from "styled-components";

function Nav() {
  const [toggleMenu, setToggleMenu] = useState(false);
  const [toggleModal, setToggleModal] = useState(false);
  const [userName, setUserName] = useState(null);
  const navigate = useNavigate();

  const openMenu = () => {
    setToggleMenu(true);
  };
  const openModal = () => {
    setToggleModal(true);
  };

  useEffect(() => {
    loginUser(setUserName);
  }, []);
  return (
    <div className="nav">
      <div className="nav-bar">
        <Logo />
        <div className="search">
          <input type="text" placeholder="검색어를 입력해주세요." />
          <span className="material-symbols-outlined">search</span>
        </div>
        <div className="nav-members">
          <div className="login-or-signup" onClick={openModal}>
            <span className="material-symbols-outlined">person</span>
            <span className="text">
              Hi!&nbsp;&nbsp;
              {userName === null
                ? "로그인 또는 가입하기"
                : userName?.userName.firstName}
            </span>
          </div>
        </div>
      </div>
      {toggleMenu && <MenuBar setToggleMenu={setToggleMenu} />}
      {toggleModal && (
        <LoginModal
          setToggleModal={setToggleModal}
          userName={userName?.userName}
          loginUser={loginUser}
          setUserName={setUserName}
        />
      )}
      <BottomSt>
        <li>홈</li>
        <li>이력서 게시판</li>
        <li>후기 게시판</li>
        <li>취준 플러스</li>
      </BottomSt>
    </div>
  );
}

const BottomSt = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;
  paddling-bottom: 2px;
  paddling-left: 473px
  height: 33px;
  cursor: pointer;
  list-style-tyle: none;

  & li {
    list-style: none;
    padding: 7px 90px 0px 0px;
    cursor: pointer;
    font-size: 20px;
    font-weight: bold;
    color: #B3B3B3;
    line-height: 20px;
    &:hover {
      color: #11DDB1;
      text-decoration: underline;
    }
  }
`;


export default Nav;
