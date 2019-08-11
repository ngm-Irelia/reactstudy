import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './store';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import zhCN from 'antd/lib/locale-provider/zh_CN';
import { ConfigProvider } from 'antd';
import App from './App';

import { homeRouter } from './routes';

ReactDOM.render(
  <ConfigProvider locale={zhCN} >
    <Provider store={store}>
      <Router>
        <Switch>

          <Route path="/admin" render={ (routrtProps)=> {
            //TODO: 可以在这做权限， 需要登陆才能访问admin
            console.log("在这做了权限判断 here app")
            return <App {...routrtProps} />
          }} />

          {
            homeRouter.map( route =>{
              return <Route key={route.pathname} path={route.pathname} component={route.component} />
            })
          }

          <Redirect to="/admin" from='/' exact />
          <Redirect to="/404" />
        </Switch>
      </Router>
    </Provider>
  </ConfigProvider>
  , 
  document.getElementById('root')
);