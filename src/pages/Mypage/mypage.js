import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './mypage.scss';

function Mypage() {
  const navigate = useNavigate();

  const [univ, setUniv] = useState(false);
  const [isValid, setIsValid] = useState(false);
  const [grade, setGrade] = useState('');
  const [startYear, setStartYear] = useState('');
  const [major, setMajor] = useState('');
  const [credit, setCredit] = useState('');
  const [course, setCourse] = useState('');
  const [business, setBusiness] = useState('');
  
  const unviClick = e => {
    setEmailSignUp(true);
  };

  const onGradeHandle = e => {
    setGrade(e.target.value);
  };

  const onStartYearHandle = e => {
    setStartYear(e.target.value);
  };

  const onMajorHandle = e => {
    setMajor(e.target.value);
  };

  const onCreditHandle = e => {
    setCredit(e.target.value);
  };

  const onCourseHandle = e => {
    setCourse(e.target.value);
  };

  const onBusinessHandle = e => {
    setBusiness(e.target.value);
  };
  
   return (
    <>
      <div className={css.signup}>
        <div className={css.container}>
          <div className={css.header}>
            <span className={css.title}>나의 정보 입력하기</span>
            <p>
              그 길 위에 우리, Groad와 함께 미래를 준비하세요! <br />
            </p>
          </div>
          <div className={css.divider}></div>
          <LogoBox> 나의 페이지</LogoBox>
          <div className={css.divideror}>
            <div className={css['divideror-line']}></div>
            <span className={css.text}></span>
            <div className={css['divideror-line']}></div>
          </div>
          <div className={css['account-type-box']}>
            <a className={css.btn} onClick={emailSignUpClick}>
            </a>
          </div>
          {emailSignUp && (
            <div className={css['member-by-email']}>
              <form
                className={css['account-form-body']}
                onSubmit={e => {
                  e.preventDefault();
                }}
              >
                <div className={css['user-email']}>
                  <label htmlFor="univ" className={css.string}>
                    대학교*
                  </label>
                  <input
                    id="univ"
                    type="text"
                    name="univ"
                    value={univ}
                    placeholder="학교를 입력해주세요"
                    required={true}
                    className={css['input-text']}
                    onChange={onEmailHandle}
                  />
                </div>
                <div className={css['user-password']}>
                  <label htmlFor="grade" className={css.string}>
                    학년*
                  </label>
                  <input
                    id="grade"
                    type="init"
                    name="grade"
                    value={grade}
                    placeholder="학년을 입력해주세요"
                    required={true}
                    className={css['input-text']}
                    onChange={onPasswordHandle}
                  />
                </div>
                <div className={css['StartYear']}>
                  <label htmlFor="StartYear" className={css.string}>
                    입학년도*
                  </label>
                  <input
                    id="StartYear"
                    type="init"
                    name="StartYear"
                    value={StartYear}
                    placeholder="입학년도를 입력해주세요"
                    required={true}
                    className={css['input-text']}
                    onChange={onRePasswordHandle}
                  />
                </div>
                <div className={css['major']}>
                  <label htmlFor="major" className={css.string}>
                    학과*
                  </label>
                  <input
                    id="major"
                    type="text"
                    name="major"
                    value={major}
                    placeholder="학과를 입력해주세요."
                    required={true}
                    className={css['input-text']}
                    onChange={onNameHandle}
                  />
                </div>
                <div className={css['credit']}>
                  <label htmlFor="credit" className={css.string}>
                    학점*
                  </label>
                  <input
                    id="credit"
                    type="text"
                    name="credit"
                    value={credit}
                    placeholder="학점을 입력해주세요. 예) 4.0/4.5"
                    required={true}
                    className={css['input-text']}
                    onChange={onPhoneNumberHandle}
                  />
                </div>
                <div className={css['course']}>
                  <label htmlFor="course" className={css.string}>
                    생년월일*
                  </label>
                  <input
                    id="course"
                    type="text"
                    name="course"
                    value={course}
                    placeholder="진로를 입력해주세요"
                    required={true}
                    className={css['input-text']}
                    onChange={onBirthHandle}
                  />
                </div>

                <div className={css['form-actions']}>
                  <span className={css['account-form-actions-sidetext']}>
                    <a
                      className={css['text-link']}
                      href="/meesing/tos"
                      target="_blank"
                    >
                      이용약관
                    </a>
                    &nbsp; 및 &nbsp;
                    <a
                      className={css['text-link']}
                      href="/meesing/privacy"
                      target="_blank"
                    >
                      개인정보보호
                    </a>
                    <br />
                    내용을 확인 하였으며, 동의합니다.
                  </span>
                  <input
                    className={css.btn}
                    type="submit"
                    value="입력 완료"
                    onClick={userSignUp}
                  />
                </div>
              </form>
            </div>
          )}

          <div className={css['account-postbox']}>
            이미 Groad 회원이신가요?
            <a
              className={css['text-link']}
              onClick={() => {
                alert(
                  '이미 Groad 회원이신가요? \n로그인 페이지로 이동합니다.'
                );
                navigate('/login');
              }}
            >
              로그인하기
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default Mypage;
  
