import { useDispatch } from 'react-redux';
import { removeTodo, markTodoDone} from '../actions/todos';

const TodoItem = ({title, id, isDone})=>
{
    const dispatch = useDispatch();
    const handleMarkTodo = (e) =>{
      dispatch(markTodoDone(
            {
                id, 
                title,
                isDone: e.target.checked
            })
        )
    }
    return(
        <li className="list-group-item d-flex justify-content-between align-items-center">
            <div className="e">
            <input type="checkbox" className="me-2 form-check-input" value="" id="flexCheckDefault" onChange = {handleMarkTodo}/>
            <label className={`form-check-label' ${isDone ? 'text-decoration-line-through' : ''}`}>
                {title}
            </label>
            </div>
            <button className="btn btn-danger" onClick = {()=>{dispatch(removeTodo(id))}}>Remove</button>
        </li>
);
}

export default TodoItem;