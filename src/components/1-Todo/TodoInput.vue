<template>
  <div class="input-root">
    <input
      v-model="input"
      :placeholder="placeholder"
      @keydown.enter="submit"
    />
    <button @click="submit">+</button>
  </div>
</template>

<script>
export default {
  data () {
    return {
      input: '',
      placeholder: '^~^'
    }
  },
  
  methods: {
    submit () {
      this.$emit('submit', this.input)
      this.clear()
    },
    clear () {
      this.input = ''
    }
  }
}
</script>

<style scoped>
.input-root {
  margin: 2rem;
}
* {
  font-size: 1.2rem;
}
</style>