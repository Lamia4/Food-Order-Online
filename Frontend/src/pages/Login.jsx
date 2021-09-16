import React, { useState } from 'react';
import "./Login.css"


function Login()
{
    return(
      
        
<div class="contact-section">

<h1>Login</h1>
{/* <div class="border"></div> */}

<form class="contact-form" action="index.html" method="post">
  <input type="text" class="contact-form-text" placeholder="User Name or Email"/>
  <input type="password" class="contact-form-text" placeholder="Your password"/>
  <input type="submit" class="contact-form-btn" value="Send"/>
</form>
</div>

    );
}
export default Login;