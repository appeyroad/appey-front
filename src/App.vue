<template>
  <div id="app">
    <TodoInput @submit="addItem" />
    <TodoList class="list" :items="items" />
  </div>
</template>

<script>
import TodoList from './components/TodoList.vue'
import TodoInput from './components/TodoInput.vue'
export default {
  name: 'app',
  data () {
    return {
      items: []
    }
  },
  methods: {
    addItem (content) {
      this.items.push({
        content,
        done: false,
      })
    }
  },
  components: {
    TodoInput,
    TodoList
  }
}
</script>

<style>
html,
body,
#app {
  padding: 0;
  margin: 0;
  height: 100%;
  width: 100%;
}
#app {
  display: flex;
  align-items: center;
  flex-direction: column;
}
.list {
  max-width: 80%;
}
</style>