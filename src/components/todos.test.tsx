import { screen, render } from "@testing-library/react";

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
});
