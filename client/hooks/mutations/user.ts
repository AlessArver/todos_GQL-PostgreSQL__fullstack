import { useMutation } from "@apollo/react-hooks";

import { REGISTER, LOGIN } from "../../apollo/mutations/user";

export const useRegister = () => {
  const [_register, { loading, error, data }] = useMutation(REGISTER);

  const register = (email: string, password: string, username?: string) => {
    _register({ variables: { user: { username, email, password } } });
  };

  return { register, loading, error, data };
};

export const useLogin = () => {
  const [_login, { loading, error, data }] = useMutation(LOGIN);

  const login = (email: string, password: string) => {
    _login({ variables: { email, password } });
  };

  return { login, loading, error, data };
};
