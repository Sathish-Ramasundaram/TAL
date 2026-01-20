import React from "react";

type TodoManagerProps = {
  render: (props: {
    todos: string[];
    addTodo: (todo: string) => void;
  }) => React.ReactNode;
};

type TodoManagerState = {
  todos: string[];
};

class TodoManager extends React.Component<
  TodoManagerProps,
  TodoManagerState
> {
  state: TodoManagerState = {
    todos: [],
  };

  addTodo = (todo: string) => {
    if (todo.trim() === "") return;

    this.setState({
      todos: [...this.state.todos, todo],
    });
  };

  render() {
    return this.props.render({
      todos: this.state.todos,
      addTodo: this.addTodo,
    });
  }
}

export default TodoManager;
