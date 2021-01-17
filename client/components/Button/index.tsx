import React, { FC } from "react";

import s from "./index.module.sass";

type Props = {
  children: React.ReactNode;
  type?: "button" | "submit" | "reset";
};

export const Button: FC<Props> = ({ children, type }) => (
  <button className={s.button} type={type}>
    {children}
  </button>
);
