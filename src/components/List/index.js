import React from "react";
import './style.scss';
import {Col, Row} from 'antd'
import { Typography, Divider } from 'antd';
import * as actionCreators from './store/actionCreator'
import { connect } from 'react-redux';
import PropTypes from 'prop-types'
import { Skeleton } from 'antd';
import { withRouter } from 'react-router-dom'

const { Title, Paragraph, Text } = Typography;
class List extends React.Component{
    constructor(props,context){
        super(props);
        // console.log(context);
        this.handleRouteTo=this.handleRouteTo.bind(this);
    }
   
    componentDidMount(){
        this.props.handleLoadData();
    }
   handleRouteTo(id){
        console.log(this.props)
        this.props.history.push('/detail/'+id)
        // console.log(this.context)
    }
    render(){
        const {isLoading,listData} =this.props;
        console.log('isLoading'+isLoading)
        return (
            <div className="list-wrapper">
                
               {
                   listData.map((item,index)=>{
                    return (
                        <>
                         <Row className="set-align-items" onClick={()=>{this.handleRouteTo(item.id)}}>
                            <Col span={16} offset={1}>
                            <Title level={4} className="list-title">{item.title}</Title>
                            <Paragraph ellipsis={{ rows: 3, expandable: false }} className="list-text">
                            {item.content}
                            </Paragraph>
                            <div className="list-meta">
                                <span className="list-jsd-meta"> <i className="iconfont icon-diamond">&nbsp;2.8</i> </span>
                                <a  className="nickname"> 繁华至 </a>
                                <a href="" >  <i className="iconfont icon-weibiaoti- common">{item.commentNum}</i>  </a>
                                <span className="list-jsd-meta"> <i className="iconfont icon-duomeitiicon- dark">&nbsp;{item.aggreeNum}</i> </span>
                            </div>
                            </Col>
                            <Col span={6} offset={1} >
                                <img src={item.imgsrc}
                                alt=""
                                className="list-image"
                            />
                            </Col>
                            </Row>
                        </>
                    )
                   })
               }
               {
                    
                    isLoading&&(<Row className="set-align-items">
                        <Col span={22} offset={2}>
                        <Skeleton active />
                        </Col>
                        </Row>)
                }
                <div className="read-more">阅读更多</div>
            </div>
        )
    }
}

const mapStateToProps=(state,props)=>{
    return {
        isLoading:state.list.isLoading,
        listData:state.list.listData
    }
}
const mapDispathToProps=(dispatch,props)=>{
    return {
        handleLoadData(){
            dispatch(actionCreators.getData());
        }
    }
}


export default connect(mapStateToProps, mapDispathToProps)(withRouter(List));