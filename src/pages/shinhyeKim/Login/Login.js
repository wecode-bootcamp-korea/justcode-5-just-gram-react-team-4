import React,{useState} from "react";
import { Link, useNavigate } from "react-router-dom";
import './Login.scss';



function Login () {
  const navigate = useNavigate();
  const [identify, setIdentify] = useState('');
  const [password, setPassword] = useState('');

  const validation = (idText, pwText) => {
    if (!idText.includes("@")) {
      return false;
    }
    if (pwText.length < 7) {
      return false;
    }
    return true;
  }

  const buttonOnClick = () => {
    if (validation(identify, password)) {
      alert('로그인 되었습니다.');
      navigate('/main');
    } else {
      alert('로그인에 실패하였습니다.');
      setIdentify('');
      setPassword('');
    }
  };

  const valid = validation(identify, password);

  return  <div className ="login_container">
  <div className="logo_box">
  <span className="login_logo">Justgram</span>
  </div>
    <div className="input_box">
      <input className="login_input idInput"  
      name="identify" 
      type="email" 
      placeholder="전화번호, 사용자 이름 또는 이메일"
      value={identify}
      onChange={(event) => {
        setIdentify(event.target.value);
      }}
      />
      <input className="login_input pwInput" 
      name="password" 
      type="password" 
      minLength={5} 
      placeholder="비밀번호"
      value={password}
      onChange={(event) => {
        setPassword(event.target.value);
      }}
      />
      <button className={valid ? "login_button active" : "login_button inactive"} 
      disabled={!valid}
      onClick={buttonOnClick}
      >
        로그인 
        </button>
    </div>
    <div className="extra_box">
      <div className="find_pw" href="#">비밀번호를 잊으셨나요?</div>
  </div>
</div>
};


export default Login;