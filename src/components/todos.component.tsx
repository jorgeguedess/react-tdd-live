import { AiOutlinePlus } from "react-icons/ai";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { v4 as uuid } from "uuid";

import { Todo } from "../interfaces/todos";

const Todos = (): JSX.Element => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    resetField,
  } = useForm<{ title: string }>();

  const [todos, setTodos] = useState<Todo[]>([]);

  const handleAddClick = (data: { title: string }) => {
    setTodos((prev) => [
      ...prev,
      {
        id: uuid(),
        title: data.title,
        isCompleted: false,
      },
    ]);
    resetField("title");
  };

  return (
    <div className="w-screen h-screen bg-gray-950 flex items-center justify-center">
      <div className="flex flex-col items-center justify-center p-6 rounded-md bg-gray-800 gap-6">
        <h1 className="text-2xl text-gray-50">Minhas tarefas</h1>
        <div className="flex items-center gap-4">
          <input
            className="rounded-md p-3 text-gray-50 
          bg-gray-600 flex items-center justify-center"
            placeholder="Digite o nome da tarefa"
            {...register("title")}
          />
          <button
            aria-label="Adicionar tarefa"
            className="text-gray-50"
            onClick={() => handleSubmit(handleAddClick)()}
          >
            <AiOutlinePlus size={24} />
          </button>
        </div>

        {todos.map((todo) => (
          <p className="text-gray-50" key={todo.id}>
            {todo.title}
          </p>
        ))}
      </div>
    </div>
  );
};

export default Todos;
