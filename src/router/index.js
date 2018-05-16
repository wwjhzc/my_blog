import Vue from 'vue'
import Router from 'vue-router'
import main from '../pages/main.vue'

Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/',
            redirect: '/main',
        },
        {
            path: '/main',
            name: 'main',
            component: main
        }
    ]
})