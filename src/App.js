import React from 'react';
import Header from './common/header'
import store from './store/index'
import {Provider} from 'react-redux'
import {BrowserRouter,Route,withRouter} from 'react-router-dom'
// import { browserHistory} from 'react-router'
import Home from './page/home/home'
import Detail from './page/detail/loadable'
import './App.css'
import './static/css/icon.css'


function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <div>
        <Header/>
        <BrowserRouter >
           <Route path='/' exact render={()=>{
             return (
              <Home></Home>
             )
           }}></Route>
           <Route path='/detail/:id' exact render={()=>{
             return (
               <Detail></Detail>
             )
           }}></Route>
        </BrowserRouter>
        </div>
     </Provider>
    </div>
  );
}

export default  App;
