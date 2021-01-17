import * as Yup from "yup";

export const Schema = Yup.object().shape({
  email: Yup.string().email(),
  password: Yup.string().required("Password is required"),
});
