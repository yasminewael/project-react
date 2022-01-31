
import {createStore} from "redux";
//action
const ADD_TODO = "ADD_TODO";
export const addTodoAction = (payload) => {
  return {
    type: ADD_TODO,
    payload
  };
};
//state
const initialState =  {
  todos : []
};
//reducer
 const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      return { ...state, todos: [...state.todos, action.payload] };
    default:
      return state;
  }
};

export const store = createStore(todoReducer)