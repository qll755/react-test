import React from 'react'
import ajax from './../api/api'
import { async } from 'q';
import { getData } from './../api/test'
export default class WelcomePage extends React.Component {
    constructor(props) {
        super(props);
        this.state = { data: [] }
    }
    render() {
        return (
            <div>
                <button onClick={(e) => { this.getData(e) }}>获取所有数据</button>
                获取的数据{this.state.data}
            </div>

        )
    }
    getData = async (e) => {
        var result = await getData()
        
        this.setState({
            data: JSON.stringify(result)
        })
    }
}
