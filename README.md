#部署到nginx服务器上的方式：
yum install -y nginx   #命令安装nginx 服务器 /etc/nginx/ 

systemctl start nginx 开启nginx服务
systemctl status nginx 可以查看nginx的运行状态
systemctl stop nginx 可以 关闭nginx 服务
systemctl restart nginx   重启nginx服务

#ngm私库搭建 
npm i -g cnpmjs.org   #安装完成会提示你安装在了哪，记得看哦 /usr/local/nodejs/lib/node_modules

用户名、密码进入数据库
mysql -uroot -p123456

创建cnpm所需的数据库
create database cnpmjs;

切换到cnpm数据库
use cnpmjs;

导入cnpm数据库配置文件
source /usr/local/nodejs/lib/node_modules/cnpmjs.org/docs/db.sql;

## 刷新服务守护进程
systemctl daemon-reload
## 启动 cnpmjs.org 服务
systemctl start cnpmjs.org.service
## 设置开机启动
systemctl enable cnpmjs.org.service
## 查看启动日志
journalctl -u cnpmjs.org.service

## 如果上面几条不行， 使用 bin 下面的cli.js
./cli.js start 
./cli.js stop

#遇到问题 
## cnpmjs.org 总是自己Killed
原因是内存不足   操作如下：

检查swap空间
swapon -s   

创建swap分区文件
sudo dd if=/dev/zero of=swapfile bs=1024 count=1048576 

格式化新建的SWAP分区
sudo mkswap /var/swapfile

将swap文件变成swap分区
sudo swapon /var/swapfile

swapon -s  管用!!

## 连接不上mysql
先登陆到mysql：  
./mysql -uroot -p

选择数据库
use mysql

查看用户表
SELECT host,user from user;

设置
GRANT ALL ON *.* TO 'root'@'%';

##顺便 修改下用户ngm的密码：
update user set authentication_string=password("niuguimin") where user='ngm';
报错：  You are using safe update mode and you tried to update a table without a WHERE that uses a KEY column 
意思是没有主键不能更新，我们降低下数据库的安全等级：
SET SQL_SAFE_UPDATES = 0;
重复上面操作：ok
flush privileges;  刷新


#cnpmjs.org 上传 自己的包

添加用户
npm adduser --registry=http://47.94.8.210:7001
登陆一下
npm login --registry=http://47.94.8.210:7001
发布
npm publish --registry=http://47.94.8.210:7001

也可以加上 --verbose参数来查看更详细的日志。

安装测试一下，转到其他目录，输入命令：
1 npm install fm --registry=http://47.94.8.210:7001

#redux 27 28课程后面学习，自己实现一个简易redux
npm i redux -S
npm i redux-thunk -S

# react-router 
npm i react-router-dom -S

#antd
npm i antd -S
npm i react-app-rewired customize-cra   #需要使用这两个组件，更好的使用antd
npm i babel-plugin-import -D
npm i less less-loader -D

# 让cra支持@装饰器写法
npm i @babel/plugin-proposal-decorators -D

1.不管你需要配置什么，我们最好的方式就是使用 react-app-rewired 这个包来对cra创建的项目进行轻微的配置调整
2.安装之后，在package.json 里面把 react-scripts替换成 react-app-rewired
3.在根目录创建一个config-overrides.js
4.安装一个customize-cra。

#路由懒加载
npm i react-loadable -S

#普通方式
/* this.setState({
  isLiked: !this.state.isLiked
}) */

/**
  * 两个参数，第一个可以是函数，第二个是回调函数
  * @params prevState 上一次的 state
  * @params props 上一次的 porps
  */
this.setState((prevState,props) => {
  return {
    isLiked: !prevState.isLiked
  }
},()=>{
  //因为setState是异步的，所以，只有在这里 这个回调函数里面，才能拿到最新的state

})

#context 


#高阶组件    函数返回值是一个新的组件

npm install react-app-rewired --save-dev

