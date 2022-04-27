import { TodoModel } from "~/data/models";
import { Api } from "~/libs/api";

const API_PATH = "/todos";

const findAll = async (params?: object) => {
  const { data } = await Api.get<TodoModel[]>(API_PATH, { params });
  return data;
};

const find = async (id?: string, params?: object) => {
  const { data } = await Api.get<TodoModel>(`${API_PATH}/${id}`, {
    params,
  });
  return data;
};

const create = async (body?: TodoModel) => {
  const { data } = await Api.post<TodoModel>(API_PATH, body);
  return data;
};

const update = async (body?: TodoModel, id?: string) => {
  await Api.put(`${API_PATH}/${id}`, body);
};

const remove = async (id?: string) => {
  await Api.delete(`${API_PATH}/${id}`);
};

const TodoService = {
  findAll,
  find,
  create,
  update,
  remove,
};

export { TodoService };
