import Vue from 'vue'
import Root from './Root'

Vue.config.productionTip = false

new Vue({
	render: (h) => h(Root),
}).$mount('#app')
