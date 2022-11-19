import React, { useState } from "react";
import Logo1 from "../Logo1.png";

//check where onLogin is being passed
function SignUpForm({ onLogin }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirmation, setPasswordConfirmation] = useState("");
  const [first_name, setFirstName] = useState('')
  const [last_name, setLastName] = useState('')
  const [errors, setErrors] = useState([]);

  function handleSubmit(e) {

    e.preventDefault();
    setErrors([]);
    fetch("http://localhost:3000/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        first_name,
        last_name,
        email,
        password,
        password_confirmation: passwordConfirmation,
      }),
    }).then((r) => {
      if (r.ok) {
        r.json().then((user) => onLogin(user));
      } else {
        r.json().then((err) => setErrors(err.errors));
      }
    });
  }


  return (
    <div className="container justify-content-center">
      <div className="imgcontainer">
        <img src={Logo1} alt="Logo" className="avatar" />
      </div>

      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label className="form-label" name="First Name Input">First Name</label>
          <input
            type="text"
            id="name"
            className="form-control"
            autoComplete="off"
            value={first_name}
            onChange={(e => setFirstName(e.target.value))}
          ></input>
        </div>

        <div className="mb-3">
          <label className="form-label" name="Last Name Input">Last Name</label>
          <input
            type="text"
            id="name"
            className="form-control"
            autoComplete="off"
            value={last_name}
            onChange={(e => setLastName(e.target.value))}
          ></input>
        </div>

        <div className="mb-3">
          <label className="form-label" name="Email input">Email</label>
          <input
            type="text"
            id="email"
            className="form-control"
            autoComplete="off"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          ></input>
        </div>

        <div className="mb-3">
          <label className="form-label" name="Password Input">Create Password</label>
          <input
            type="password"
            id="password"
            className="form-control"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            autoComplete="current-password"
          ></input>
        </div>

        <div className="mb-3">
          <label className="form-label" name="Password Input">Confirm Password</label>
          <input
            type="password"
            id="password_confirmation"
            className="form-control"
            value={passwordConfirmation}
            onChange={(e) => setPasswordConfirmation(e.target.value)}
            autoComplete="current-password"
          ></input>
        </div>


        <div>
          <button type="submit" className="btn btn-primary btn-lg"> Create Account </button>
          <button type="button" className="cancelbtn btn btn-primary btn-lg" >
            Back
          </button>
        </div>

        <h3>{errors}</h3>
      </form>

    </div>

  )
}


export default SignUpForm;