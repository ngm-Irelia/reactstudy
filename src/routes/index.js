import {
  Article,
  Settings,
  Users,
  Home,
  Notfound
} from '../views';

export const homeRouter = [
  {
    pathname:'/home',
    component: Home,
    title:'首页',
    isNav:true
  },
  {
    pathname:'/article',
    component: Article,
    title:"文章管理",
    isNav:true
  },
  {
    pathname:'/404',
    component: Notfound
  }
]

export const adminRouter = [
  {
    pathname:'/admin/user',
    component: Users,
    title:'用户管理',
    isNav:true
  },
  
  {
    pathname:'/admin/settings',
    component: Settings,
    title:'用户设置',
    isNav:true
  }
]