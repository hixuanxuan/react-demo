import React from 'react';
import { Spin } from 'antd';
import './Loadingstyle.scss';
class Loading extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            
                <Spin size="large" tip="loading..." >
                    <div className="spin-wrapper"></div>
                </Spin>

        )
    }
}

export default Loading;