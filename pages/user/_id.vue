<template>
    <div>
        <!-- <component :is="componentInstance"/> -->
        UserID: {{id}}
        <br>
        Hello, {{user.name}}!!
    </div>
</template>

<script lang="ts">
import {
  Component,
  Vue
} from "nuxt-property-decorator"
import VueRouter, {Route} from 'vue-router'
import axios from 'axios'

import { State } from "vuex-class"
import apiService from '~/api/api.service'

@Component({
    computed: {
        // componentInstance: function() {
        //     return () => 
        //         import(`../../modules/${dir}/components/user.vue`)
        // }
    },
    data: function() {
        return {
            id: '',
            user: {}
        }
    }
})

export default class MyPage extends Vue {
    beforeMount() {
        console.log(this.$store.state.user)
        this.$data.id = this.$route.params.id
        // this.$data.user = this.$store.state.user
        apiService.getUserById(this.$route.params.id).then(user => {
            console.log('[getUserById]: ', user)
            this.$data.user = user[0]
        })
    }
}
</script>


