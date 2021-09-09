
/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap');

window.Vue = require('vue');

import VueRouter from 'vue-router'
import Form from 'vform'
import Vue from 'vue';
import moment from 'moment';
import Gate from './Gate';

Vue.prototype.$gate = new Gate(window.user);

import _, { create } from 'lodash';
import Swal from 'sweetalert2'
import VueProgressBar from 'vue-progressbar'

window.Swal = Swal;

window.Form = Form;

Vue.use(VueRouter)

// The color to the progress bar
Vue.use(VueProgressBar, {
    color: 'rgb(143, 255, 199)',
    failedColor: 'red',
    height: '2px'
})



const Toast = Swal.mixin({
    toast: true,
    position: 'top-end',
    showConfirmButton: false,
    timer: 3000,
    timerProgressBar: true,
    didOpen: (toast) => {
      toast.addEventListener('mouseenter', Swal.stopTimer)
      toast.addEventListener('mouseleave', Swal.resumeTimer)
    }
});


window.Toast = Toast;


let routes = [
    { path: '/dashboard', component:  require('./components/Dashboard.vue') },
    { path: '/developer', component:  require('./components/Developer.vue') },
    { path: '/users', component:  require('./components/Users.vue') },
    { path: '/profile', component:  require('./components/Profile.vue') },
  ]
  
  // register the router
  // The history mode is used to format the url in a nice format
const router = new VueRouter({
    mode: 'history',
    routes // short for `routes: routes`
})

Vue.filter('upText', function(text){
    // return text.toUpperCase();
    return text.charAt(0).toUpperCase() + text.slice(1)
});
 

// Fire is used to create a custom event 
window.Fire =  new Vue();


Vue.filter('myDate', function(created){
    return moment(created).format('MMMM Do YYYY');
});


Vue.component(
    'passport-clients',
    require('./components/passport/Clients.vue')
);

Vue.component(
    'passport-authorized-clients',
    require('./components/passport/AuthorizedClients.vue')
);

Vue.component(
    'passport-personal-access-tokens',
    require('./components/passport/PersonalAccessTokens.vue')
);

/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */

Vue.component('example-component', require('./components/ExampleComponent.vue'));

const app = new Vue({
    el: '#app',
    router
});
