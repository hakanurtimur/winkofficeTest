import React, { useContext } from "react";
import { AuthContext } from "@/context/AuthContext";
import AuthContextModel from "@/models/authContextModel";

const ForgotPassword: React.FC = () => {
  const { forgotPassword } = useContext(AuthContext) as AuthContextModel;
  const enteredRef = React.useRef<HTMLInputElement>(null);

  const submitHandler = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!enteredRef.current) return;
    const enteredEmail = enteredRef.current?.value;
    if (enteredEmail && enteredEmail.trim().length === 0) {
      // throw an error
      return;
    }

    forgotPassword(enteredEmail);

    setTimeout(() => {
      window.location.href = "/auth";
      window.alert("Check your email for reset password link");
    }, 1000);
  };

  return (
    <form
      className="flex flex-col justify-between items-center text-primary-900 p-3 w-full m-auto gap-2"
      onSubmit={submitHandler}
    >
      <label className="w-8/12 m-1" htmlFor="email">
        Email Address
      </label>
      <input
        className="bg-primary-200 m-2 p-3 rounded w-8/12
        hover:bg-primary-100 "
        type="email"
        id="email"
        ref={enteredRef}
      />
      <button
        type="submit"
        className="w-8/12 bg-secondary-500 m-2 p-3 rounded  hover:bg-secondary-700 disabled:opacity-
        50"
      >
        Reset Password
      </button>
    </form>
  );
};

export default ForgotPassword;
