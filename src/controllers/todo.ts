import { Todo } from "../db/models";

export const getTodos = async () => {
  const todos = await Todo.findAll();
  console.log("todos", todos);
};

export const getTodo = async (id: any) => {
  const todo = await Todo.findOne({ where: { id } });
  console.log("todo", todo);
};

export const createTodo = async (title: string, body: string) => {
  const todo = await Todo.create({ title, body });
  console.log("todo", todo);
};

export const updateTodoTitlte = async (id: any, title: string) => {
  const todo = await Todo.update({ title }, { where: { id } });
  console.log("todo", todo);
};

export const updateTodoBody = async (id: any, body: string) => {
  const todo = await Todo.update({ body }, { where: { id } });
  console.log("todo", todo);
};

export const removeTodo = async (id: any) => {
  const todo = await Todo.destroy({ where: { id } });
  console.log("todo", todo);
};
