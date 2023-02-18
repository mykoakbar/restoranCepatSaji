import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import FoodsView from "../views/FoodsView.vue";
import AboutView from '../views/AboutView.vue';
import foodDetail from '../views/foodDetail.vue';
import BestFoodDetailView from '../views/BestFoodDetailView.vue';
import keranjangView from '../views/keranjangView.vue';
import pesananBerhasil from '../views/pesananBerhasil.vue';

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/foodsview',
    name: 'FoodsView',
    component: FoodsView
  },
  {
    path: '/AboutView',
    name: 'AboutView',
    component: AboutView
  },
  {
    path: '/foodsView/:id',
    name: 'foodDetail',
    component: foodDetail
  },
  {
    path: '/BestFoodDetailView/:id',
    name: 'BestFoodDetailView',
    component: BestFoodDetailView
  },
  {
    path: '/keranjangView',
    name: 'keranjangView',
    component: keranjangView
  },
  {
    path: '/pesananBerhasil',
    name: 'pesananBerhasil',
    component: pesananBerhasil
  }
   
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
