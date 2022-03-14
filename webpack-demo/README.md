## url-loader 和 file-loader

两者没啥区别，就是url-loader可以设置较小的资源自动base64，好像url-loader内部也是用到file-loader

file-loader 可以用来处理图片，字体

## 文件监听原理分析

轮训去判断文件的最后编辑时间是否发生变化。当某个文件发生了变化，并不会立刻告诉监听者，而是先缓存起来，等待一定时间段 aggregateTimeout，在这个时间段内，如果有其他的文件也发生了变化，那么他最终会把这些变化了的文件列表一起去构建，一起把构建的结果生成到 bundle 文件中去。

## 热更新

因为一般文件监听还要手动刷新，所以我们会选用热更新webpack-dev-server 来替代 文件监听

watch在本地磁盘文件，热更新在内存里面，所以构建速度会有更大的优势

使用 webpack-dev-middleware

将webpack输出的文件传输给服务器




## loader 和 plugin 的区别

> While loaders are used to transform certain types of modules, plugins can be leveraged to perform a wider range of tasks like bundle optimization, asset management and injection of environment variables.

相对于loader转换指定类型的模块功能，plugins能够被用于执行更广泛的任务比如打包优化、文件管理、环境注入等……

loader，它是一个转换器，将A文件进行编译成B文件，比如：将A.less转换为A.css，单纯的文件转换过程。

plugin是一个扩展器，它丰富了webpack本身，针对是loader结束后，webpack打包的整个过程，它并不直接操作文件，而是基于事件机制工作，会监听webpack打包过程中的某些节点，执行广泛的任务

至于 loader 的解析顺序为什么是**从右向左**的，原因其实只是Webpack选择了compose函数式编程方式，而不是pipe的方式而已。