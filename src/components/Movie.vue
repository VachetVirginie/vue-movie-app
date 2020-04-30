<template>

  <v-container v-if="loading">
    <div class="text-center">
        <v-progress-circular
          indeterminate
          :size="50"
          :width="8"
          color="#34558b">
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
            max-height="550px"
            max-width="300px"
      :src="singleMovie.Poster"
    >
      <v-card-title></v-card-title>
    </v-img>

     <h1 class="ml-4 pt-2">{{singleMovie.Title}}</h1>
     <h2>{{singleMovie.Year}}</h2>
           <v-rating
        v-model="rating"
        length="10"
        readonly
      >
        <template v-slot:item="props">
          <v-icon
            :color="props.isFilled ? '#34558b' : ''"
            v-text="`mdi-numeric-${props.index}-box`"
          ></v-icon>
        </template>
      </v-rating>
    <v-divider></v-divider>

    <v-card-subtitle class="pb-0">{{ singleMovie.Plot}}</v-card-subtitle>

    <v-card-text class="text--primary">
      
      <div>{{singleMovie.Actors}}</div>

      <div>{{singleMovie.Awards}}</div>

      <div> {{singleMovie.Genre}} </div>

      <div> Moyenne des notes:{{ singleMovie.Ratings[0].Value }} </div>
    <v-card-actions>

    </v-card-actions>

    </v-card-text>

          <v-card-actions class="center">
            <v-btn flat color="#34558b" @click="back">back</v-btn>
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
      rating:9
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
    },

  }
}
</script>

<style lang="stylus" scoped>
  .v-progress-circular
    margin: 1rem
  .v-btn
    color: white !important
</style>