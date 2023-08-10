import React, { useContext, useRef, useState } from "react";
import classes from "./AuthForm.module.css";
import Form from "react-bootstrap/Form";
import { Container } from "react-bootstrap";
import Footer from "../Layout/Footer";
import AuthContext from "../../ContextStore/auth-context";
import { useNavigate } from "react-router-dom";

const AuthForm = () => {
  const emailInput = useRef("");
  const passwordInput = useRef("");
  const authCxt = useContext(AuthContext);
  const navigate = useNavigate();
  const [isLogin, setIsLogin] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const switchAuthModeHandler = () => {
    setIsLogin((prevState) => !prevState);
  };
  const SubmitHandler = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    let url;
    if (isLogin) {
      url =
        "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyDDX1C4m9Mh3NUl2mAzpirRS_xqe2gwWes";
    } else {
      url =
        "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyDDX1C4m9Mh3NUl2mAzpirRS_xqe2gwWes";
    }
    try {
      const response = await fetch(url, {
        method: "POST",
        body: JSON.stringify({
          email: emailInput.current.value,
          password: passwordInput.current.value,
          returnSecureToken: true,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      });
      if (!response.ok) {
        throw new Error("Invalid Email or password");
      }
      const data = await response.json();
      setIsLoading(false);
      //   console.log(data.idToken);
      authCxt.login(data.idToken, emailInput.current.value);

      navigate("/Store", { replace: true });
    } catch (error) {
      alert(error.message);
    }
  };
  return (
    <>
      {/* <Container
        style={{
          width: "55rem",
          margin: "10% 0 5% 12%",
        }}
      >
        <Stack gap={2} className="col-md-5 mx-auto">
          <Form
            style={{
              border: "2px solid black",
              borderRadius: "10px",
              padding: "30px",
            }}
            onSubmit={SubmitHandler}
          >
            <h1>{isLogin ? "LOGIN" : "SIGNUP"}</h1>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter email"
                ref={emailInput}
                required
              />
              <Form.Text className="text-muted">
                We'll never share your email with anyone else.
              </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Password"
                ref={passwordInput}
                required
              />
            </Form.Group>
            <div className={classes.actions}>
              {!isLoading && (
                <button>{isLogin ? "Login" : "Create Account"}</button>
              )}
              {isLoading && <p>Sending request..</p>}
              <button
                type="button"
                className={classes.toggle}
                onClick={switchAuthModeHandler}
              >
                {isLogin ? "Create new account" : "Login with existing account"}
              </button>
            </div>
          </Form>
        </Stack>
      </Container> */}
      <Container
        style={{
          border: "2px solid black",
          borderRadius: "10px",
          padding: "10px",
          width: "70vw",
          height: "auto",
        }}
      >
        <Form onSubmit={SubmitHandler}>
          <h1>{isLogin ? "LOGIN" : "SIGNUP"}</h1>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter email"
              ref={emailInput}
              required
            />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Password"
              ref={passwordInput}
              required
            />
          </Form.Group>

          <div className={classes.actions}>
            {!isLoading && (
              <button>{isLogin ? "Login" : "Create Account"}</button>
            )}
            {isLoading && <p>Sending request..</p>}
            <button
              type="button"
              className={classes.toggle}
              onClick={switchAuthModeHandler}
            >
              {isLogin ? "Create new account" : "Login with existing account"}
            </button>
          </div>
        </Form>
      </Container>
      <Footer />
    </>
  );
};

export default AuthForm;
