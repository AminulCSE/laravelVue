require('./bootstrap');
import Vue from 'vue'
// Form validation
import { Form, HasError, AlertError } from 'vform'
// Progress bar vue js
import VueProgressBar from 'vue-progressbar'
// Notification section for vue
import Snotify, { SnotifyPosition } from 'vue-snotify'
// Form validation
window.Form = Form

// Notification
const SnotifyOptions = {
  toast: {
    position: SnotifyPosition.rightTop
  }
}

// Form validation
Vue.component(HasError.name, HasError)
Vue.component(AlertError.name, AlertError)


// Notification
Vue.use(Snotify, SnotifyOptions)







// Progress bar show on top
const VueProgressBarOptions = {
  color: '#50d38a',
  failedColor: '#874b4b',
  thickness: '5px',
  transition: {
    speed: '0.2s',
    opacity: '0.6s',
    termination: 300
  },
  autoRevert: true,
  location: 'top',
  inverse: false
}
Vue.use(VueProgressBar, VueProgressBarOptions);

// pagination componet
Vue.component('pagination', require('./components/partial/PaginationComponent.vue').default);

// Vue component here
Vue.component('customer-component', require('./components/CustomerComponent.vue').default);

const app = new Vue({
    el: '#app',
});
