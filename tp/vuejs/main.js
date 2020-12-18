Vue.component("todo-item", {
  template:
    '<li><input type="checkbox" v-bind:checked="todo.completed"/> {{todo.title}}</li>',
  props: ["todo"],
});

var app = new Vue({
  el: "#app",
  data: {
    message: "Vous avez affiché cette page le " + new Date().toLocaleString(),
    seen: true,
    todos: [
      { title: "Apprendre JavaScript", completed: true },
      { title: "Apprendre Vue", completed: false },
      { title: "Créer quelque chose de génial", completed: true },
    ],
  },
  methods: {
    reverseMessage: function () {
      this.message = this.message.split("").reverse().join("");
    },
  },
});
