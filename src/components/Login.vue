<template>
  <v-app id="inspire">
    <v-content>
      <v-container
        class="fill-height"
        fluid
      >
        <v-row
          align="center"
          justify="center"
        >
          <v-col
            cols="12"
            sm="8"
            md="4"
          >
       <div v-if="error" class="alert alert-danger">{{error}}</div>
            <v-card class="elevation-12">
              <v-toolbar
                color="#34558b"
                dark
                flat
              >
                <v-toolbar-title>Login</v-toolbar-title>
                <v-spacer />
              </v-toolbar>
              <v-card-text>
                <v-form action="#" @submit.prevent="submit">
                    <v-text-field
                    label="Name"
                    id="email"
                    type="email"
                    class="form-control"
                    name="email"
                    value
                    required
                    autofocus
                    v-model="form.email"
                    >
                   </v-text-field>
                    <v-text-field
                    label="Password"
                    id="password"
                    type="password"
                    class="form-control"
                    name="password"
                    required
                    v-model="form.password"
                >
                </v-text-field>
                              <v-card-actions>
                <v-spacer />
                <v-btn type="submit" color="#34558b">Login</v-btn>
              </v-card-actions>
            </v-form>
            <router-link
        to='/register'
        tag='span'
        style='cursor: pointer'>
         Create an account
        </router-link>
              </v-card-text>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
import firebase from "firebase";

export default {
  data() {
    return {
      form: {
        email: "",
        password: ""
      },
      error: null
    };
  },
  methods: {
    submit() {
      firebase
        .auth()
        .signInWithEmailAndPassword(this.form.email, this.form.password)
        .then(data => {
          this.$router.replace({ name: "Home" });
        })
        .catch(err => {
          this.error = err.message;
        });
    }
  }
};
</script>

<style lang="stylus" scoped>
  .v-app
    background-image: url('https://www.google.com/url?sa=i&url=https%3A%2F%2Fwallpaperplay.com%2Fboard%2Fmovie-screen-wallpapers&psig=AOvVaw241Tqyv44AD7vNJA_LM1fn&ust=1588348443480000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCKiRj5rBkOkCFQAAAAAdAAAAABAD');
  .v-btn
    color: white !important
</style>