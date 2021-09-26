import React,{Component} from 'react';
import "./index.css";
import List from './list';
class App extends Component {
    constructor(props) {
      super(props)
      this.setOpen = this.setOpen.bind(this)
    }

    state = {
      // 记录当前是哪一个子组件：
      openChild: 'family',
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
    // 通过箭头函数
    // setOpen = (openChild) => {
    //   this.setState({
    //     openChild
    //   })
    // }
    // 通过普通
    setOpen(openChild) {
      this.setState({
        openChild
      })
    }

    render(){
      let {data} = this.state;
      return (<div className="friend-list">
            {Object.keys(data).map(item=>{
              // console.log(item);
              return <List
                        data={data[item]}
                        key={item}
                        isOpen={this.state.openChild === item}
                        name={item}
                        setOpen={this.setOpen}
                      />
            })}
      </div>)
    }
}
export default App;


