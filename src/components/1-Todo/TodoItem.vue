<template>
  <div class="item-root">
    <input type="checkbox" v-model="item.done" />
    <span
      class="content"
      :class="{ done: item.done }"
      :contentEditable="editable"
      @mouseover="editable = true"
      @keydown.enter.prevent="editable = false"
      @focusout="editable = false"
    >{{ item.content }}</span>
    <span class="destroy" @click="destroy">X</span>
  </div>
</template>

<script>
export default {
  props: {
    item: Object
  },
  data () {
    return {
      editable: false
    }
  },
  
  methods: {
    destroy () {
      this.$emit('destroy')
    }
  }
}
</script>

<style scoped>
.item-root {
  border: 1px solid black;
  margin: 0.5rem;
  padding: 1rem;
}
.done.content {
  text-decoration-line: line-through;
}
.content {
  outline: none;
}
.destroy {
  font-family: 'Courier New', Courier, monospace;
  float: right;
  cursor: pointer;
  user-select: none;
}
</style>