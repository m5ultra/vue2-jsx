import './01.base.less'
export default {
	name: 'HelloWorld',
	props: {
		msg: String,
	},
	data() {
		return {
			list: [
				{
					id: '01',
					name: 'Dendi',
					age: 88,
				},
				{
					id: '02',
					name: 'Tom',
					age: 90,
				},
			],
		}
	},
	render() {
		return (
			<div>
				<ul>
					{this.list.map((v) => (
						<li>{v.name}</li>
					))}
				</ul>
			</div>
		)
	},
}
