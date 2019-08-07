import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './store';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import zhCN from 'antd/lib/locale-provider/zh_CN';
import { ConfigProvider } from 'antd';
import App from './App';


ReactDOM.render(
  <ConfigProvider locale={zhCN} >
    <Provider store={store}>
      <Router>
        <Route component={App} path="/" />
      </Router>
    </Provider>
  </ConfigProvider>
  , 
  document.getElementById('root')
);