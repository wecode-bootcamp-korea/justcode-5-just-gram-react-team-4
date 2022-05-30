import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import './Login.scss'

function LoginsangbinYim() {
  const navigate = useNavigate();
  const goToMain =() => {
    navigate("/main-sangbin");
    };
  const [ inputValues, setInputValues ] = useState({ Id : '', Password : '' })  
  
  const handleInput = event => {
    const {name ,value} = event.target; 
    setInputValues({...inputValues, [name] : value,});
    console.log({ [name] : value,})
    }
  
 const validation = inputValues.Id.includes('@') && inputValues.Password.length >=5 
  
    return (
      <div className="Login">
        <div className="container">
            <h1 className="logo">justgram</h1> 
            <div className="Id-box">
                <input 
                className="IdInput" 
                type="text" 
                name="Id"
                placeholder="전화번호, 사용자 이름 또는 이메일"
                onChange={handleInput}
                />
            </div>
            <div className="Pass-box">    
                <input 
                  className="PassInput" 
                  type= "password" 
                  name="Password"
                  placeholder="비밀번호"
                  onChange={handleInput}
                />
            </div>
            <div className="bt">
            <button className={validation? 'active': 'inactive'} onClick={goToMain} disabled ={validation ? false : true }>로그인</button>
            </div>
            <div className="extra">비밀번호를 잊으셨나요?</div>
        </div>
      </div>
    );
  }
  
  export default LoginsangbinYim;
