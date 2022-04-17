import { createEvent } from "effector";

const findTodos = createEvent("findTodos");
const findTodo = createEvent("findTodo");
const createTodo = createEvent("createTodo");
const updateTodo = createEvent("updateTodo");
const deleteTodo = createEvent("deleteTodo");

export { findTodos, findTodo, createTodo, updateTodo, deleteTodo };
