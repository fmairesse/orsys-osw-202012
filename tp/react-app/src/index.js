import React from "react";
import { render } from "react-dom";
import Hello from "./Hello";
import { StateComponent } from "./StateComponent";
import "./index.css";
import { TodoComponent } from "./TodoComponent";
import { HashRouter as Router, Route, NavLink } from "react-router-dom";

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

function App() {
  return (
    <Router>
      <div>
        <ul>
          <li>
            <NavLink to="/" activeClassName="activeLink" exact>
              Todos
            </NavLink>
          </li>
          <li>
            <NavLink to="/hello" activeClassName="activeLink">
              Hello
            </NavLink>
          </li>
        </ul>
        <div>
          <Route path="/" exact component={TodoList} />
          <Route path="/hello" component={Hello} />
        </div>
      </div>
    </Router>
  );
}

let name = "toto";
render(<App />, document.getElementById("root"));
