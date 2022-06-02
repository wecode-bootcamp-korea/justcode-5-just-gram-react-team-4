import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.scss";

function Login() {
  const navigate = useNavigate();
  const [id, setId] = useState("");
  const [pw, setPw] = useState("");
  const [disable, setDisable] = useState(true);
  const [opacity, setOpacity] = useState(0.5);

  useEffect(() => {
    handleBtn();
  }, [id, pw]);

  const goToMain = () => {
    navigate("/main-sanghyeon");
  };

  function handleIdInput(e) {
    setId(e.target.value);
  }
  const handlePwInput = (e) => {
    setPw(e.target.value);
  };

  const handleBtn = () => {
    id.includes("@") && pw.length >= 5 ? setOpacity(1) : setOpacity(0.5);
    id.includes("@") && pw.length >= 5 ? setDisable(false) : setDisable(true);
  };
  const signUP = () => {
    fetch("http://52.79.143.176:8000/users/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: id,
        password: pw,
      }),
    })
      .then((response) => response.json())
      .then((result) => {
        if (result.message === "client input invalid") {
          alert(
            " 아이디 또는 비밀번호를 잘못 입력했습니다. \n 입력하신 내용을 다시 확인해주세요. "
          );
        } else {
          goToMain();
        }
        console.log("결과: ", result);
      });
    console.log(pw);
  };

  return (
    <body>
      <div className="wrapper">
        <div className="imgWrapper">
          <img alt="justgram" src="/images/sanghyeon/justgram.png" />
        </div>
        <div className="contentsWrapper">
          <div className="loginBox">
            <p className="justgram">Justgram</p>
            <input
              className="idBox"
              type="text"
              placeholder="전화번호, 사용자 이름 또는 이메일"
              onChange={(e) => {
                handleIdInput(e);
              }}
            />
            <input
              className="passwordBox"
              type="password"
              placeholder="비밀번호"
              onChange={(e) => {
                handlePwInput(e);
              }}
            />
            <input
              type="button"
              disabled={disable}
              style={{ opacity: opacity }}
              className="btnLogin"
              value="로그인"
              onClick={signUP}
            />
            <p>또는</p>
            <p className="facebook">Facebook으로 로그인</p>
            <p className="helpDesk">비밀번호를 잊으셨나요?</p>
          </div>
          <div className="newAccountWrapper">계정이 없으신가요? 가입하기</div>
          <div className="pWrapper">앱을 다운로드하세요</div>
        </div>
      </div>
      <div className="source">
        <p>한국어^ 2022 Justgram from sanghyeon</p>
      </div>
    </body>
  );
}

export default Login;
