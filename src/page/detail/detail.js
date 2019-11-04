import React from 'react';
import './style.scss'
import { Row, Col } from 'antd';
import { withRouter } from 'react-router-dom'
import PersonInfo from '../../components/PersonInfo'
import axios from 'axios';
import Loading from '../../components/Loading/Loading'
import './style.scss'
import Axios from 'axios';

class Detail extends React.Component{
    constructor(props){
        super(props);
        this.state={
            isLoading:true,
            detailData:{}
        }
    }
    componentDidMount(){
        const id=this.props.match.params.id;
        //请求详情页面数据 
        //发布文章者信息和文章内容
        //const _this=this;
        axios.get(`/api/getDetail/${id}`).then((res)=>{
            this.setState({
                detailData:res.data.data,
                isLoading:false
            })
        }).then((err)=>{
            console.log(err);
        })
    }
    render(){
        return (
          this.state.isLoading?(<Loading></Loading>):
            (<div className="detail-wrapper">
                <div className="detail-middle-wrapper">
                <div className="detail-middle-left">
                <section className="detail-section">
                    <h1 className="detail-section-title">{this.state.detailData.title}</h1>
                      <PersonInfo detailData={this.state.detailData}></PersonInfo>
                      <article className="detail-article-wrapper">
                          <p>
                              {this.state.detailData.content}
                          </p>
                      </article>
                </section>
                </div>
                </div>
            </div>)
        )
    }
}


export default withRouter(Detail);