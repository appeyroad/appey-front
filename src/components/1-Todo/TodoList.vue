<template>
  <div class="list-root">
    <TodoItem
      v-for="(item, id) in (items || [])"
      :key="id"
      :item="item"
      @destroy="destroy(id)"
    />
  </div>
</template>

<script>
import TodoItem from './TodoItem.vue'
export default {
  props: {
    items: Array
  },
  
  methods: {
    destroy (i) {
      this.items.splice(i, 1)
    }
  },
  components: {
    TodoItem
  }
}
</script>

<style scoped>
.list-root {
  width: 100%;
}
</style>