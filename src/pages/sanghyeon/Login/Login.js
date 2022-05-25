
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.scss";

function Login() {
  const navigate = useNavigate();
  const [id,setId] = useState("")
  const [pw,setPw] = useState("")
  const [disable, setDisable] = useState(true);
  const [opacity, setOpacity] = useState(0.5);

  const goToMain = () => {
    navigate("/main-sanghyeon");
  };
  
  function handleIdInput(e){
    return setId(e.target.value);
  };
  const handlePwInput = (e) =>{
    return setPw(e.target.value);
  };

  const handleBtn = () => {
    id.includes('@') && pw.length >= 5 ? setOpacity(1) : setOpacity(0.5);
    id.includes('@') && pw.length >= 5 ? setDisable(false) : setDisable(true);
  };

  return (
    <body>
        <div className="wrapper">
            <div className="imgWrapper">
                <img alt="justgram" src="/images/sanghyeon/justgram.png"  />
            </div>
            <div className="contentsWrapper">
                <div className="loginBox">
                    <p className="justgram">Justgram</p>
                    <input className="idBox" type="text" placeholder="전화번호, 사용자 이름 또는 이메일"
                    onChange={e=>{
                        handleIdInput(e);
                        handleBtn();
                    }}/>
                    <input className="passwordBox" type="password" placeholder="비밀번호" 
                    onChange={ e=>{
                        handlePwInput(e);
                        handleBtn();
                    }}/>
                    <input type="button" disabled={disable} style={{opacity:opacity}} className="btnLogin" value="로그인" onClick={goToMain}/>
                    <p>또는</p>
                    <p className="facebook">Facebook으로 로그인</p>
                    <p className="helpDesk">비밀번호를 잊으셨나요?</p>

                </div>
                <div className="newAccountWrapper">
                계정이 없으신가요? 가입하기
                </div>
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
