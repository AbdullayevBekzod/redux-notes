import {useSelector} from 'react-redux';
import TodoItem from './todo-item';
const TodoItems = ()=>
{
    const todos = useSelector(state=> state.todos);
    // console.log(todos);
    return(
        <ul className="list-group list-gruop-flush">
            {
               todos.length > 0 ? todos.map(item =>(
                    <TodoItem title={item.title} key={item.id} id={item.id} isDone={item.isDone} />
                )) : (
                    <h4>Todos not created yet</h4>
                )
            }
        </ul>
);
}

export default TodoItems;