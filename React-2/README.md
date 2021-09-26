# React-2

# 课程目标
- 掌握 React 组件间通信
- 掌握 React 组件的生命周期
- 掌握受控组件的使用

# 课程内容

## React 组件间通信
在 React.js 中，数据是从上自下流动（传递）的，也就是一个父组件可以把它的 state / props 通过 props 传递给它的子组件，但是子组件不能修改 props - React.js 是单向数据流，如果子组件需要修改父组件状态（数据），是通过回调函数方式来完成的。
- 父级向子级通信
    把数据添加子组件的属性中，然后子组件中从props属性中，获取父级传递过来的数据
- 子级向父级通信
    在父级中定义相关的数据操作方法(或其他回调), 把该方法传递给子级，在子级中调用该方法父级传递消息 - 见 list2-practice
```js
// 父组件：
    setOpen(openChild) {
      this.setState({
        openChild
      })
    }
    // 传递给子组件的数据和方法：
    setOpen={this.setOpen}
    name={item}
// 子组件：
let {data, isOpen, name, setOpen} = this.props;
    // 通过调用父组件传过来的回调方法 改变父组件里面的值 
    <dt onClick={()=>{
      setOpen(name)
    }}>{title}</dt>
```

### 跨组件通信 - context
- React.createContext(defaultValue);
- Context.Provider 在父组件调用 Provider 传递数据
    - value 要传递的数据
- 接收数据
    - class.contextType = Context;
    - static contextType = Context;
    - Context.Consumer
    例子：
    list2-context

其中比较常用的 API ：
Consumer 与 Provider 相对应，Consumer 传值，Provider 用来接收

**注意在使用不熟练时，最好不要再项目中使用 context，context一般给第三方库使用**

在实际项目中一般会使用 Redux









