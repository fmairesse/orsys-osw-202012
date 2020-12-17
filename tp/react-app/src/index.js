import React from "react";
import { render } from "react-dom";
import Hello from "./Hello";
import { StateComponent } from "./StateComponent";
import "./index.css";
import { TodoComponent } from "./TodoComponent";

class TodoList extends React.Component {
  state = {
    todos: [
      {
        userId: 1,
        id: 1,
        title: "delectus aut autem",
        completed: false,
      },
      {
        userId: 1,
        id: 2,
        title: "quis ut nam facilis et officia qui",
        completed: true,
      },
      {
        userId: 1,
        id: 3,
        title: "fugiat veniam minus",
        completed: false,
      },
    ],
  };
  render() {
    return (
      <div>
        {this.state.todos.reduce(
          (acc, todo) => Number(todo.completed) + acc,
          0
        )}{" "}
        completed
        {this.state.todos.map((t) => (
          <TodoComponent
            key={t.id}
            completed={t.completed}
            title={t.title}
            onCompletedChange={(completed) =>
              this.handleCompletedChange(t, completed)
            }
          />
        ))}
      </div>
    );
  }

  handleCompletedChange = (todo, completed) => {
    todo.completed = completed;
    this.setState(this.state);
  };
}
let name = "toto";
render(
  <div>
    <Hello name={name} />
    <StateComponent />
    <TodoList />
  </div>,
  document.getElementById("root")
);
