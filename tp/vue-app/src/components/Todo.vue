<template>
  <div>
    <input
      type="checkbox"
      v-bind:checked="completed"
    />
    {{title}}
  </div>
</template>

<script>
export default {
  name: 'Todo',
  // Définir les propriétés: soit en donnant sulement leur nom
  // props: ['title', 'completed'],

  // Soit en donnant aussi leur type
  props: {
    title: String,
    completed: Boolean
  }

}
</script>