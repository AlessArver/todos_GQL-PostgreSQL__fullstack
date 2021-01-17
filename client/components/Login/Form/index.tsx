import { Formik } from "formik";
import { useLogin } from "hooks/mutations/user";
import { message } from "antd";

import { Schema } from "./validation-schema";

import s from "./index.module.sass";

import { Button, Input } from "components";

type Form = {
  email: string;
  password: string;
};

export const LoginForm = () => {
  const { login, loading, error, data } = useLogin();

  const loadingJSX = loading && <h1>Loading . . .</h1>;
  const errorJSX = error && <p>We have a problem: {error.message}</p>;

  const initialValues: Form = { email: "", password: "" };

  const onSubmit = (values: Form, resetForm: any) => {
    const { email, password } = values;
    login(email, password);
    message.info(data.login.message);
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
            <Button>Login</Button>
          </div>
          {loadingJSX}
          {errorJSX}
        </form>
      )}
    </Formik>
  );
};
