

<template>
    <v-container class="ml-6">
   <v-row>
      <v-col
        cols="12"
        sm="6"
      >
          <div class="card-header">Login</div>
          <div class="card-body">
            <div v-if="error" class="alert alert-danger">{{error}}</div>
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

                <v-btn
                  color="green accent-3"
                  class="mr-4"
                  type="submit"
                >
                   Login
                </v-btn>
            </v-form>
        <router-link
        to='/register'
        tag='span'
        style='cursor: pointer'>
         Create an account
        </router-link>
          </div>
     </v-col>
    </v-row>
  </v-container>
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