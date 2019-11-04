import * as constants from './constants';
import axios from 'axios'
import '../../../mock/mock'

export const searchFocus=()=>({
    type: constants.SEARCH_FOCUS
})

export const searchBlur=()=>({
    type: constants.SEARCH_BLUR
})

const changeList=(data)=>({
    type:constants.CHANGE_LIST,
    data:data,
    total:Math.ceil(data.length/10)
})

export const getList=()=>{
    return (dispatch)=>{
        //派发异步请求
        axios.get('/api/getRecommendList').then((res)=>{
            // console.log(res.data.data);
            const data=res.data.data;
            dispatch(changeList(data))
        }).catch((err)=>{
            console.log(err);
        })
    }
}

export const mouseEnter = () => ({
	type: constants.MOUSE_ENTER
});

export const mouseLeave = () => ({
	type: constants.MOUSE_LEAVE
});

export const changePage=(page)=>({
    type : constants.CHANGE_PAGE,
    page:page
})