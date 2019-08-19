import Loadable from 'react-loadable';

//import Loadable from './loadable'; // 自己模拟简易的loadable

import { Loading } from '../components';
// import { Users }  from './Users';
// import { default as Home } from './Home';
// import { default as Article } from './Article';
// import { default as Settings } from './Settings';
// import { default as Notfound } from './Notfound';
//懒加载在这配置
const Users = Loadable({
  loader: ()=> import('./Users'),
  loading:Loading
})

const Edit = Loadable({
  loader: ()=> import('./Users/edit'),
  loading:Loading
})

const Home = Loadable({
  loader: ()=> import('./Home'),
  loading:Loading
})

const Login = Loadable({
  loader: ()=> import('./Login'),
  loading:Loading
})

const Article = Loadable({
  loader: ()=> import('./Article'),
  loading:Loading
})

const Settings = Loadable({
  loader: ()=> import('./Settings'),
  loading:Loading
})

const Notfound = Loadable({
  loader: ()=> import('./Notfound'),
  loading:Loading
})

export { 
  Users,
  Home,
  Login,
  Settings,
  Article,
  Notfound,
  Edit
}