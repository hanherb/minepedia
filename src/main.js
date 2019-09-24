/* eslint-disable */
import Vue from 'vue';
import ShardsVue from 'shards-vue';
import VueAnalytics from 'vue-analytics';
import axios from 'axios';
import VueAxios from 'vue-axios';
import VueSession from 'vue-session';

// Styles
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import '@/assets/shards-dashboard-pro/shards-dashboards.scss';
import '@/assets/scss/date-range.scss';
import '@/assets/style.css';

// Core
import App from './App.vue';
import router from './router';

// Layouts
import Default from '@/layouts/Default.vue';

const isProd = process.env.NODE_ENV === 'production';

ShardsVue.install(Vue);

Vue.component('default-layout', Default);

Vue.config.productionTip = false;
Vue.prototype.$eventHub = new Vue();

Vue.use(VueAxios, axios);
Vue.use(VueSession);

// Analytics
Vue.use(VueAnalytics, {
  id: isProd ? 'UA-115105611-1' : 'UA-115105611-2',
  router
});

router.beforeEach((to, from, next) => {
    if(localStorage.getItem('user_role')) {
        var user_role = localStorage.getItem('user_role');
    }
    if(localStorage.getItem('user_authority')) {
        var user_authority = localStorage.getItem('user_authority').split(',');
    }
    if(localStorage.getItem('user_status')) {
        var user_status = localStorage.getItem('user_status').split(',');
    }
    if(user_status == 'wait-profile') {
        if(user_role != "supplier") {
            if(to.path != '/edit-user-profile') {
                next('/edit-user-profile');
            }
            else {
                next();
            }
        }
        else {
            if(to.path != '/edit-supplier-profile') {
                next('/edit-supplier-profile');
            }
            else {
                next();
            }
        }
    }
    else {
        if(to.path == '/add-user') {
            for(var i = 0; i <= user_authority.length; i++) {
                if(i == user_authority.length) {
                    next({
                        path: '/not-authenticated',
                    })
                }
                else {
                    if(user_authority[i] == 'create') {
                        next();
                        break;
                    }
                }
            }
        }
        else if(to.path == '/update-user') {
            for(var i = 0; i <= user_authority.length; i++) {
                if(i == user_authority.length) {
                    next({
                        path: '/not-authenticated',
                    })
                }
                else {
                    if(user_authority[i] == 'update') {
                        next();
                        break;
                    }
                }
            }
        }
        else if(to.path == '/delete-user') {
            for(var i = 0; i <= user_authority.length; i++) {
                if(i == user_authority.length) {
                    next({
                        path: '/not-authenticated',
                    })
                }
                else {
                    if(user_authority[i] == 'delete') {
                        next();
                        break;
                    }
                }
            }
        }
        else {
            next();
        }
    }
});

new Vue({
  router,
  render: h => h(App),
}).$mount('#app');
