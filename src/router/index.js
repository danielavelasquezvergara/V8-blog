//import { post } from 'jquery'
import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
//import Articulo from './components/Articulo'
Vue.use(VueRouter)

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
    alias: ["/inicio", "/home", "/portada"],
  },
  {
    path: "/Sobre-mi",
    name: "Sobre-mi",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Sobre-mi.vue"),
    alias: "/acerca",
  },
  {
    path: "/Contacto",
    name: "Contacto",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Contacto.vue"),
    alias: ["/contactame"],
  },
  {
    path: "/Post",
    name: "Post",
    component: () => import(/* webpackChunkName: "Post" */ "../views/Post.vue"),
    children: [
      {
        path: ":Articulo",
        name: "Articulo",
        component: () =>
          import(
            /* webpackChunkName: "Articulo" */ "../components/Articulo.vue"
          ),
      },
    ],
  },
  {
    path: "/Administrador",
    name: "Administrador",
    component: () =>
      import(
        /* webpackChunkName: "Administrador" */ "../components/Administrador.vue"
      ),
    children: [
      {
        path: "Simple",
        name: "Simple",
        component: () =>
          import(/* webpackChunkName: "Simple" */ "../components/Simple.vue"),
      },
      {
        path: "Avanzado",
        name: "Avanzado",
        component: () =>
          import(
            /* webpackChunkName: "Avanzado" */ "../components/Avanzado.vue"
          ),
      },
    ],
  },

  {
    path: "*",
    name: "NotFound",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/NotFound.vue"),
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
