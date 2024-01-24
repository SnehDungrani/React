import { useState } from "react";
import Input from "./Input";
import { isEmail, isNotEmpty, hasMinLength } from "../util/validation";

export default function Login() {
  const [enteredValue, setEnteredValue] = useState({
    email: "",
    password: "",
  });

  const [didEdit, setDidEdit] = useState({
    email: false,
    password: false,
  });

  const emailIsInvalid =
    didEdit.email &&
    !isEmail(enteredValue.email) &&
    !isNotEmpty(enteredValue.email);
  const passwordIsInvalid =
    didEdit.password && !hasMinLength(enteredValue.password, 6);

  function handleInputChange(identifier, value) {
    setEnteredValue((prevValue) => ({
      ...prevValue,
      [identifier]: value,
    }));

    setDidEdit((prevEdit) => ({
      ...prevEdit,
      [identifier]: false,
    }));
  }

  function handleInputBlur(initialValue) {
    setDidEdit((prevEdit) => ({
      ...prevEdit,
      [initialValue]: true,
    }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    console.log(enteredValue);
  }

  return (
    <form onSubmit={handleSubmit}>
      <h2>Login</h2>

      <div className="control-row">
        <Input
          label="Email"
          name="email"
          type="email"
          id="email"
          onBlur={() => {
            handleInputBlur("email");
          }}
          onChange={(e) => handleInputChange("email", e.target.value)}
          value={enteredValue.email}
          error={emailIsInvalid && "Please enter a valid email!"}
        />
        <Input
          label="Password"
          id="password"
          type="password"
          name="password"
          onBlur={() => {
            handleInputBlur("password");
          }}
          onChange={(e) => handleInputChange("password", e.target.value)}
          value={enteredValue.password}
          error={passwordIsInvalid && "Please enter a valid password!"}
        />
      </div>
      <p className="form-actions">
        <button className="button button-flat">Reset</button>
        <button type="submit" className="button">
          Login
        </button>
      </p>
    </form>
  );
}
