import { toast } from "react-toastify";

const Read = (props) => {
  const todos = props.todos;
  const setTodos = props.setTodos
  const deleteHandler = (id)=>{
    const filterTodo = todos.filter((todo)=> todo.id != id)
    setTodos(filterTodo)
    toast.error("Todo deleted")
  }
  const renderTodos = todos.map((todo) => <li key={todo.id} className="bg-zinc-800 w-fit px-3 py-1 rounded-sm">{todo.title} | <span className="text-red-700 cursor-pointer" onClick={()=>deleteHandler(todo.id)}>Delete</span></li>);
  return (
    <div>
      <h1 className="text-4xl font-medium mb-4 mt-4">Pending Todos</h1>
      <ol className="list-decimal px-4 flex flex-col gap-3">{renderTodos}</ol>
    </div>
  );
};

export default Read;
