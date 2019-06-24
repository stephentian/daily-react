# Guide 教程
> 教程 demo(参考 阮一峰的 React 教程 12 个 demo)

----

## 目录

- **[前言]()**
- **[1. Hello React](#1-hello-react)**
- **[2. JSX]()**
- **[JSX 一些坑]()**

### 前言

什么是 React, 官网的话是 用于构建用户界面的 JavaScript 库 (A JavaScript library for building user interfaces)

## 1. Hello React



## JSX 一些坑

### 1. JSX 代码注释

JS:
```
//
或
/* */

```

JSX：

```
{/* */}
或
{
  // ...
  // ...
}
```

### 2. class

在 JSX 中, 标签的 class 换成 `className`, 这为了防止和 JS 中的 `class` 冲突

### 3. html 解析

在文本框里输入一个`<h1>`标签，并进行渲染。默认是不会生效的。 只会把 `<h1>` 字符串打印到页面上。
如果想要它渲染成属性, 可以使用dangerouslySetInnerHTML属性解决

```
dangerouslySetInnerHTML = {{ __html:item }}
```


### 4. JSX 的 label 标签

正常 html：
```
<div>
    <label for="i">点击激活下面文本框</label>
    <input id="i" className="input" value={this.state.inputValue} onChange={this.inputChange.bind(this)} />
</div>
```

JSX:
```
<div>
    <label htmlFor="i">点击激活下面文本框</label>
    <input id="i" className="input" value={this.state.inputValue} onChange={this.inputChange.bind(this)} />
</div>
```
