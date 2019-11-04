import * as contants from './contants'

const defaultState={
    listData:[],
    isLoading:false
}
const ListReducer=(state=defaultState,action={})=>{
    switch(action.type){
        case contants.GET_DATA:
            return{
                ...state,
                isLoading:true
            }
        case contants.GET_DATA_SUCCESS:
            return {
                ...state,
                listData:action.listData.data,
                isLoading:false
            }
        default:
            return state;
    }
}


export default ListReducer;