import styled ,{keyframes} from 'styled-components'
import pic from '../../static/logo.png'
import { style } from 'dom-helpers';

const mainColor='#ea6f5a'
export const HeaderWrapper=styled.div`
    height:58px;
    min-width:800px;
    border-bottom:1px solid #f0f0f0;
    /* border:1px solid red; */
    position:relative;
`
export const Logo=styled.a.attrs({'href':'/'})`
    position:absolute;
    top:0;
    left:0;
    display:block;
    width:100px;
    height:58px;
    border-bottom:1px solid #f0f0f0;
    background:url(${pic});
    background-size:cover;
`
export const Nav=styled.div`
    min-width:400px;
    max-width:67%;
    height:100%;
    margin:0 auto;
`
export const NavItem=styled.div`
    line-height:56px;
    padding:0px 15px;
    color:#333;
    &.left{
        float:left;
    }
    &.right{
        float:right;
        color:#969696;
    }
    &.active{
        color:#ea6f5a;
    }
    &:hover{
        background:#f4f4f4;
    }
`

export const SearchWrapper = styled.div`
	position: relative;
	float: left;
	.iconfont {
		position: absolute;
		right: 5px;
		bottom: 5px;
		width: 30px;
		line-height: 30px;
		border-radius: 15px;
		text-align: center;
		&.focused {
			background: #777;
			color: #fff;
		}
	}
`;

export const NavSearch = styled.input.attrs({
	placeholder: '搜索'
})`
	width: 160px;
	height: 38px;
	padding: 0 30px 0 20px;
	margin-top: 9px;
	margin-left: 20px;
	box-sizing: border-box;
	border: none;
	outline: none;
	border-radius: 19px;
	background: #eee;
	font-size: 14px;
	color: #666;
	&::placeholder {
		color: #999;
	}
	&.focused {
		width: 240px;
	}
	&.slide-enter {
		transition: all .2s ease-out;
	}
	&.slide-enter-active {
		width: 240px;
	}
	&.slide-exit {
		transition: all .2s ease-out;
	}
	&.slide-exit-active {
		width: 160px;
	}
`;

export const Addition=styled.div`
    position:absolute;
    right: 0;
    top:0;
    height: 56px;
`
export const AdditionButton=styled.div`
    float:right;
    margin-top:9px;
    font-weight: 400;
    padding: 6px 12px;
    border-radius:20px;
    line-height:24px;
    font-size: 15px;
    &.sign-up{
        color:${mainColor};
        border:1px solid rgba(236,97,73,.7);
        background-color: transparent;
        margin: 9px 5px 0 15px;
    }
    &.ic-write{
        /* margin-right: 3px; */
        color:  #fff;
        border:1px solid #ea6f5a;
        background-color: #ea6f5a;
        margin: 8px 12px 0;
        /* vertical-align: middle; */
    }
    &.sign-up:hover{
        background-color:rgba(236,97,73,.05);
    }
`

export const SearchInfo = styled.div`
	position: absolute;
	left: 0;
	top: 56px;
	width: 240px;
	padding: 0 20px;
	box-shadow: 0 0 8px rgba(0, 0, 0, .2);
`;

export const SearchInfoTitle = styled.div`
	margin-top: 20px;
	margin-bottom: 15px;
	line-height: 20px;
	font-size: 14px;
	color: #969696;
`;

export const SearchInfoSwitch = styled.span`
	float: right;
	font-size: 13px;
	.spin {
		display: block;
		float: left;
		font-size: 12px;
		margin-right: 2px;
		transition: all .2s ease-in;
		transform-origin: center center;
	}
`;

export const SearchInfoList = styled.div`
	overflow: hidden;
`;

export const SearchInfoItem = styled.a`
	display: block;
	float: left;
	line-height: 20px;
	padding: 0 5px;
	margin-right: 10px;
	margin-bottom: 15px;
	font-size: 12px;
	border: 1px solid #ddd;
	color: #787878;
	border-radius: 3px;
`;


