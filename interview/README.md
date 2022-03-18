## 什么情况下需要对一个对象进行克隆？

一般在需要两个不同实例互相不影响的情况下，需要进行深拷贝

比如用户上传的数据，我们需要对用户的数据进行处理，但是又不希望更改用户上传的数据

## 如何使用既有方法实现？

在一些新的浏览器版本中可以直接使用`structuredClone`

兼容性在60%作用

[Can I use](https://caniuse.com/?search=structuredClone)

考虑到兼容性问题，我们可以编写polyfill，或考虑使用JQuery或者第三方克隆库`just-clone`

## 请使用js基础代码写一个通用方法实现深克隆，不使用既有快捷方法

[deepClone function](./dp.js)


## 求两个一维数组的交集，应该怎么实现？

[intersection function](./intersection.ts)

## 要实现一个功能：多级组织机构的展示，后端给的接口数据+示例：

```js
[
    {id: 1, name: '”开发部”', parentId: 0},
    {id: 2, name: '部门1', parentId: 1},
    {id: 3, name: '部门2', parentId: 1},
    {id: 4, name: '部门3', parentId: 3},
    {id: 5, name: '部门4', parentId: 4},
]

```
实现代码如下：

[this](./forest.ts)