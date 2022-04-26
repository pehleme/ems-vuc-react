import { ApiClient } from "~/clients/api";
import { TodoModel } from "~/data/models";

const API_PATH = "/todos";

const findAll = async (params?: object) => {
  const { data } = await ApiClient.get<TodoModel[]>(API_PATH, { params });
  return data;
};

const find = async (id?: string, params?: object) => {
  const { data } = await ApiClient.get<TodoModel>(`${API_PATH}/${id}`, {
    params,
  });
  return data;
};

const create = async (body?: TodoModel) => {
  await ApiClient.post(`${API_PATH}`, body);
};

const update = async (body?: TodoModel, id?: string) => {
  await ApiClient.put(`${API_PATH}/${id}`, body);
};

const remove = async (id?: string) => {
  await ApiClient.delete(`${API_PATH}/${id}`);
};

const TodoService = {
  findAll,
  find,
  create,
  update,
  remove,
};

export { TodoService };
