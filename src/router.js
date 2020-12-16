import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

export default new VueRouter({
    mode: 'history',
    routes: [
        {
            path: '/',
            component: () => import('./components/Landing.vue')
        },
        {
            path: '/home',
            component: () => import('./components/Landing.vue')
        },
        {
            path: '/categories',
            component: () => import('./components/Category.vue')
        },
        {
            path: '/questions',
            component: () => import('./components/Questions.vue')
        },
        {
            path: '/result',
            component: () => import('./components/Result.vue')
        },
        // {path: '*', component: () => import('./views/lostPage.vue')}
    ]
})