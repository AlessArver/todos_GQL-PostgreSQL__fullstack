import { FC } from "react";

import s from "./index.module.sass";

type InputProps = {
  type: string;
  placeholder: string;
  name: string;
  value: string;
  onChange?: (e: any) => void;
  onBlur?: () => void;
};

export const Input: FC<InputProps> = ({
  type,
  placeholder,
  name,
  value,
  onChange,
  onBlur,
}) => (
  <input
    className={s.input}
    type={type}
    name={name}
    value={value}
    placeholder={placeholder}
    onChange={onChange}
    onBlur={onBlur}
  />
);
