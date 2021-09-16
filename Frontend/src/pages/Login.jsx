import React, { useState} from 'react';
import "./Login.css";
import { useHistory } from "react-router-dom";


function Login() {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const history = useHistory();

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            const res = await fetch('http://localhost:3438/user/login', {
            method: 'POST',
            body: JSON.stringify({email, password}),
            headers: {
            'Content-type': "application/json"// The type of data you're sending
            }
            }).then(response => response.json())
            .then(data => {
            console.log(data)
            history.push("/")
            return data
            });
            
            
        }catch(error){
            console.log(error)
        } 
    };

    return(
      
        
    <div class="contact-section">

    <h1>Login</h1>
    {/* <div class="border"></div> */}

    <form class="contact-form" action="index.html" method="post" onSubmit={handleLogin}>
    <input type="text" class="contact-form-text" placeholder="User Name or Email" value={email} onChange={(e) => setEmail(e.target.value) }/>
    <input type="password" class="contact-form-text" placeholder="Your password" value={password} onChange={(e) => setPassword(e.target.value) }/>
    <input type="submit" class="contact-form-btn" value="Send"/>
    </form>
    </div>

    );
}
export default Login;