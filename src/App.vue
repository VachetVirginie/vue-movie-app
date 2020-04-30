<template>
  <v-app>
    <v-toolbar app v-if="user.loggedIn">
      <v-toolbar-title class="headline text-uppercase">
        <router-link
        to='/Home'
        tag='span'
        style='cursor: pointer'>
         Hello {{user.data.displayName}}!
        </router-link>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-flex xs12 sm6 md3>
        <v-text-field
          label='Movie Name'
          v-model='searchName'
          >
        </v-text-field>
        </v-flex>
      <v-btn
      class="ml-2"
      color="#34558b"
        flat
        :disabled="!dataAvailable"
        @click="searchMovie"
      >
       <span class="mr-2">Search</span>
      </v-btn>
        <nav class="navbar navbar-expand-md navbar-light navbar-laravel">
    <div class="container">
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse d-flex ml-12 mb-4" id="navbarSupportedContent">
          <template v-if="user.loggedIn">
            <Menu> </Menu>
          </template>
          <template v-else>
            <li class="nav-item">
              <router-link to="/" class="nav-link">Login</router-link>
            </li>
            <li class="nav-item">
              <router-link to="register" class="nav-link">Register</router-link>
            </li>
          </template>
      </div>
    </div>
  </nav>
    </v-toolbar>

    <v-content>
    <router-view></router-view>
    </v-content>
  </v-app>
</template>

<script>
import { mapGetters } from "vuex";
import Menu from '@/components/Menu'

export default {
  name: 'App',
  components: {
    Menu
  },
  data () {
    return {
      searchName: '',
    }
  },
  methods: {
    searchMovie () {
      this.$router.push('/search/' + this.searchName)
      this.searchName = ''
    }
  },
  computed: {
    dataAvailable () {
      return this.searchName !== null && this.searchName !== ''
    },
        ...mapGetters({
// map `this.user` to `this.$store.getters.user`
      user: "user"
    })
  }
}
</script>

<style scoped>
.v-toolbar {
    flex: none !important;
}
button {
  color: white !important
}
</style>