import s from "./index.module.sass";

import { MainLayout } from "layouts/main";
import { Card, LoginForm } from "components";

const Login = () => {
  return (
    <MainLayout title="Register | Todos">
      <div className={s.wrapper}>
        <Card>
          <div>Login</div>
          <LoginForm />
        </Card>
      </div>
    </MainLayout>
  );
};
export default Login;
