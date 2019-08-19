import {
  Article,
  Settings,
  Users,
  Home,
  Login,
  Notfound,
  Edit
} from '../views';

export const homeRouter = [
  {
    pathname:'/login',
    component: Login,
    title:'登录',
    isNav:true
  },
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
    isNav:true,
    level:1,
  },
  
  {
    pathname:'/admin/settings',
    component: Settings,
    title:'用户设置',
    isNav:true,
    level:1,
  },

  {
    pathname:'/admin/user/edit',
    component: Edit,
    title:'用户修改',
    isNav:true,
    level:2,
  }
]