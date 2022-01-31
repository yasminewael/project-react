import {useState} from "react";
import {useSelector, useDispatch} from "react-redux";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";
import {addTodoAction} from "../../redux/todo"
import './Todo.css';
function Todo() {


const todoState = useSelector(state => state.todos)
const dispatch = useDispatch()
console.log(todoState)
  const addTodo = (task) => {
      dispatch(addTodoAction(task))
  };

  const deleteTodo = (index) => {
  }

  return (
    
    <div className="text-center py-2 todo-wrapper container">
      <TodoForm addTodo={addTodo} />
      <TodoList todos={todoState} deleteTodo={deleteTodo} />
    </div>
  );
}
export default Todo;