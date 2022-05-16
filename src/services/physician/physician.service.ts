import { PhysicianModel } from "~/data/models";
import { Api } from "~/libs/api";
import { db } from "~/mocks/database";
import { seeds } from "~/mocks/seeds";

const API_PATH = "/physicians";

seeds();

const findAll = async (params?: object) => {
  // const { data } = await Api.get<PhysicianModel[]>(API_PATH, { params });
  // console.log(data);

  return db.physician.getAll();
};

const find = async (id?: string, params?: object) => {
  const { data } = await Api.get<PhysicianModel>(`${API_PATH}/${id}`, {
    params,
  });
  return data;
};

const create = async (body?: PhysicianModel) => {
  const { data } = await Api.post<PhysicianModel>(API_PATH, body);
  return data;
};

const update = async (body?: PhysicianModel, id?: string) => {
  await Api.put(`${API_PATH}/${id}`, body);
};

const remove = async (id?: string) => {
  await Api.delete(`${API_PATH}/${id}`);
};

const PhysicianService = {
  findAll,
  find,
  create,
  update,
  remove,
};

export { PhysicianService };
