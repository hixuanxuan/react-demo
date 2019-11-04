import axios from 'axios'
import * as contants from './contants'
import '../../../mock/mock'


const getDataSuccess=(data)=>({
    type:contants.GET_DATA_SUCCESS,
    isLoading:false,
    listData:data,
})

const changeLoadingStatus=()=>({
        type:contants.GET_DATA,
})

const getDataFail=(err)=>({
    type:contants.GET_DATA_FAIL,
    code:400,
    data:err
})


export const getData=()=>{
    return (dispatch)=>{
        dispatch(changeLoadingStatus())
        axios.get('/api/getListData').then((res)=>{
            console.log(res.data);
            dispatch(getDataSuccess(res.data));
        }).catch((err)=>{
            dispatch(getDataFail(err));
        })
    }
}