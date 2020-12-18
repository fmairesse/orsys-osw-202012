<template>
  <div id="app">
    <HelloWorld v-bind:msg="message" />
    <Todo
      v-for="t in todos"
      v-bind:title="t.title"
      v-bind:completed="t.completed"
      v-bind:key="t.id"
    />
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import Todo from './components/Todo.vue'

export default {
  name: 'App',
  components: {
    HelloWorld,
    Todo
  },
  data () {
    return {
      message: "coucou",
      todos: []
    }
  },
  mounted () {
    fetch('https://jsonplaceholder.typicode.com/todos')
      .then(response => response.json())
      .then(todos => this.todos = todos)
  }
}
</script>

<style>
</style>
