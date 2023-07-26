import React, { useState } from "react"
import { useNavigate } from "react-router-dom"
import Cookies from 'js-cookie';




export const Login = (props) => {
    const [email, setEmail] = useState("")
    const [pass, setPass] = useState("")

    const handleSubmission = (e) => {
        e.preventDefault()
        console.log(email)

        // props.onLogin();

         // Call an API to authenticate the user
        // If the user is authenticated, set the cookie and redirect to the dashboard
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(users => {
          // Find the user with the specified email and password
          const user = users.find(user => user.email === email);
  
          // If the user is found, set the cookie and redirect to the dashboard
          if (user) {
              Cookies.set('user', user);
              navigate('/Dashboard');
          } else {
              // If the user is not found, display an error message
              alert('Invalid email or password');
          }
        })
        .catch(error => {
          console.log(error);
        });
    }


    const navigate =useNavigate();
    return (
        <div className="auth-form">

            <h2>Login</h2>
        <form className="login-form" onSubmit={handleSubmission}>
            <label htmlFor="email">email</label>
            <input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                type="email"
                placeholder="youremai@gmail.com"
                id="email"
                name="email"
            />
            <label htmlFor="password">password</label>
            <input
                value={pass}
                type="password"
                onChange={(e) => setPass(e.target.value)}
                placeholder="********"
                id="password"
                name="password"
            />
            <button type="submit"  >Log In</button>
        </form>

        <button className="link-btn"  onClick={() => props.onformSwitch('register')}>Haven't created an account? Register here.</button>
        </div>
    )
}
