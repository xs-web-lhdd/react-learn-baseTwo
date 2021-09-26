import React,{Component,createContext} from 'react';
import "./index.css";
const myContext = createContext();
const {Provider,Consumer} = myContext;
// Provider 向子孙级去传递消息
// Consumer 获取信息
class Div extends Component {
    render(){
        return <div>
            <P/>
        </div>
    }
}
class P extends Component {
    render(){
        return <p>
            {/* Consumer 作用就是接收数据，与 Provider 遥相呼应 */}
            <Consumer>
                {(props)=>{
                    // 得到祖先组件传递过来的数据
                    console.log(props);
                    return <Span {...props}/>
                }}
            </Consumer>
        </p>
    }
}
class Span extends Component {
    // static contextType = myContext
    render(){
        console.log(this);
        return <span></span>
    }
}
// Span.contextType = myContext;
class App extends Component {
    state = {
      data: {
          family: {
              title: '家人',
              list: [
                  {name: '爸爸'},
                  {name: '妈妈'}
              ]
          },
          friend: {
              title: '朋友',
              list: [
                  {name: '张三'},
                  {name: '李四'},
                  {name: '王五'}
              ]
          },
          customer: {
              title: '客户',
              list: [
                  {name: '阿里'},
                  {name: '腾讯'},
                  {name: '头条'}
              ]
          }
      }
    }
    render(){
      let {data} = this.state;
        return <div>
            {/* 传递的值放在 value 中，就是将 data 传递下去 */}
            <Provider value={data}>
                <Div />
            </Provider>
        </div>;
    }
}
export default App;


