// 登录界面
import React from 'react';
import { withRouter } from 'react-router-dom'
import { Form, FormControl, Button } from 'react-bootstrap'
import './login.css'
import { async } from 'q';
import { login } from './../../api/login'
class LogIn extends React.Component {
    constructor(props) {
        super(props);
        this.state = { un: '', pw: '' }
    }
    render() {
        return (
            <div className="warp">
                <Form className="inp">
                    <FormControl placeholder="请输入你的账户" onChange={e => this.setname(e)} value={this.state.un} />
                    <FormControl placeholder="请输入你的密码" onChange={e => this.setpw(e)} value={this.state.pw} />
                    <div className="btns">
                        <Button onClick={(e) => this.login(e)}>登录</Button>
                        <Button onClick={(e) => this.reject(e)}>注册</Button>
                    </div>
                </Form>
            </div>
        )
    }
    login = async () => {
        var obj = {
           phone: this.state.un
        }
        var result = await login(obj)
    }
    reject = (e) => {
        var pw = e.target.value;
        this.setState({
            pw
        })
    }
    setname = (e) => {
        var un = e.target.value;
        this.setState({
            un
        })
    }
    setpw = (e) => {

    }
}
export default withRouter(LogIn)