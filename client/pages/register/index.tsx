import s from "./index.module.sass";

import { MainLayout } from "layouts/main";
import { Card, RegisterForm } from "components";

const Register = () => {
  return (
    <MainLayout title="Register | Todos">
      <div className={s.wrapper}>
        <Card>
          <div>Register</div>
          <RegisterForm />
        </Card>
      </div>
    </MainLayout>
  );
};
export default Register;
