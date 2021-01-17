import * as Yup from "yup";

export const Schema = Yup.object().shape({
  username: Yup.string().required("Usesrname is required"),
  email: Yup.string().email(),
  password: Yup.string()
    .min(8, "Password must have 8 or more than 8 characters")
    .required("Password is required"),
});
