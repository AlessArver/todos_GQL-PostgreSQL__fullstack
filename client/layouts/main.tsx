import Head from "next/head";
import { FC } from "react";

import { Navbar } from "components";

type Props = {
  children: React.ReactNode;
  title?: string;
};
export const MainLayout: FC<Props> = ({ children, title }) => {
  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      <div className="main__wrapper">
        <Navbar />
        {children}
      </div>
    </>
  );
};
