<template>
  <v-app>
    <v-toolbar app>
      <v-toolbar-title class="headline text-uppercase">
        <router-link
        to='/'
        tag='span'
        style='cursor: pointer'>
         Which movie ?
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
        flat
        :disabled="!dataAvailable"
        @click="searchMovie"
      >
       <span class="mr-2">Search</span>
      </v-btn>
        <v-switch
        class="ml-2"
        v-model="$vuetify.theme.dark"
        hide-details
        inset
        label="Mode"
      ></v-switch>
    </v-toolbar>

    <v-content>
    <router-view></router-view>
    </v-content>
  </v-app>
</template>

<script>
export default {
  name: 'App',
  components: {
  },
  data () {
    return {
      searchName: ''
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
    }
  }
}
</script>

<style scoped>
.v-toolbar {
    flex: none !important;
}
</style>