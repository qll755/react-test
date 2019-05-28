import React from 'react'
import { getData } from './../api/test'
import { ListGroup, ListGroupItem } from 'react-bootstrap'
export default class WelcomePage extends React.Component {
    constructor(props) {
        super(props);
        this.state = { data: [] }
    }
    render() {
        return (
            <ListGroup>
                {/* <button onClick={(e) => { this.getData(e) }}>获取所有数据</button>
                获取的数据{this.state.data} */}
                <ListGroupItem className="ccc">1</ListGroupItem>
                <ListGroupItem>2</ListGroupItem>
                <ListGroupItem>3</ListGroupItem>
                <ListGroupItem>4</ListGroupItem>
            </ListGroup>

        )
    }
    // getData = async (e) => {
    //     var result = await getData()
    //     this.setState({
    //         data: JSON.stringify(result)
    //     })
    // }
}
