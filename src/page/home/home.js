import React from 'react';
import List from '../../components/List'
import { Row, Col } from 'antd';
import './style.scss'
import banquan from '../../static/banquan.png'
import {withRouter} from 'react-router-dom'

class Home extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        return (
            <div className="home-wrapper">
                    <Col  className="home-left-wrapper">
                    <List></List>
                    </Col>
                    <Col className="home-right-wrapper">
                    {/* <List></List> */}
                    <ul>
                        <li>
                            <img className="right-image" src={banquan} alt=""/>
                        </li>
                        <li>
                            <img className="right-image" src={banquan} alt=""/>
                        </li>
                        <li>
                            <img className="right-image" src={banquan} alt=""/>
                        </li>
                    </ul>
                    </Col>
            </div>
        )
    }
}

export default Home;