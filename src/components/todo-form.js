import { useRef } from 'react';
import { useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { addTodo } from '../actions/todos';

const TodosForm = ()=>{
    const inputRef = useRef(null);
    const formRef = useRef(null);
    const dispatch = useDispatch();
    const handleSubmit = (e)=>{     //! e -> event ekan
          e.preventDefault();       //! e ga prevent default berilishi, onSubmitga har doim qanaqadur event kiradi.
        dispatch(addTodo({
            title: inputRef.current.value,
            id: uuidv4(),
            isDone: false
        }));   
        formRef.current.reset();
     }
        return(
        <div className="card-body">
            <form className="mb-3 d-flex justify-content-between align-items-center" onSubmit={handleSubmit} ref={formRef}>
                <input 
                    ref={inputRef}
                    type="text" 
                    className="form-control ml-3" 
                    id="exampleFormControlInput1" 
                    placeholder="e.g. buy smth"
                />
                <button className="btn btn-success">Add</button>
            </form>
        </div>
    );
}

export default TodosForm;