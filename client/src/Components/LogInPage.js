import React, { useState } from "react";
import SignUpForm from "./SignUpForm";
import Logo1 from "../Logo1.png";
import { Error } from "../styles"

//check where onLogin is coming from
function LogInPage({ onLogin }) {
    const [emailInput, setEmailInput] = useState("");
    const [passwordInput, setPasswordInput] = useState("");
    const [errors, setErrors] = useState([]);
    const [showSignUp, setShowSignup] = useState(false);

    function handleEmailInput(e) {
        setEmailInput(e.target.value);
        console.log(emailInput);
    }

    function handlePasswordInput(e) {
        setPasswordInput(e.target.value);
        console.log(passwordInput);
    }

    function toggleSignUpButton() {
        setShowSignup(true);
    }

    function handleSubmit(e) {
        e.preventDefault();
        console.log(emailInput, passwordInput);
        const login = {
            email: emailInput,
            password: passwordInput,
        };


        fetch("http://localhost:3000/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(login),
        }).then((data) => {
            if (data.ok) {
                data.json().then((user) => onLogin(user));
            } else {
                data.json().then((err) => setErrors(err.errors));
            }
        });

    }


    if (showSignUp === true) {
        return (
            <>
                <SignUpForm onLogin={onLogin} />
            </>
        );
    }

    return (
        <div className="container justify-content-center">
            <div className="imgcontainer">
                <img src={Logo1} alt="Logo" className="avatar" />
            </div>
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label className="form-label" name="Email input">Email</label>
                    <input
                        name="Email input"
                        className="form-control"
                        id="loginFormEmail"
                        placeholder="email@email.com"
                        type="text"
                        onChange={handleEmailInput}
                    ></input>
                </div>
                <div className="mb-3">
                    <label className="form-label" name="Password Input">Password</label>
                    <input
                        name="Password input"
                        className="form-control"
                        id="loginFormPassword"
                        placeholder="password"
                        type="password"
                        onChange={handlePasswordInput}
                    ></input>
                </div>
                <div>

                    <button className="btn btn-primary btn-lg" type="submit"> Login </button>
                    <button
                        onClick={toggleSignUpButton}
                        type="button"
                        className="cancelbt btn btn-primary btn-lg"
                    >
                        Create Account!
                    </button>
                </div>


                <h3>
                    {errors.map((err) => (
                        <Error key={err}>{err}</Error>
                    ))}
                </h3>
            </form>
        </div>
    )

}

export default LogInPage;