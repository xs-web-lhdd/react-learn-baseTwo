import React,{Component} from 'react';
export default class List extends Component {

    render(){
      let {data, isOpen, name, setOpen} = this.props;
      console.log(isOpen, name, setOpen);
        let {title,list} = data;
        return (<dl className={`friend-group ${isOpen ? 'expanded' : ''}`}>
                <dt onClick={()=>{
                  setOpen(name)
                }}>{title}</dt>
                {list.map((item,index)=>{
                    return <dd key={index}>{item.name}</dd>
                })}
        </dl>);
    }
}