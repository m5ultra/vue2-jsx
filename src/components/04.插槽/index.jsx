import './slot.less'
export default {
  name: 'test-slot',
  props: {
    visible: {
      default: false,
      type: Boolean
    }
  },
  render() {
    return <div>
      <div style={{visible: this.visible}}>
        {/**自定义作用域插槽*/}
        <div className="item">
          {this.$scopedSlots.test({
            user: { name: '安倍晋三' }
          })}
        </div>
      </div>
      <hr/>
      {this.$slots.header}
      <h2 style={{color: 'blue'}} class={'test-slot'}>测试插槽使用</h2>
      {this.$slots.default}
      <hr/>
    </div>
  }
}
