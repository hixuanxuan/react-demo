import { combineReducers } from 'redux';
import HeaderReducer from '../common/header/store/reducer'
import ListReducer from '../components/List/store/reducer'

const reducer = combineReducers({
	header: HeaderReducer,
	list:ListReducer
});

export default reducer;