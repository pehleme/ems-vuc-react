import { fetchFindTodos } from "~/components";
import { createEffect, createStore, sample } from "effector";

import { findTodos } from "./todoEvents";
import { TodoState } from "./todoState";

export const $todoStore = createStore<TodoState>({}).on(findTodos, (state) => ({
  ...state,
}));

// const fetchUserCommentsFx = createEffect<(x: TodoState) => void>((x) => {
//   console.log(x);
// });

// sample({
//   clock: findTodos,
//   source: $todoStore,
//   target: fetchUserCommentsFx,
// });

// console.log(fetchUserCommentsFx.doneData);
