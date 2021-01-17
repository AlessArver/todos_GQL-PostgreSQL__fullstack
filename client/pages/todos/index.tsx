import Head from "next/head";

import { MainLayout } from "layouts/main";
import { Todo } from "../../components";

export default () => {
  return (
    <MainLayout title="Todos">
      <h1>Todos</h1>
      <Todo title="Very cool todo!" body="This text about . . ." />
    </MainLayout>
  );
};
