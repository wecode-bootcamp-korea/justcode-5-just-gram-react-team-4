import React from "react";
import "./Login.scss";
import { Link } from "react-router-dom";

function LoginJulie() {
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
          />
          <input className="input-common password" placeholder="비밀번호" />
          <Link to="/main-julie">
            <button disabled className="login-button loginbutton-blue">
              로그인
            </button>
          </Link>
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
