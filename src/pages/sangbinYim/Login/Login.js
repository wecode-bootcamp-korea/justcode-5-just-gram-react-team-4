import { useState } from "react";
import { useNavigate } from "react-router-dom";
import './Login.scss'

function LoginsangbinYim() {
  const navigate = useNavigate();
  const goToMain =() => {
    navigate("/Main");
    };
  const [ id, setid ] = useState('')  
  const handleIdInput = event => {
    setid(event.target.value);
    }
  const [ pw, setpw ] = useState('')
  const handlePwInput = event => {
    setpw(event.target.value);
  }
 const validation = id.includes('@') && pw.length >=5 
  
    return (
      <div className="Login">
        <div class="container">
            <h1 class="logo">justgram</h1> 
            <div class="Id-box">
                <input 
                class="IdInput" 
                type="text" 
                placeholder="전화번호, 사용자 이름 또는 이메일"
                onChange={handleIdInput}
                />
            </div>
            <div class="Pass-box">    
                <input 
                  class="PassInput" 
                  type= "password" 
                  placeholder="비밀번호"
                  onChange={handlePwInput}
                />
            </div>
            <div class="bt">
            <button className={validation? 'active': 'inactive'} onClick={goToMain} disabled ={validation ? false : true }>로그인</button>
            </div>
            <div class="extra">비밀번호를 잊으셨나요?</div>
        </div>
        <script src="js/login.js"></script>
      </div>
    );
  }
  
  export default LoginsangbinYim;
