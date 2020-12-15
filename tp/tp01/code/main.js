"use strict";

fetch("https://jsonplaceholder.typicode.com/todos")
  .then((response) => response.json())
  .then((todos) => {
    // Afficher les todos

    // 1. Trouver l'élement dans lequel insérer les todos
    const list = document.querySelector("#app>ul");

    // 2. Ajouter un élement dans la liste pour chaque todo
    for (const todo of todos) {
      const element = document.createElement("li");
      element.innerText = `${todo.completed ? "☑" : "☐"} ${todo.title}`;
      list.append(element);
    }

    // Afficher le nombre de todo
    const nbCompleted = todos.reduce(
      (acc, todo) => acc + Number(todo.completed),
      0
    );

    document.querySelector(
      "#app>h2"
    ).innerText = `Il y a ${nbCompleted} todos completed`;
  });
