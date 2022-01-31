import { useState } from "react";

const TodoForm = ({ addTodo }) => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const handleSubmission = (e) => {
    e.preventDefault();
    addTodo({ title, content });
    setTitle("");
    setContent("");
  };
const onTitleTyping = (e) => {
  console.log(e.target.value);
  setTitle(e.target.value)
}
const onContentTyping = (e) => {
  console.log(e.target.value)
  setContent(e.target.value)
}
  return (
    <div>
      <h1 className="page-title mt-5 mx-5">Todo List</h1>
      <form className="mt-5" onSubmit={handleSubmission}>
        <div className="input-container ml-5">
        <label className="todo-title ">Title:</label>
        <input
        className=""
          type="text"
          name="title"
          value={title}
          onChange= {onTitleTyping}
        />
        
        

        <label className="todo-title ml-5">Content:</label>
        <input
          name="content"
          value={content}
          onChange={onContentTyping}
        ></input>
        </div>
        <br />
        <button className="my-4 btn-sm py-3 px-4 " type="submit">
          Add Todo
        </button>
      </form>
    </div>
  );
};

export default TodoForm;