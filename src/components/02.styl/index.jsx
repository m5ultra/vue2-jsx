import './index.less'
export default {
  name: 'TestStylScope',
  data() {
    return {
      name: '查理二世'
    }
  },
  render() {
    return (
      <div>
        <h1 class="test-styl-scope"> {this.name}</h1>
      </div>
    )
  }
}
