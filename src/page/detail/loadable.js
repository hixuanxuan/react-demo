import React from 'react'
import Loadable from 'react-loadable';
import Loading from '../../components/Loading/Loading'

const LoadableComponent = Loadable({
    //要加载的就是当前目录下面的的detail.js组件
    //这是个异步组件
  loader: () => import('./detail.js'),
  //loading是一个函数，函数返回一个组件
  loading(){
      return  (
        <Loading></Loading>
      )
  }
});

export default class App extends React.Component {
  render() {
    return <LoadableComponent/>;
  }
}