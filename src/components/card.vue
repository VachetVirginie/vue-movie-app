<template>
  <v-card
    class="mx-auto"
    max-width="400"
  >
    <v-img
      class="white--text align-end"
            max-height="550px"
            max-width="300px"
      :src="singleMovie.Poster"
    >
      <v-card-title>{{singleMovie.Title}}-{{singleMovie.Year}}</v-card-title>
    </v-img>

    <v-card-subtitle class="pb-0">{{ singleMovie.Plot}}</v-card-subtitle>

    <v-card-text class="text--primary">
      <div>{{singleMovie.Actors}}</div>

      <div>{{singleMovie.Awards}}</div>

      <div> {{singleMovie.Genre}} </div>
    </v-card-text>

          <v-card-actions>
            <v-btn flat color="green accent-3" @click="back">back</v-btn>
          </v-card-actions>
  </v-card>
</template>