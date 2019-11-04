import React from  'react';
import {HeaderWrapper,Logo,Nav,NavItem,NavSearch,SearchWrapper,Addition,AdditionButton,
    SearchInfo,
	SearchInfoTitle,
	SearchInfoSwitch,
	SearchInfoList,
    SearchInfoItem
} from './style'
import { CSSTransition } from 'react-transition-group'
import * as actionCreators  from './store/actionCreators'
import { connect } from 'react-redux';


class Header extends React.Component{
    getListArea=() => {
		const { focused ,list ,page ,total,handleMouseEnter,handleMouseLeave,mouseIn,handleChangePage} =this.props;
		console.log(list)
		let index=0;
		let pageList=[];
		let listData=[...list];
		let all=total;
		// while(all>0){
		// 	if(list.length/10>0){
		// 		console.log('11')
		// 		index++;
		// 		all--;
		// 		for(let i=0;i<10;i++){
		// 			pageList.push (
		// 				<SearchInfoItem key={list[(index-1)*10+i]}>{list[(index-1)*10+i]}</SearchInfoItem>
		// 			);
		// 			list.splice( (index-1)*10 , (index-1)*10+10 );
		// 		}
		// 	}else{
		// 		all--;
		// 		//没有到10个
		// 		for(let i=0;i<list.length;i++){
		// 			pageList.push (
		// 				<SearchInfoItem key={list[i]}>{list[i]}</SearchInfoItem>
		// 			);
		// 			list.splice( 0,list.length-1 );
		// 		}
		// 		console.log('break')
		// 		//return;
		// 		// break;
		// 	}
		// }

		// let lenth=listData.length>10?10:listData.length;
		for(let i=(page-1)*10;i<page*10;i++){
			if(list.length<i){
				break;
			}
			pageList.push(
				<SearchInfoItem key={list[i]}>{list[i]}</SearchInfoItem>
			)
		}

		
		
		console.log(mouseIn)
        if (focused||mouseIn) {
			return (
				<SearchInfo 
				onMouseEnter={handleMouseEnter}
				onMouseLeave={handleMouseLeave}
				>
					<SearchInfoTitle>
						热门搜索
						<SearchInfoSwitch 
						onClick={()=>{handleChangePage(this.props.page,this.props.total)}}
						>
							{/* <i ref={(icon) => {this.spinIcon = icon}} className="iconfont spin">&#xe851;</i> */}
							换一批
						</SearchInfoSwitch>
					</SearchInfoTitle>
                    <SearchInfoList>
						{pageList}
					</SearchInfoList>
				</SearchInfo>
			)
		}else {
			return null;
		}
    }
    render(){
		const { 
			focused, 
			handleInputFocus,
			handleInputBlur 
		} = this.props;
        // console.log(this.props)
        return(
            <div>
                <HeaderWrapper>
                    <Logo></Logo>
                    <Nav>
					<NavItem className='left active'>首页</NavItem>
					<NavItem className='left'>下载App</NavItem>
					<NavItem className='right'>登陆</NavItem>
					<NavItem className='right'>
						<i className="iconfont">&#xe636;</i>
					</NavItem>
					<SearchWrapper>
						<CSSTransition
							in={focused}
							timeout={200}
							classNames="slide"
						>
							<NavSearch
								className={focused ? 'focused': ''}
								onFocus={()=>{handleInputFocus()}}
								onBlur={handleInputBlur}
							></NavSearch>
						</CSSTransition>
						<i className={focused ? 'focused iconfont': 'iconfont'}>
							&#xe614;
						</i>
						{this.getListArea()}
					</SearchWrapper>
				</Nav>
                    <Addition>
                        <AdditionButton className="ic-write">写文章</AdditionButton>
                        <AdditionButton className="sign-up">注册</AdditionButton>
                    </Addition>
                </HeaderWrapper>
            </div>
        )
    }
}

const mapStateToProps=(state,props)=>{
    // console.log(state);
    return {
		focused:state.header.focused,
		list:state.header.list,
		page:state.header.page,
		total:state.header.total,
		mouseIn:state.header.mouseIn
        //巨坑！！！！注意了！！用了命名空间之后不仅仅是action.type需要加上命名空间，再获取state的内容的时候也需要！！
    }
}

const mapDispathToProps=(dispatch,props)=>{
    return {
        handleInputFocus(){
			//获取推荐的数据和历史记录
			dispatch(actionCreators.getList())
            dispatch(actionCreators.searchFocus())
        },
        handleInputBlur(){
            dispatch(actionCreators.searchBlur())
		},
		handleMouseEnter(){
			dispatch(actionCreators.mouseEnter())
		},
		handleMouseLeave(){
			dispatch(actionCreators.mouseLeave())
		},
		handleChangePage(page,total){
			if(page<total){
			dispatch(actionCreators.changePage(page+1))
			}else{
				dispatch(actionCreators.changePage(1))
			}
		}
    }
}

export default connect(mapStateToProps, mapDispathToProps)(Header);