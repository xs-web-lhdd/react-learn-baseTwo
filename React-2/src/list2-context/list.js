import React,{Component} from 'react';
import Dt from './dt';
import Dd from './dd';
export default class List extends Component {
    render(){
        let {Consumer} = this.props;
        console.log(Consumer);
        return (<dl className={`friend-group`}>
                <Consumer>
                    <Dd  {...this.props} />
                </Consumer>
                
        </dl>);
    }
}