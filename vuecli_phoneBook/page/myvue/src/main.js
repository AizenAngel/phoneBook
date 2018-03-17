import Vue from 'vue'
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
import App from './App.vue'
import { Header } from 'mint-ui'
import { Button } from 'mint-ui'
import Myheader from './Header.vue'
import List from './List.vue'
import Alert from './Alert.vue'

Vue.use(MintUI)
Vue.component(Header.name, Header)
Vue.component(Button.name, Button)
Vue.component('my-header',Myheader)
Vue.component('my-list',List)
Vue.component('my-alert',Alert)

new Vue({
  el: '#app',
  render: h => h(App)
})