#对react-app-rewired进行简单的配置
npm install customizr-cra --save-dev 


# ------------------------ 官网学习 ------------------------------------


## 1 数据流 自上而下

## 2 事件处理

### 1) React 中不能通过返回 false 的方式阻止默认行为。你必须显式的使用 preventDefault 
例如，传统的 HTML 中阻止链接默认打开一个新页面，

function ActionLink() {
  function handleClick(e) {
    e.preventDefault();
    console.log('The link was clicked.');
  }

  return (
    <a href="#" onClick={handleClick}>
      Click me
    </a>
  );
}

### 2) 必须谨慎对待 JSX 回调函数中的 this
通常情况下，如果你没有在方法后面添加 ()，例如 onClick={this.handleClick}，你应该为这个方法绑定 this。

#### a： 绑定this有多种方法： 1.在构造函数中 this.func = this.func.bind( this );

#### b： 2.在DOM元素中 <button onClick={this.del.bind(this, id)}>Delete </button>

#### c： class fields语法   这是 *实验性* 语法 。如果不支持就换一种方式
class LoggingButton extends React.Component {
  // 此语法确保 `handleClick` 内的 `this` 已被绑定。
  // 注意: 这是 *实验性* 语法。
  handleClick = () => {
    console.log('this is:', this);
  }

  render() {
    return (
      <button onClick={this.handleClick}>
        Click me
      </button>
    );
  }
}

#### d： 在回调中使用箭头函数  ， 不建议，如果是传给子组件，会造成不必要的渲染
class LoggingButton extends React.Component {
  handleClick() {
    console.log('this is:', this);
  }

  render() {
    // 此语法确保 `handleClick` 内的 `this` 已被绑定。
    return (
      <button onClick={(e) => this.handleClick(e)}>
        Click me
      </button>
    );
  }
}


## 3 条件渲染

### if的方式
### 与运算符 &&
 true && expression 总是会返回 expression,   （expression其实就是要return的内容
 而 false && expression 总是会返回 false
### 三目运算符

## 4 阻止组件渲染
###  类组件中让 render 方法直接返回 null
###  函数组件中让 return 直接返回 null



## 5 列表 & Key
如果列表项目的顺序可能会变化，我们不建议使用索引来用作 key 值，因为这样做会导致性能变差，还可能引起组件状态的问题。
大概原因是这样  比如 数组 [{id:'t1',name;"aa"},{id:'t2',name;"bb"},{id:'t3',name;"cc"}]
       id是固定不变的！
如果我们使用数组下标，作为key，生成dom元素  0 -> aa   1-> bb  2 -> cc
如果数组内容顺序发生变化，[{id:'t4',name;"dd"},{id:'t1',name;"aa"},{id:'t2',name;"bb"},{id:'t3',name;"cc"}]

重新渲染dom元素后 key的对应： 0 -> dd  1 -> aa   2-> bb  3 -> cc

根据diff算法，有四处不同！！ 

如果我们一开始就使用id作为key，这时候，diff算法只会检测到 一处 dd 的不同。 性能会有很大差距


## 6 表单

### 受控组件   被 React 以 state 控制取值的表单输入元素就叫做“受控组件”。
<input type="text">, <textarea> 和 <select> 等

###  【Formik 学习】 【非受控组件 学习】 
https://jaredpalmer.com/formik/
https://zh-hans.reactjs.org/docs/uncontrolled-components.html


## 7 状态提升  反向数据流
 比如有两个组件，他们想根据彼此的一个数据状态进行对应操作。 我们需要 进行状态提升。
 把他们共用的状态，都提升到父组件中。 通过调用父组件的函数，修改父组件中的数据。

## 8 组合 vs 继承

组合： 使用props.children ，加载 父组件中的内容

不推荐继承

# -------------------------- 高级指引 ----------------------

## 1 网络无障碍辅助功能 （Accessibility，也被称为 a11y 

### 语义化的 HTML
使用 Fragment 解决无效dom元素的问题
import React, { Fragment } from 'react';

