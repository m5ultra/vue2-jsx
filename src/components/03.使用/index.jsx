import myComponent from '@/components/myComponent'

const ButtonCounter = {
  name: "button-counter",
  props: ["count"],
  methods: {
    onClick() {
      this.$emit("change", this.count + 1);
    }
  },
  render() {
    return (
      <button onClick={this.onClick}>数量 {this.count}+</button>
    );
  }
};


export default {
  name: 'HelloWorld',
  data () {
    return {
      text:'hello 纸没了飞机',
      inputText:'我吃了',
      count: 0,
    }
  },
  props: {
    msg: {
      type: String,
      default: 'Dendi',
    }
  },
  components: {
    VComponent: myComponent
  },
  watch: {},
  methods: {
    handleChange(val) {
      this.count += val;
      console.log(this.count, 'handleChange')
    },
    handleInputChange(e) {
      this.inputText = e.target.value
    }
  },
  render() {
    // const {text,inputText,count} = this //通过解构，下方return片段中就不需要this
    const {msg, count, handleChange, text, inputText, handleInputChange} = this
    const attrObj = {
      style: { color: 'green', fontSize: '20px', fontWeight: 'bold' },
      handleClick() {
        console.log('handleClick')
      }
    }
    return (
      <div>
        <hr/>
        <h3>内容</h3>
        {/* 纯文本 */}
        <p>hello, I am Gopal</p>
        {/* 动态内容 */}
        <p style={{color: 'blue', fontSize: '30px'}}>{ text } 行内样式</p>
        <p>hello { msg }</p>
        {/* 输入框 */}
        <h2>{inputText}</h2>
        <input value={this.inputText} onInput={(e) => handleInputChange(e)}/>
        <hr/>
        <ButtonCounter
          style={{ marginTop: "10px" }}
          count={count}
          type="button"
          onChange={() => handleChange(10)}
        />
        <hr/>
        <v-component hi='This is hi' {...attrObj}/>
      </div>
    );
  }
}
