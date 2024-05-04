import { AnyAction, createSlice, PayloadAction, ThunkAction } from "@reduxjs/toolkit";
import { RootState } from ".";
import TodoService from "../service/TodoService";
import { TodoModel } from './../models/redux-models';
import { axiosCatch } from './../utils/axiosCatch';

type UsersInitialStatus = {
    loading: boolean,
    todos: TodoModel[]
    todoDetail: TodoModel | null
}

export const initialState: UsersInitialStatus = {
    loading: false,
    todos: [],
    todoDetail: null
}

const todoSlice = createSlice({
    name: "todo",
    initialState: initialState,
    reducers: {
        getTodosStart: (state, action) => {
            state.todoDetail = null
            state.loading = true
        },
        getTodosSuccess: (state, action: PayloadAction<TodoModel[]>) => {
            state.loading = false
            state.todos = action.payload
        },
        getTodoSuccess: (state, action: PayloadAction<TodoModel>) => {
            state.loading = false
            state.todoDetail = action.payload
        },
        getTodosError: (state, action) => {
            state.loading = false
            state.todos = []
        }
    },
})

export const todoActions = todoSlice.actions

export const fetchTodos = (): ThunkAction<void, RootState, unknown, AnyAction> => {
    return async (dispatch, getState) => {
        try {
            //if (getState().todo.todos.length === 0) {
            dispatch(todoActions.getTodosStart(getState()))
            const response: TodoModel[] = await TodoService.getAllTodos();
            dispatch(todoActions.getTodosSuccess(response))
            //}
        } catch (error : any) {
            dispatch(todoActions.getTodosError(axiosCatch(error)))
        }

    }
}

export const fetchParticularTodo = (todoId: number): ThunkAction<void, RootState, unknown, AnyAction> => {
    return async (dispatch, getState) => {
        try {
            dispatch(todoActions.getTodosStart(getState()))
            const response: TodoModel = await TodoService.getParticularTodo(todoId);
            dispatch(todoActions.getTodoSuccess(response))
        } catch (error : any) {
            dispatch(todoActions.getTodosError(axiosCatch(error)))
        }
    }
}

export const TodoSelector = (state: RootState) => state.todo

export default todoSlice;