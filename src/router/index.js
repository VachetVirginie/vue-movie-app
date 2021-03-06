import Vue from 'vue'
import VueRouter from 'vue-router'
import LatestMovie from '@/components/LatestMovie'
import Movie from '@/components/Movie'
import SearchMovie from '@/components/SearchMovie'
import Home from '@/components/Home'
import Login from '@/components/Login'
import Register from '@/components/Register'
import Menu from '@/components/Menu'



Vue.use(VueRouter)

export default new VueRouter({
  routes: [
    {
      path: '/home',
      name: 'Home',
      component: Home
    },
    {
      path: '/latestMovie',
      name: 'LatestMovie',
      component: LatestMovie
    },
    {
      path: '/movie/:id',
      name: 'Movie',
      props: true,
      component: Movie
    },
    {
      path: '/search/:name',
      name: 'SearchMovie',
      props: true,
      component: SearchMovie
    },
    {
      path: '/',
      name: 'login',
      component: Login
     },
    {
      path: '/register',
      name: 'Register',
      component: Register
    },
    {
      path: '/menu',
      name: 'Menu',
      component: Menu
    }
  ],
  mode: 'history'
}
)