# Redux

## 核心概念

1. State: 只读, 只能通过 action 修改
2. Reducer: 函数, 对 setState 处理
3. Action: 对象, 事件行为, 改变 State

## Redux 安装

```
yarn add redux --save
yarn add react-redux --save
```

## Redux 创建流程

1. 创建 Action 模块
2. 创建 Reducer 模块
3. 创建 Store 模块
4. 通过 connect 方法将 React 和 Redux 连接起来
5. 添加为项目根组件, 用于数据存储
