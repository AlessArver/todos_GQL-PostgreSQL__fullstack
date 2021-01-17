import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

import { config } from "../configs";
import { User } from "../db/models";

export const getUsers = async () => {
  const users = await User.findAll();
  console.log("users", users);
  return users;
};

export const getUser = async (id: any) => {
  const user = await User.findOne({ where: { id } });
  console.log("user", user);
};

export const createUser = async (
  username: string,
  email: string,
  password: string
) => {
  const user = User.findOne({ where: { email } });

  user && { message: "User with this email already exists" };

  const salt = await bcrypt.genSalt(10);
  const hash = await bcrypt.hash(password, salt);

  const newUser = await User.create({ username, email, password: hash });
  newUser.save();

  return { message: "You are registered" };
};

export const login = async (email: string, password: string, ctx: any) => {
  const user: any = await User.findOne({ where: { email } });

  if (!user) {
    return { message: "User with this email isn't exists" };
  }

  const isMatch = await bcrypt.compare(password, user.password);
  console.log(isMatch);

  if (isMatch) {
    const payload = {
      id: user.id,
      email: user.email,
    };

    const token = jwt.sign(payload, config.secret, { expiresIn: "7d" });
    console.log("token", token);
    await ctx.cookies.set("authToken", token);
    console.log(ctx.cookies.get("authToken"));
    return { token, message: "You are logged in" };
  }
};

export const me = async (ctx: any) => {
  const token = ctx.cookies.get("authToken");
  console.log(token);
  if (!token) {
    return {
      message: "You need to login",
    };
  }

  const authData: any = jwt.verify(token, config.secret);
  console.log(authData);
  const user = await User.findOne({ where: { id: authData.id } });

  return { token, user };
};

export const updateUserName = async (id: number, name: string) => {
  const user = await User.update({ name }, { where: { id } });
  console.log("user", user);
};

export const updateUserEmail = async (id: number, email: string) => {
  const user = await User.update({ email }, { where: { id } });
  console.log("user", user);
};

export const updateUserPassword = async (id: number, password: string) => {
  const user = await User.update({ password }, { where: { id } });
  console.log(user);
  console.log("user", user);
};

export const removeUser = async (id: number) => {
  const user = await User.destroy({ where: { id } });
  console.log("user", user);
};
