import VBase from './components/01.jsx基本使用/01.Base'
import TestStylScope from './components/02.styl'
import TsxUse from './components/03.使用'
import  TestSlot  from '@/components/04.插槽'
import './Root.less'
export default {
	name: 'App',
	components: {
		VBase,
		TestStylScope,
		TsxUse,
	},
	render() {
		return <div>
			<TestSlot visible={this.visible}
								{...{
									scopedSlots: {
										test: ({ user }) => {
											console.log(user, '作用域插槽')
											// 这个user就是子组件传递来的数据，同理可这样拿到el-table的row，不过test得是default，不过案例还是我这样
											return <div style="color:blue;">快来啊，{user.name}，看看这个作用域插槽</div>
										},
									},
								}}>
				<span>默认插槽插入内容</span>
				<span slot={'header'}>这里是具名slot</span>
			</TestSlot>
			<v-base/>
			<test-styl-scope/>
			<tsx-use/>
		</div>
	},
}
