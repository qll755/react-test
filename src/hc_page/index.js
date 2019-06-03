import React from 'react';
import { withRouter } from 'react-router-dom';
import NavLeft from './compent/nav_left';
import './index.css'
class Index extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <div>
                <div className='nav_left'>
                    <NavLeft />
                </div>
            </div>
        )
    }
}
export default withRouter(Index)