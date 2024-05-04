import { Fragment, useEffect } from "react";
import { useParams } from "react-router-dom";
import LoadingPage from "../components/Loading/LoadingPage";
import TodoItem from "../components/Todo/TodoItem";
import { useAppDispatch, useAppSelector } from "../hooks/redux-hooks";
import { fetchParticularTodo } from "../store/todo";
import { TodoSelector } from './../store/todo';

export default function TodoDetail() {
    const dispatch = useAppDispatch();
    const todos = useAppSelector(TodoSelector);
    const { todoId } = useParams();
    useEffect(() => {
        async function getTodoDetail() {
            dispatch(fetchParticularTodo(Number(todoId)))
        }
        getTodoDetail()
    }, [])
    return (
        <Fragment>
            <LoadingPage loading={todos.loading} />
            {todos.todoDetail ? <TodoItem data={todos.todoDetail} /> : <></>}
        </Fragment>

    )
}