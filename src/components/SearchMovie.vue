<template>

  <v-container v-if="loading">
    <div class="text-xs-center">
      <v-progress-circular
        indeterminate
        :size="150"
        :width="8"
        color="green accent-3">
      </v-progress-circular>
    </div>
  </v-container>

  <v-container v-else grid-list-xs>
    <v-layout wrap>
      <v-flex xs6
        v-for="(item, index) in movieResponse"
        :key="index"
        mb-2>
        <v-card>
    <v-img
      class="ml-12"
            max-height="550px"
            max-width="300px"
      :src="item.Poster"
    >
    </v-img>

    <v-card-subtitle class="pb-0">{{ singleMovie.Plot}}</v-card-subtitle>

    <v-card-text class="text--primary">
              <h2>{{item.Title}}</h2>
              <div>Year: {{item.Year}}</div>
              <div>Type: {{item.Type}}</div>
              <div>IMDB-id: {{item.imdbID}}</div>
    </v-card-text>

 <v-rating
      v-model="rating"
      background-color="orange lighten-3"
      color="orange"
      small
    ></v-rating>
          <v-card-actions>
            <v-btn round
              color="green accent-3"
              @click="singleMovie(item.imdbID)"
              >View</v-btn>
          </v-card-actions>
  </v-card>
      </v-flex>
  </v-layout>
  </v-container>
</template>

<script>
import axios from 'axios'
export default {
  props: ['name'],
  data () {
    return {
      movieResponse: [],
      loading: true,
            rating: 0,
    }
  },
  methods: {
    singleMovie (id) {
      this.$router.push('/movie/' + id)
    },
    fetchResult (value) {
      const url = 'http://www.omdbapi.com/?apikey=e1fc07da&Content-Type=application/json' + '&s=' + value
      axios
        .get(url)
        .then(response => {
          this.movieResponse = response.data.Search
          this.loading = false
        })
        .catch(error => {
          console.log(error)
        })
    }
  },
  mounted () {
    this.fetchResult(this.name)
  },
  watch: {
    name (value) {
      this.fetchResult(value)
    }
  }
}
</script>

<style lang="stylus" scoped>
  .v-progress-circular
    margin: 1rem
</style>