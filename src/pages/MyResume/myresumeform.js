import React, { useEffect, useState } from 'react';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';

import styled from 'styled-components';
import { useHistory, useParams } from 'react-router-dom';
import { API } from '../../config';

function ResumeForm() {
  const { id } = useParams();
  const [resumeData, setResumeData] = useState({});
  const [userInfo, setUserInfo] = useState([]);
  const [isDone, setIsDone] = useState(false);

  const history = useHistory();

  useEffect(() => {
    if (id) {
      fetch(`${MYRESUME}/${id}`, {
        headers: {
          Authorization: localStorage.getItem('token'),
        },
      })
        .then(res => res.json())
        .then(resume => setResumeData(resume.result));
    } else {
      fetch(`${MYPAGE}`, {
        headers: {
          Authorization: localStorage.getItem('token'),
        },
      })
        .then(res => res.json())
        .then(userInfo => setUserInfo(userInfo.result));
    }
  }, [id]);
  
   let sumOfCharacters = 0;
  if (resumeData.content) {
    sumOfCharacters = Object.values(resumeData.content).reduce(
      (sum, cur) => sum + cur.length,
      0
    );
  } else {
    sumOfCharacters = 0;
  }

  const handleOnchange = e => {
    setResumeData({
      ...resumeData,
      content: {
        ...resumeData.content,
        [e.target.name]: e.target.value,
      },
    });

    if (sumOfCharacters > 400) {
      setIsDone(true);
    } else {
      setIsDone(false);
    }
  };

  const generatePDF = () => {
    html2canvas(document.querySelector('#main')).then(canvas => {
      const doc = new jsPDF('p', 'pt', 'a4');

      const imgData = canvas.toDataURL('image/png');

      doc.addImage(imgData, 'PNG', 30, 30, 700, 700);
      doc.save('sample.pdf');
    });
  };
  
  const fetchFunction = (apiAdress, method, message) => {
    fetch(
      apiAdress,
      {
        method: method,
        headers: {
          Authorization: localStorage.getItem('token'),
        },
        body: JSON.stringify({
          title: resumeData.title ? resumeData.title : userInfo.name,
          description: resumeData.content.description,
          career: resumeData.content.career,
          education: resumeData.content.education,
          skill: resumeData.content.skill,
          isDone: isDone,
        }),
      },
      {}
    )
      .then(res => res.json())
      .then(result => {
        if (result.message === 'SUCCESS') {
          alert(message);
          history.push('MYRESUME');
        }
      });
  };
  
    const submitResume = () => {
    if (!id) {
      fetchFunction(`${MYRESUME}`, 'POST', '작성완료');
    } else {
      fetchFunction(`${MYRESUME}/${id}`, 'PATCH', '수정 완료');
    }
  };

  return (
    <Container>
      <div>
        <Header>
          <div>
            <button onClick={generatePDF} type="primary">
              <i className="fas fa-file-download"></i>
            </button>
          </div>
        </Header>
      </div>
      <Main id="main">
        <h1 id="title">
          {resumeData.title ? resumeData.title : userInfo.name}
        </h1>
        <div>
          <p>{resumeData.user ? resumeData.user.name : userInfo.name}</p>
          <p>{resumeData.user ? resumeData.user.email : userInfo.email}</p>
        </div>
        <Section>
          {DESCRIPTION.map(description => {
            return (
              <>
                <header>{description.title}</header>
                <ul>
                  {description.content?.desc.map(descList => (
                    <li>{descList}</li>
                  ))}
                </ul>

                <textarea
                  onChange={handleOnchange}
                  name={description.name}
                  type="text"
                  value={resumeData.content?.[description.name]}
                  placeholder={description.placeholder}
                />
              </>
            );
          })}
        </Section>
      </Main>

      <Footer>
        <div>
          <div>
            <p>글자 수 : {sumOfCharacters} </p>
          </div>

          <Wrapper>
            <div>
              <Progressbar>
                <Graph count={sumOfCharacters} />
              </Progressbar>
            </div>
            <BtnWrapper>
              <SaveBtn>
                <span>임시 저장</span>
              </SaveBtn>
              <CompleteBtn onClick={submitResume}>
                <span>작성 완료</span>
              </CompleteBtn>
            </BtnWrapper>
          </Wrapper>
        </div>
      </Footer>
    </Container>
  );
}
export default ResumeForm;

const DESCRIPTION = [
  {
    title: '나의 이력서',
    name: 'myresume',
    desc: [
      '카테고리를 선택해주세요.',
      '활동명을 입력해주세요',
    ],
    placeholder:
      '활동내용을 입력해주세요 (최대 255자)',
  },
];

const CheerText = styled.p`
  color: ${props => (props.count > 400 ? 'blue' : 'black')};
`;

const Section = styled.section`
  margin-bottom: 40px;
  padding-bottom: 100px;
  header {
    padding: 20px 0 6px 0;
    border-bottom: 1px solid black;
  }
  ul {
    margin-top: 20px;
    background-color: #f3f9fe;
    li {
      margin-top: 10px;
    }
  }
  textarea {
    width: 1450px;
    margin: 30px 0 120px 0;
    font-size: 16px;
    border: none;
    outline: none;
  }
`;

const Footer = styled.footer`
  position: fixed;
  width: 100%;
  height: 82px;
  bottom: 0;
  padding: 0 50px;
  border-top: 1px solid #e0e0e0;
  background-color: white;
  z-index: 20;
  p {
    line-height: 25px;
  }
`;

const Wrapper = styled.div`
  ${({ theme }) => theme.setFlex('space-between')}
  div {
    display: flex;
    align-items: center;
  }
`;
const Progressbar = styled.div`
  height: 9px;
  width: 150px;
  background-color: #e1e2e3;
  border-radius: 4.5px;
`;
const Graph = styled.div`
  height: 9px;
  width: ${props => `${props.count * 0.3}px`};
  background-color: ${props => `${props.count > 400 ? 'blue' : 'black'}`};
`;

const BtnWrapper = styled.div`
  display: flex;
  margin-right: 40px;
  button {
    width: 163px;
    height: 45px;
    padding: 14px 30px 13px 28px;
    border: 1px solid black;
    border-radius: 25px;
    font-size: 16px;
    cursor: pointer;
  }
`;

const SaveBtn = styled.button`
  border: 1px solid #36f;
  color: #36f;
`;

const CompleteBtn = styled.button`
  margin-left: 10px;
  background-color: #36f;
  color: white;
`;
