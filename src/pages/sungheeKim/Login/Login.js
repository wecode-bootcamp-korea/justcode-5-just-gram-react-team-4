import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Login.scss";


function Login(){
    const navigate=useNavigate();
    const [id,setId]=useState('');
    const [password,setPassword]=useState('');
    const [isValid,setIsValid]=useState(false);
    const goToMain=()=>{
        navigate("/main");

    }

    function handleIdInput(event){  
        setId(event.target.value);
        validate();
    }
    function handlePasswordInput(event){
        setPassword(event.target.value);
        validate();
    }
    function validate(){
        id.includes('@') && password.length>=5 ?setIsValid(true): setIsValid(false);
    }


    return(
        <div className="login-container">
        <div className="logo-box"> 
            <span className="logo-text">Justgram</span>
        </div>
        <div className="input-box">
            <input id="identify" onChange={handleIdInput} value={id} type="text" placeholder="전화번호,사용자 이름 또는 이메일"/>
            <input id="password" onChange={handlePasswordInput} value={password} type="password" placeholder="비밀번호"/>
            {/* <button disabled="disabled" className="login-btn"type="button">로그인</button> */}
            {/* <Link to="/main" className="login-btn">로그인</Link> */}
            <button className="login-btn" disabled={!isValid} onClick={goToMain}>로그인</button>
        </div>
    <div className="extra-box">
        <a className="find-password">비밀번호를 잊으셨나요?</a>
    </div>    
</div>   
    )
}

export default Login;