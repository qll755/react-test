import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import back from './../hc_page/index'
const RouterList = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path='/' component={back} />
            </Switch>
        </BrowserRouter>
    )
}
export default RouterList