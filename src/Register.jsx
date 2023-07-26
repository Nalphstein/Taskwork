import React, { useState } from "react";
import { useNavigate } from "react-router-dom"

export const Register = (props) => {
    const [email, setEmail] = useState("");
    const [pass, setPass] = useState("");
    const [name, setName] = useState("");

    const handleSubmission = (e) => {
        e.preventDefault()
        console.log(email)
    }

    const navigate =useNavigate();
    return(
        
        <div className="auth-form">
            <h2>Register</h2>
        <form className="login-form" onSubmit={handleSubmission}>
            <label htmlFor="name">Full name</label>
            <input value={name} name="name" id="name" placeholder="full Name" type="text" />
            <label htmlFor="email">email</label>
            <input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                type="email"
                placeholder="youremail@gmail.com"
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
            <button type="submit" onClick={() => {
                navigate('/Dashboard');
            }} >Log In</button>
        </form>

        <button className="link-btn" onClick={() => props.onformSwitch('login')}>Already have an account? Login.</button>
        </div>
    )
}