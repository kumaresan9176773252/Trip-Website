import { useState } from "react";
import Login from "../components/Login";
import Register from "../components/Register";
import Navbar from "../components/Navbar";

function SignUp() {
  const [currentForm, setCurrentForm] = useState("login");

  const toggleForm = (formName) => {
    setCurrentForm(formName);
  };
  return (
    <>
      <Navbar />
      {currentForm === "login" ? (
        <Login onFormSwitch={toggleForm} />
      ) : (
        <Register onFormSwitch={toggleForm} />
      )}
    </>
  );
}
export default SignUp;
