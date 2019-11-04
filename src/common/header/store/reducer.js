import * as constants from './constants';
// import { fromJS } from 'immutable';

// const defaultState=fromJS({
//         focused:false
// })
const defaultState={
    focused:false,
    mouseIn:false,
    list:[],
    page:1,//当前页
    total:1
    //总页数
}



const HeaderReducer=(state=defaultState,action={})=>{
    switch(action.type){
        case constants.SEARCH_FOCUS:
            console.log(state)
            return { ...state,focused:true };
        case constants.SEARCH_BLUR:
            return { ...state,focused:false }
        case constants.CHANGE_LIST:
            return {...state,list:action.data,total:action.total}
        case constants.MOUSE_ENTER:
            return {...state,mouseIn:true}
        case constants.MOUSE_LEAVE:
            return {...state,mouseIn:false}
        case constants.CHANGE_PAGE:
            return {...state,page:action.page}
        default:
            console.log('defalut')
            return state;
    }
}

export default HeaderReducer;