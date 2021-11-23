import React from "react";
import Form from "./components/Form";
import SignupImg from "./assets/signup.svg";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

const App = () => {
  return (
    <div className="container my-3">
      <div className="row">
        <div className="col-6 card border-0 shadow">
          <h1 className="my-5">Sign Up</h1>
          <Form />
        </div>
        <div className="col-6 d-flex justify-content-center">
          <img className="img-fluid w-50" src={SignupImg} alt="signup" />
        </div>
      </div>
    </div>
  );
};

export default App;
