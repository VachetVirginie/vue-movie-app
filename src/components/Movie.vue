<template>

  <v-container v-if="loading">
    <div class="text-center">
        <v-progress-circular
          indeterminate
          :size="50"
          :width="8"
          color="green accent-3">
        </v-progress-circular>
      </div>
  </v-container>

  <v-container v-else>
    <app-navigation></app-navigation>
     <v-card
    class="mx-auto"
    max-width="400"
  >
    <v-img
      class="black--text align-left ml-12"
            max-height="550px"
            max-width="300px"
      :src="singleMovie.Poster"
    >
      <v-card-title></v-card-title>
    </v-img>

     <h1 class="ml-4 pt-2">{{singleMovie.Title}}-{{singleMovie.Year}}</h1>

    <v-card-subtitle class="pb-0">{{ singleMovie.Plot}}</v-card-subtitle>

    <v-card-text class="text--primary">
      
      <div>{{singleMovie.Actors}}</div>

      <div>{{singleMovie.Awards}}</div>

      <div> {{singleMovie.Genre}} </div>
    </v-card-text>

          <v-card-actions class="center">
            <v-btn flat color="green accent-3" @click="back">back</v-btn>
          </v-card-actions>
  </v-card>
  </v-container>
</template>

<script>
import axios from 'axios'
export default {
  props: ['id'],
  data () {
    return {
      singleMovie: '',
      dialog: false,
      loading: true,
      ratings: ''
    }
  },
  mounted () {
    const url = 'http://www.omdbapi.com/?apikey=e1fc07da&Content-Type=application/json' + '&i=' + this.id
    axios
      .get(url)
      .then(response => {
        this.singleMovie = response.data
        this.loading = false
      })
      .catch(error => {
        console.log(error)
      })
  },
  methods: {
    back () {
      history.back()
    }
  }
}
</script>

<style lang="stylus" scoped>
  .v-progress-circular
    margin: 1rem
</style>