// 动态路由传参
import React from 'react';
import { withRouter } from 'react-router-dom'

class RouterPrams extends React.Component {
    constructor(props) {
        super(props)
        this.state = this.props.location.query
    }
    render() {
        return (
            <div>
                穿过来的路由参数为{this.state.id}
            </div>
        )
    }
    componentDidMount() {
        // 不同的方式使用不同的方式接受参数
        // console.log(this.props.match.params); 以标签链接的形式进行跳转
        // console.log(this.props.history.location.state);==>this.props.history.push({pathname:'/Prams',state:{id:2}})以加密形式传参
        // this.props.location.query;==>this.props.history.push({pathname:'/Prams',query:{id:2}}) 以url明文的形式进行传参
        
    }

}
export default withRouter(RouterPrams);