<Fragment>
  <dt>{item.term}</dt>
  <dd>{item.description}</dd>
</Fragment>

生成的dom树中，不会有Fragment

### 无障碍表单

for 在 JSX 中应该被写作 htmlFor：
<label htmlFor="namedInput">Name:</label>
<input id="namedInput" type="text" name="name"/>

DOM 元素的 Refs 在 React 中设置焦点
this.inputElement = React.createRef();

 <CustomTextInput inputRef={this.inputElement} />  可以这样把父组件元素传给子组件


## 2 Context 
 很多不同层级的组件需要访问同样一些的数据 时使用，减少数据的逐级传递
 缺点： 使得组件的复用性变差

#### 注意点：

 Provider 接收一个 value 属性，传递给消费组件。
 一个 Provider 可以和多个消费组件有对应关系。
 多个 Provider 也可以嵌套使用，里层的会覆盖外层的数据


#### 使用方式：

1. 
const MyContext = createContext();
const { Provider,Consumer } = MyContext;

Bar.contextType = MyContext;  //组件Bar想使用其context的值，
需要在其本身的contextType 绑定对应的 context

使用时： let value = this.context;

2.   推荐第二种！！！
使用 Context.Consumer
<MyContext.Consumer>
  {value => /* 基于 context 值进行渲染*/}
</MyContext.Consumer>

一个小的注意点： Provider的value最好是 传入state中的数据。 而不是直接传入一个对象。
因为在其父元素渲染的时候，这里可能会造成不必要的重新渲染。

## 3 refs转发

const FancyButton = React.forwardRef((props, ref) => (
  <button ref={ref} className="FancyButton">
    {props.children}
  </button>
));

// 你可以直接获取 DOM button 的 ref：
const ref = React.createRef();
<FancyButton ref={ref}>Click me!</FancyButton>;

这样，使用 FancyButton 的组件可以获取底层 DOM 节点 button 的 ref ，并在必要时访问，就像其直接使用 DOM button 一样。

### 步骤1：通过调用 React.createRef 创建一个 ref 并将其赋值给 ref 变量

### 步骤2：通过指定ref为JSX属性，将其向下传递给 <FancyButton ref={ref}>。

### 步骤3：React 传递ref给fowardRef内函数 (props, ref) => ...，作为其第二个参数。

### 步骤4：我们向下转发该 ref 参数到 <button ref={ref}>，将其指定为 JSX 属性。

### 步骤5：当 ref 挂载完成，ref.current 将指向 <button> DOM 节点。

第二个参数 ref 只在使用 React.forwardRef 定义组件时存在。常规函数和 class 组件不接收 ref 参数，且 props 中也不存在 ref。

Ref 转发不仅限于 DOM 组件，你也可以转发 refs 到 class 组件实例中。


后半部分涉及到高阶组件，到时候回看

## 4 Fragments   允许你将子列表分组，而无需向 DOM 添加额外节点

短语法  <> </>

## 5 高阶组件HOC 
它是一种基于 React 的组合特性而形成的设计模式。 高阶组件是参数为组件，返回值为新组件的函数

### 注意事项

#### 不要在 render 方法中使用 HOC
React 的 diff 算法（称为协调）使用组件标识来确定它是应该更新现有子树还是将其丢弃并挂载新子树。 如果从 render 返回的组件与前一个渲染中的组件相同（===），则 React 通过将子树与新子树进行区分来递归更新子树。 如果它们不相等，则完全卸载前一个子树。

render() {
  // 每次调用 render 函数都会创建一个新的 EnhancedComponent
  // EnhancedComponent1 !== EnhancedComponent2
  const EnhancedComponent = enhance(MyComponent);
  // 这将导致子树每次渲染都会进行卸载，和重新挂载的操作！
  return <EnhancedComponent />;
}

这不仅仅是性能问题 - 重新挂载组件会导致该组件及其所有子组件的状态丢失。

#### Refs 不会被传递

#### 务必复制静态方法