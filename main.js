import Vue from 'vue'
import App from './App'
require('./mock/mock')

Vue.config.productionTip = false

App.mpType = 'app'

const app = new Vue({
	...App
})
app.$mount()
