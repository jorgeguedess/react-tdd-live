import { screen, render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import Todos from "./todos.component";

describe("Todos", () => {
  it("should show my tasks message", () => {
    render(<Todos />);

    expect(screen.getByText("Minhas tarefas")).toBeInTheDocument();
  });

  it("should show task input", () => {
    render(<Todos />);

    const input = screen.getByPlaceholderText("Digite o nome da tarefa");

    expect(input).toBeInTheDocument();
  });

  it("should show add button", () => {
    render(<Todos />);

    expect(screen.queryByLabelText("Adicionar tarefa")).toBeInTheDocument();
  });

  it("should add task on add click", async () => {
    render(<Todos />);

    const input = screen.getByPlaceholderText("Digite o nome da tarefa");

    const taskTitle = "Nova tarefa";

    await userEvent.type(input, taskTitle);

    screen.getByDisplayValue(taskTitle);

    const addButton = screen.getByLabelText("Adicionar tarefa");

    await userEvent.click(addButton);

    screen.getByPlaceholderText("Digite o nome da tarefa");

    expect(screen.queryAllByText(taskTitle)).toHaveLength(1);
  });
});
