// 测试由当前页面回到欢迎页面
import React from 'react';
import { withRouter } from 'react-router-dom';


class Test extends React.Component {
    render() {
        return (
            <button onClick={(e) => this.jumpPage(e)}>跳转到欢迎页</button>
        )
    }
    jumpPage = () => {
        // 使用es6的语法实现跳转
        this.props.history.push('/')
    }
}
export default withRouter(Test);