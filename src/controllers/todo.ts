import { TodoModel } from './../db/models/todo';

export const getTodos = async () => {
    const todos = await TodoModel.findAll();
    console.log('todos', todos)
}

export const getTodo = async (id: any) => {
    const todo = await TodoModel.findOne({ where: { id }})
    console.log('todo', todo)
}

export const createTodo = async (title: string, body: string) => {
    const todo = await TodoModel.create({ title, body })
    console.log('todo', todo)
}

export const updateTodoTitlte = async (id: any, title: string) => {
    const todo = await TodoModel.update({ title }, { where: { id }})
    console.log('todo', todo)
}

export const updateTodoBody = async (id: any, body: string) => {
    const todo = await TodoModel.update({ body }, { where: { id }})
    console.log('todo', todo)
}

export const removeTodo = async (id: any) => {
    const todo = await TodoModel.destroy({ where: { id }})
    console.log('todo', todo)
}