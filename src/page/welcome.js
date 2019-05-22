import React from 'react'
import ajax from './../api/api'
import { async } from 'q';

export default class WelcomePage extends React.Component {
    render() {
        return (
            <div>
                <button onClick={getData}></button>
                这个是欢迎页
            </div>

        )
    }
    //      getData = (e) => {
    //         var url = `http://192.168.1.234:9023/CompDeptHandler/AppHandler.ashx?OP=AppUserAccount`
    //         var datap = new WebApi()
    //         var result =  datap.GET(url, {})
    // debugger
    //     }
}
async function getData() {
    var url = `/api/test/findAll`
    var result = await ajax.GET(url, {})
    debugger
}