import React from 'react';
// 路由的引入
import { BrowserRouter, Switch, Route } from 'react-router-dom'
// 引入欢迎页
import Welcome from './../page/welcome'
// 引入测试页面
import Test from './../page/test1'
// 引入测试路由传参的页面
import RouterPrams from './../page/routerPrams'
const RouterList = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path='/' component={Welcome} />
                <Route exact path='/test' component={Test} />
                <Route exact path='/Prams' component={RouterPrams} />
            </Switch>

        </BrowserRouter>
    )

}
export default RouterList;