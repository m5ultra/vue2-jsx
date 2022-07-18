import './myComponent.less'
export default {
  name: 'my-component',
  props: {
    hi: {
      default: '',
      type: String,
      require: true,
      validator(t) {
        // 这个值必须匹配下列字符串中的一个
        return Object.prototype.toString.call(t).toLowerCase().slice(8, -1) === 'string'
      }
    }
  },
  data() {
    return {
      isGreen: true,
      isYellow: true,
      isRed: true,
      text: 'text',
      htmlCode: '<span>htmlCode</span>',
      isBool: false,
      inputVal: '',
      inputVal2: '',
      inputRef: null,
      inputValue03: null,
    }
  },
  render() {
    const {hi, isRed, isGreen, isYellow, htmlCode, isBool, handleInputChange} = this
    const colorRed = {color: 'red'}
    const dynamicPlaceholder = '动态placeholder'
    const isShow = (num) => {
      if(num === 1){ return( <button>按钮1</button> ) }
      if(num === 2){ return( <button>按钮2</button> ) }
      if(num === 3){ return( <button>按钮3</button> ) }
    }
    return <div>
      <p class={'my-component'}>{hi}</p>
    
      <p style={isGreen ? 'color:green' : ''}>{this.text}</p>
      <p className={isYellow ? 'colorYellow' : ''}>hello {this.msg}</p>
      <p style={isRed ? colorRed : ''}>红色的文字</p>
      <hr/>
      <input type="text" placeholder={'我是placeholder'}/>
      <input type="text" placeholder={dynamicPlaceholder}/>
      {/* v-html */}
      <h3 domPropsInnerHTML={htmlCode}></h3>
      {/* v-text */}
      <h3 domPropsInnerText={htmlCode}></h3>
      {/* v-if */}
      {isBool ? <button>按钮1</button> : <button>按钮2</button>}
      <p>v-if 的复杂场景</p>
      {isShow(3)}
      {isShow(1)}
      {isShow(2)}
      <hr/>
      {/* v-modal 从this中结构出来就无效了 无效*/}
      <input type="text" v-modal={this.inputVal}/> {/* 好像不起作用 */}
      {/* 非受控组建 */}
      <hr/>
      <input type="text" ref={(x) => {
        console.log(x)
        return this.inputRef = x
        }
      } onInput={() => handleInputChange()}/>
      {/* computed use */}
      <h3>{this.newCom}</h3>
      
      {/* 受控组建 */}
      <input type="text" value={this.inputValue03} onInput={this.handleInputChange02}/>
      <p>{this.inputValue03}</p>
    </div>
  },
  methods: {
    handleInputChange() {
      console.log(this.inputRef, '非受控组建')
      this.inputVal2 = this.inputRef.value
    },
    handleInputChange02(e) {
      this.inputValue03 = e.target.value
      console.log(this.inputValue03, 'inputValue03')
    }
  },
  watch: {
    'inputVal2': function (n, o) {
      console.log(o, 'old')
      console.log(n, 'new')
    }
  },
  computed: {
    newCom() {
      return this.inputVal2 + 'v'
    }
  }
}
