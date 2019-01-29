<template>
  <div class="chatapp">
    <thread-section></thread-section>
    <message-section></message-section>
  </div>
</template>

<script>
import ThreadSection from './components/3-Chat/ThreadSection.vue'
import MessageSection from './components/3-Chat/MessageSection.vue'
export default {
  name: 'App',
  components: {
    ThreadSection,
    MessageSection
  }
}
</script>