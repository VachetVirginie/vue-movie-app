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
    <v-layout wrap>
      <v-flex xs12 mr-1 ml-1>
        <v-card>
          <v-img
            :src="singleMovie.Poster"
            aspect-ratio="2"
          ></v-img>
          <v-card-title primary-title>
            <div>
              <h2 class="headline mb-0">{{singleMovie.Title}}-{{singleMovie.Year}}</h2>
              <p>{{ singleMovie.Plot}} </p>
              <h3>Actors:</h3>{{singleMovie.Actors}}
               <h4>Awards:</h4> {{singleMovie.Awards}}
               <p>Genre: {{singleMovie.Genre}}</p>
            </div>

          </v-card-title>
          <v-card-actions>
            <v-btn flat color="green accent-3" @click="back">back</v-btn>
          </v-card-actions>
        </v-card>
      </v-flex>
    </v-layout>

    <v-layout row wrap>
      <v-flex xs12>
        <div class="text-xs-center">
      </div>
      </v-flex>
    </v-layout>
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
      this.$router.push('/')
    }
  }
}
</script>

<style lang="stylus" scoped>
  .v-progress-circular
    margin: 1rem
</style>