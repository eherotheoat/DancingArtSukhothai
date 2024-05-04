import { Fragment } from "react";
import { useEffect } from "react";
import Content from "../components/layouts/Content";
import LoadingPage from "../components/Loading/LoadingPage";
import TodoItem from "../components/Todo/TodoItem";

import { useAppDispatch, useAppSelector } from "../hooks/redux-hooks";
import { fetchTodos, TodoSelector } from "../store/todo";
import { TodoModel } from "./../models/redux-models";
export default function Todos() {
  const dispatch = useAppDispatch();
  const alltodos = useAppSelector(TodoSelector);

  useEffect(() => {
    function getTodo() {
      dispatch(fetchTodos());
    }
    getTodo();
  }, []);

  return (
    <Content title="งานที่ต้องทำ">
      <Fragment>
        <LoadingPage loading={alltodos.loading} />
        {alltodos.todos.map((value: TodoModel, index: number) => (
          <TodoItem data={value} key={index} />
        ))}
      </Fragment>
    </Content>
  );
}
