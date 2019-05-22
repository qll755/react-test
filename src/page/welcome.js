import React from 'react'
import WebApi from './../api/api'
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
    var url = `http://localhost:3000/api/test/findAll`
    var datap = new WebApi()
    var result = await datap.GET(url, {})
    console.log(result)
}