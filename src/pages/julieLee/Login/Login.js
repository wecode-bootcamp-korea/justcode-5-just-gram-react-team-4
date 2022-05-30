import React from "react";
import "./Login.scss";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

function LoginJulie() {
  const navigate = useNavigate();
  const goToMain = () => {
    navigate("/main-julie");
  };

  const [identify, setIdentify] = useState("");
  const handleIdInput = (event) => setIdentify(event.target.value);
  const [password, setPassword] = useState("");
  const handlePwInput = (event) => setPassword(event.target.value);

  const validation = (idText, pwText) => {
    if (idText.includes("@") && pwText.length >= 5) {
      return true;
    }
  };

  const runValidation = validation(identify, password);

  const [opacity, setOpacity] = useState(0.5);
  const handleBtn = () => {
    runValidation ? setOpacity(1) : setOpacity(0.5);
  };
  return (
    <div>
      <div className="container">
        <div className="logo-box">
          <span className="logo-text">Justgram</span>
        </div>
        <div className="input-box">
          <input
            className="input-common identify"
            placeholder="전화번호, 사용자 이름 또는 이메일"
            value={identify}
            onChange={(event) => {
              handleIdInput(event);
              handleBtn(event);
            }}
          />
          <input
            className="input-common password"
            placeholder="비밀번호"
            value={password}
            onChange={(event) => {
              handlePwInput(event);
              handleBtn(event);
            }}
          />
          <button
            className="login-button"
            onClick={goToMain}
            disabled={!runValidation}
            style={{ opacity: opacity }}
          >
            로그인
          </button>
        </div>
        <div className="extra-box">
          <span className="find-password" href="#">
            비밀번호를 잊으셨나요
          </span>
        </div>
      </div>
    </div>
  );
}

export default LoginJulie;
