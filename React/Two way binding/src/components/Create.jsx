import { nanoid } from "nanoid";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";

const Create = (props) => {
  const todos = props.todos;
  const setTodos = props.setTodos;
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const submitHandler = (data) => {
    data.id = nanoid();
    setTodos([...todos, data]);

    toast.success("Todo created")
    reset();
  };
  return (
    <div className="mb-4">
      <h1 className="text-4xl font-medium mb-4">Create Tasks</h1>
      <form
        onSubmit={handleSubmit(submitHandler)}
        className="flex flex-col items-start gap-4"
      >
        <input
          {...register("title", { required: "title can not be empty" })}
          type="text"
          placeholder="Title"
          className="border-b p-2 outline-0"
        />

        <small className="text-sm text-red-800">{errors?.title?.message}</small>

        <button className="p-2 rounded-md border-2">Create Todo</button>
      </form>
    </div>
  );
};

export default Create;
