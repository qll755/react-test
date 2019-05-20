// 测试由当前页面回到欢迎页面
import React from 'react';
import { withRouter } from 'react-router-dom';


class Test extends React.Component {
    render() {
        return (

            <div>
                <button onClick={(e) => this.jumpPage(e)}>跳转到欢迎页</button>
                <button onClick={(e) => this.jumppRarms(e)}>跳转到路由传参界面</button>
            </div>
        )
    }
    jumpPage = () => {
        // 使用es6的语法实现跳转
        this.props.history.push('/')
    }
    jumppRarms = () => {
        // 使用parmas对选哪个传参
        // this.props.history.push({ pathname: '/Prams', state: { id: 4 } })
        this.props.history.push({pathname:'/Prams',query:{id:2}})
    }
}
export default withRouter(Test);