import { makeServer } from "~mocks";
import axios from "axios";
import { Response, Server } from "miragejs";
import { beforeEach, describe, it } from "vitest";

import { TodoService } from "./todo-service";

describe("Todo service", () => {
  let server: Server;

  beforeEach(() => {
    server = makeServer();

    return () => {
      server.shutdown();
    };
  });

  describe("find all", () => {
    it("should handle response properly", async () => {
      const todos = await TodoService.findAll();
      expect(todos.length).not.toEqual(0);
    });

    it("should handle errors properly", async () => {
      server.get("/api/todos", () => new Response(500));

      try {
        await TodoService.findAll();
      } catch (e) {
        if (axios.isAxiosError(e)) {
          expect(e.message).toBeDefined();
          expect(e.message).toEqual("Request failed with status code 500");
        }
      }
    });
  });

  describe("find", () => {
    it("should handle response properly", async () => {
      const [{ id }] = await TodoService.findAll();
      const todo = await TodoService.find(id);
      expect(todo.id).toEqual(id);
    });

    it("should handle errors properly", async () => {
      server.get("/api/todos:id", () => new Response(500));

      try {
        await TodoService.find();
      } catch (e) {
        if (axios.isAxiosError(e)) {
          expect(e.message).toBeDefined();
          expect(e.message).toEqual("Request failed with status code 500");
        }
      }
    });
  });

  describe("create", () => {
    it("should handle response properly", async () => {
      const { id } = await TodoService.create({ title: "Title" });
      const { title } = await TodoService.find(id);
      expect(title).toEqual("Title");
    });

    it("should handle errors properly", async () => {
      server.post("/api/todos:id", () => new Response(500));

      try {
        await TodoService.find();
      } catch (e) {
        if (axios.isAxiosError(e)) {
          expect(e.message).toBeDefined();
          expect(e.message).toEqual("Request failed with status code 500");
        }
      }
    });
  });

  describe("update", () => {
    it("should handle response properly", async () => {
      const [findTodo] = await TodoService.findAll();
      await TodoService.update({ ...findTodo, title: "Title" }, findTodo.id);
      const { title } = await TodoService.find(findTodo.id);
      expect(title).toEqual("Title");
    });

    it("should handle errors properly", async () => {
      server.put("/api/todos:id", () => new Response(500));

      try {
        await TodoService.find();
      } catch (e) {
        if (axios.isAxiosError(e)) {
          expect(e.message).toBeDefined();
          expect(e.message).toEqual("Request failed with status code 500");
        }
      }
    });
  });

  describe("delete", () => {
    it("should handle response properly", async () => {
      const [{ id }] = await TodoService.findAll();
      const todo = await TodoService.find(id);
      expect(todo.id).toEqual(id);
    });

    it("should handle errors properly", async () => {
      server.get("/api/todos:id", () => new Response(500));

      try {
        await TodoService.find();
      } catch (e) {
        if (axios.isAxiosError(e)) {
          expect(e.message).toBeDefined();
          expect(e.message).toEqual("Request failed with status code 500");
        }
      }
    });
  });
});
