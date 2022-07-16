import VBase from './components/01.jsx基本使用/01.Base'
import TestStylScope from './components/02.styl'
export default {
	name: 'App',
	components: {
		VBase,
		TestStylScope
	},
	render() {
		return <div>
			<v-base/>
			<test-styl-scope/>
		</div>
	},
}
