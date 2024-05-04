import {} from "axios"
import axios from "../lib/axios";
import { TodoModel } from "../models/redux-models";

const TodoService = {
  async getAllTodos() {
    const response = await axios({
      method: "GET",
      url: "/api/todos",
    });
    return response.data;
  },
  async getParticularTodo(todo_id: number) {
    const response = await axios({
      method: "GET",
      url: "/api/todos",
    });
    return response.data.filter((todo: TodoModel) => todo.id === todo_id)[0];
  },
  async testPost() {
    const response = await axios({
      method: "POST",
      url: "/api/posts",
      data: [
        {
          id: 1,
          title: "test",
          body: "test",
          userId: 1,
        },
        {
          id: 2,
          title: "test",
          body: "test",
          userId: 2,
        },
      ],
    });
    return response.data;
  },
};

export default TodoService;
