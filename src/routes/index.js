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
    component: Home
  },
  {
    pathname:'/article',
    component: Article
  },
  {
    pathname:'/404',
    component: Notfound
  }
]

export const adminRouter = [
  {
    pathname:'/admin/user',
    component: Users
  },
  
  {
    pathname:'/admin/settings',
    component: Settings
  }
]