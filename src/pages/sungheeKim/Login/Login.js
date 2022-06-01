import React from "react";
import "./Login.scss"
import{useState} from "react";
import { Link, useNavigate } from "react-router-dom";
                                                      

function Login(){

    //프로그래밍적으로 다른페이지로 갈수 있게.
    const navigate=useNavigate();
    const [id,setId]=useState('');
    const [password,setPassword]=useState('');
    const [isValid,setIsValid]=useState(false);
    
    function goToMain(){
        navigate("/main");
    }
    
    function handleInput(event){
        setId(event.target.value);
        validate();
    }

    function handlePasswordInput(event){
        setPassword(event.target.value);
        validate();
    }

    function validate(){
        id.includes('@') && password.length>=5 ?setIsValid(true):setIsValid(false);
    }


    return(
        <div className="login-container">
            <div className="logo-box">
                <span className="logo-text">Justgram</span>
            </div>
            <div className="input-box">
                <input id="identify" value={id} onChange={handleInput} type="text" placeholder="전화번호,사용자 이름 또는 이메일"/>
                <input id="password" value={password} onChange={handlePasswordInput} type="password" placeholder="비밀번호"/>
                <button disabled={!isValid} onClick={goToMain} className="login-btn">로그인</button>
            </div>
            <div className="find-password-box">
                <a>비밀번호를 잊으셨나요?</a>
            </div>
        </div>

    )
}

export default Login;