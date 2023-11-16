import "./LoginSignUp.css";
import { useState } from "react";
import user_icon from "../Assets/person.png"
import email_icon from "../Assets/email.png"
import password_icon from "../Assets/password.png"

const LoginSignUp = () => {

    const[action, setAction] = useState("Sign Up");

  return (
    <div>
        <div className="container">
            <div className="header">
                <div className="text">{action}</div>
                <div className="underline"></div>
            </div>
            <div className="inputs">
                {action==="Login"?"":<div className="input">
                    <img src={user_icon} alt="" />
                    <input type="text" placeholder="Enter Name" />
                </div>}
                
            </div>
            <div className="inputs">
                <div className="input">
                    <img src={email_icon} alt="" />
                    <input type="email" placeholder="Enter email" />
                </div>
            </div>
            <div className="inputs">
                <div className="input">
                    <img src={password_icon} alt="" />
                    <input type="password" placeholder="Enter Password" />
                </div>
            </div>
            if{action==="Sign Up"?"":<div className="forgot-password">Forgot password <span>Click here</span></div>}
            
            <div className="submit-container">
                <div className={action==="Login"?"submit gray":"submit"} onClick={()=>{setAction("Sign Up")}}>Sign Up</div>
                <div className={action==="Sign Up"?"submit gray":"submit"} onClick={()=>{setAction("Login")}}>Login</div>
            </div>
        </div>




    </div>
  )
}

export default LoginSignUp
