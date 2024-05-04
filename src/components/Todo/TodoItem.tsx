import { Fragment } from "react";
import { useNavigate } from "react-router-dom";
import { TodoModel } from "../../models/redux-models";

export default function TodoItem(props: { data: TodoModel }) {
    let navigate = useNavigate();
    const onTodoClick = (event: React.MouseEvent<HTMLDivElement, MouseEvent>, todoId: number) => {
        event.preventDefault();
        navigate("/admin/todos/" + todoId);
    }

    return <Fragment>
        <div className="card cursor-pointer m-2 border shadow-sm pointer-events" onClick={(event) => onTodoClick(event, props.data.id)}>
            <div className="card-body text-start">
                <h2 >UserId : {props.data.userId}</h2>
                <div >Task Detail : {props.data.title}</div>
                {props.data.completed ? <button className="btn btn-success rounded-pill">
                    Completed
                </button> : <button className="btn btn-danger rounded-pill">
                    Not Completed
                </button>
                }
            </div>
        </div>
    </Fragment>
}

