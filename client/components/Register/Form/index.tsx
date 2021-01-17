import { Formik } from "formik";
import { useRegister } from "hooks/mutations/user";
import { message } from "antd";

import { Schema } from "./validation-schema";

import s from "./index.module.sass";

import { Button, Input } from "components";

type Form = {
  username: string;
  email: string;
  password: string;
};

export const RegisterForm = () => {
  const { register, loading, error, data } = useRegister();

  const loadingJSX = loading && <h1>Loading . . .</h1>;
  const errorJSX = error && <p>We have a problem: {error.message}</p>;

  const initialValues: Form = { username: "", email: "", password: "" };

  const onSubmit = (values: Form, resetForm: any) => {
    const { email, password, username } = values;
    console.log(values);
    register(email, password, username);
    message.info(data.register.message);
    console.log(data);
    resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={Schema}
      onSubmit={(values: Form, { resetForm }) => onSubmit(values, resetForm)}
    >
      {({
        values,
        errors,
        touched,
        handleChange,
        handleBlur,
        handleSubmit,
        isSubmitting,
      }) => (
        <form onSubmit={handleSubmit}>
          <div className="field">
            <Input
              type="text"
              name="username"
              value={values.username}
              placeholder="Username"
              onChange={handleChange}
            />
          </div>
          <div className="field">
            <Input
              type="text"
              name="email"
              value={values.email}
              placeholder="Email"
              onChange={handleChange}
            />
          </div>
          <div className="field">
            <Input
              type="password"
              name="password"
              value={values.password}
              placeholder="Password"
              onChange={handleChange}
            />
          </div>
          <div className="field">
            <Button>Register</Button>
          </div>
          {loadingJSX}
          {errorJSX}
        </form>
      )}
    </Formik>
  );
};
