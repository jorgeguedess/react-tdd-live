import { AiOutlinePlus } from "react-icons/ai";
const Todos = (): JSX.Element => {
  return (
    <div className="w-screen h-screen bg-gray-950 flex items-center justify-center">
      <div className="flex flex-col items-center justify-center p-6 rounded-md bg-gray-800 gap-6">
        <h1 className="text-2xl text-gray-50">Minhas tarefas</h1>
        <div className="flex items-center gap-4">
          <input
            className="rounded-md p-3 text-gray-50 
          bg-gray-600 flex items-center justify-center"
            placeholder="Digite o nome da tarefa"
          />
          <button aria-label="Adicionar tarefa" className="text-gray-50">
            <AiOutlinePlus size={24} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Todos;
