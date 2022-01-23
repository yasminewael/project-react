const TodoList = ({ todos,deleteTodo }) => {
    const todosList =
      todos && todos.length > 0 ? (
        todos.map((todo, i) => {
          return (
            <ul  key={i}>
              <li className="todo-list d-flex ">
              <div className="text mx-auto">
                <p><span>Title:</span> {todo.title}</p>
                <p><span>Content:</span> {todo.content}</p>
              </div>
              </li>
            </ul>
          );
        })
      ) : (
        <p className="no-items h5 mx-5">no items on the list ..</p>
      );
  
    return (
      <div className="text-left">
        <h5 className="mx-5">Todos List</h5>
        {todosList}
      </div>
    );
  }

export default TodoList;