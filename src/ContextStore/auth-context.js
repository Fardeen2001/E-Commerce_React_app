import React, { useState } from "react";

const AuthContext = React.createContext({
  token: "",
  email: "",
  isLoggedIn: false,
  login: (token, email) => {},
  logout: () => {},
});
export const AuthContextProvider = (props) => {
  const initialToken = sessionStorage.getItem("loginId");
  const [token, setToken] = useState(initialToken);
  const [email, setEmail] = useState("");

  const userIsLoggedIn = !!token;
  console.log(userIsLoggedIn);
  const logInHandler = (token, email) => {
    sessionStorage.setItem("loginId", token);
    console.log("lid", token);
    setToken(token);
    setEmail(email);
  };

  const logoutHandler = () => {
    sessionStorage.removeItem("loginId");
    setToken(null);
    setEmail("");
  };

  const contextValue = {
    token: token,
    email: email,
    isLoggedIn: userIsLoggedIn,
    login: logInHandler,
    logout: logoutHandler,
  };
  return (
    <AuthContext.Provider value={contextValue}>
      {props.children}
    </AuthContext.Provider>
  );
};
export default AuthContext;
