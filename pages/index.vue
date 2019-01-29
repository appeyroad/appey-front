<template>
  <section>
    <h1 class="header">Nuxt TypeScript Starter</h1>
    <div class="body">
      <!-- <Card v-for="person in people" :key="person.id" :person="person"
      ></Card> -->
      <button class="users" @click="getUsers">get Users!</button>
      <br><br>
      <div v-for="user in users" :key="user._id">
        <div>name: {{user.name}}</div>
        <div>_id: {{user._id}}</div>
        <br>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import {
  Component,
  Vue
} from "nuxt-property-decorator"
import { State } from "vuex-class"
// import { Person } from "~/types";
// import Card from "~/components/Card.vue"
import apiService from '../api/api.service'

@Component({
  components: {
    // Card
  },
  data: function() {
    return {
      users: []
    }
  }
})
export default class extends Vue {
  // @State people: Person
  getUsers() {
    apiService.getUsers().then(res => {
      console.log(res);
      this.$data.users = res;
    })
  }
}
</script>

<style scoped>
.header {
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
}

.body {
  font-size: 1.8rem;
  line-height: 1.618;
  max-width: 38em;
  margin: auto;
  color: #4a4a4a;
  background-color: #f9f9f9;
  padding: 13px;
}

.users {
  background-color: royalblue;
  border: none;
  color: white;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin: 4px 2px;
  cursor: pointer;
}
</style>
