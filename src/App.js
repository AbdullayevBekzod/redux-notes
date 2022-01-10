import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { initializeTodos } from './actions/todos';
import TodosHeader from './components/todos-header';
import TodosFooter from './components/todos-footer';
import TodosForm from './components/todo-form';
import TodoItems from './components/todo-items';


function App() {
  const dispatch = useDispatch();
  const todoItems = useSelector(state=>state.todos);

  useEffect(()=>{
    dispatch(initializeTodos(JSON.parse(localStorage.getItem('todos'))))
  }, []);
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 offset-md-3">
          <div className="card mt-5">
            <TodosHeader length={todoItems.length}/>
            <TodosForm />
            <TodoItems />
            <TodosFooter />
           
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
