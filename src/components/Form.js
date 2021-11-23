import React from "react";
import { useForm } from "react-hook-form";
import classNames from "classnames";

const Form = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: "onTouched",
  });

  const onSubmit = (data) => {
    console.log(data);
  };

  console.log(errors);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="mb-3">
        <label className="form-label" htmlFor="firstname">
          First Name
        </label>
        <input
          className={classNames("form-control", {
            "is-invalid": errors.firstname,
          })}
          id="firstname"
          type="text"
          placeholder="First name"
          {...register("firstname", {
            required: "This field is required.",
            minLength: {
              value: 3,
              message: "Enter more characters.",
            },
          })}
        />
        {errors.firstname && (
          <div className="invalid-feedback">{errors.firstname.message}</div>
        )}
      </div>

      <div className="mb-3">
        <label className="form-label" htmlFor="lastname">
          Last Name
        </label>
        <input
          className={classNames("form-control", {
            "is-invalid": errors.lastname,
          })}
          id="lastname"
          name="lastname"
          type="text"
          placeholder="Last name"
          {...register("lastname", {
            required: "This field is required.",
            minLength: {
              value: 3,
              message: "Enter more characters.",
            },
          })}
        />
        {errors.lastname && (
          <div className="invalid-feedback">{errors.lastname.message}</div>
        )}
      </div>

      <div className="mb-3">
        <label className="form-label" htmlFor="email">
          Email
        </label>
        <input
          className={classNames("form-control", { "is-invalid": errors.email })}
          id="email"
          name="email"
          type="text"
          placeholder="Email"
          {...register("email", {
            required: "This field is required",
            pattern: {
              value: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,
              message: "Enter a valid email address.",
            },
          })}
        />
        {errors.email && (
          <div className="invalid-feedback">{errors.email.message}</div>
        )}
      </div>

      <div className="mb-3">
        <label className="form-label" htmlFor="password">
          Password
        </label>
        <input
          className={classNames("form-control", {
            "is-invalid": errors.password,
          })}
          id="password"
          name="password"
          type="password"
          placeholder="Password"
          {...register("password", {
            required: "This field is required",
            pattern: {
              value: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/,
              message:
                "Enter a stronger password. [Uppercase, Lowercase, Special characters/Number, Min. 8 characters]",
            },
          })}
        />
        {errors.password && (
          <div className="invalid-feedback">{errors.password.message}</div>
        )}
      </div>

      <div className="form-group">
        <div className="form-check form-check-inline">
          <label className="form-check-label" htmlFor="tnc">
            I agree to all terms and conditions.
          </label>
          <input
            className="form-check-input"
            type="checkbox"
            id="tnc"
            name="tnc"
            {...register("tnc", {
              required: "You have to agree to all the terms and conditions.",
            })}
          />
        </div>
        {errors.tnc && (
          <div className="form-text text-danger">{errors.tnc.message}</div>
        )}
      </div>
      <button className="btn btn-primary mt-3 mb-5" type="submit">
        Create New Account
      </button>
    </form>
  );
};

export default Form;
