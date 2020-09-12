import React, { useState } from "react";
import amazon from "../../img/amazon_logo.webp";
import { Link, useHistory } from "react-router-dom";
import "./Login.scss";
import { auth } from "../../firebase";

const Login = () => {
  const history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const register = (e) => {
    e.preventDefault();
    auth.createUserWithEmailAndPassword(email,password).then((auth) => {
      console.log(auth);
      if (auth) {
        history.push('/')
      } 
    })
    .catch(error => alert(error.message))
  };

  const signIn = (e) => {
    e.preventDefault();

    auth
    .signInWithEmailAndPassword(email, password)
    .then(auth => {
      history.push('/')
    })
    .catch(error => alert(error.message))
  };

  return (
    <div className="login">
      <Link to="/">
        <img className="login__logo" src={amazon} alt="" />
      </Link>
      <div className="login__container">
        <h1>Sign In</h1>
        <form>
          <h5>E-mail</h5>
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <h5>Password</h5>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button className="login__signInButton" onClick={signIn}>Sign In</button>
          <p>
            By continuing, you agree to AMAZON CLONE's Conditions of Use and
            Privacy Notice.
          </p>
          <button
            className="login__registerButton"
            onClick={register}>
            Create your Amazon Account
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;

