import React from 'react';
import { withRouter,Link } from 'react-router-dom'
import './style.scss'
import detail from '../../page/detail/detail';

class PersonInfo extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        console.log(this.props)
        let { detailData } =this.props;
        return (
            <div className="personinfo-wrapper">
                <img className="personinfo-img"
                src={detailData.avatar} alt=""/>
            <div className="personinfo-right" >
            <div>
                <span className="personinfo-author">{detailData.name}</span>
                <button className="personinfo-guanzhu">关注</button>
            </div>
            <div className="personinfo-other">
                <span><i className="iconfont icon-diamond action"></i>{detailData.diaNum}</span>
                <span>字数 {detailData.wordNum}</span>
                <time>{detailData.relatetime}</time>
                <span>阅读 {detailData.readNum}</span>
            </div>
            </div>
            </div>
        )
    }
}
export default withRouter(PersonInfo);