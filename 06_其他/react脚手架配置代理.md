# react脚手架配置代理总结



## 方法一

> 在package.json中追加如下配置

```json
"proxy":"http://localhost:5000"
```

说明：

1. 优点：配置简单，前端请求资源时可以不加任何前缀。
2. 缺点：不能配置多个代理。
3. 工作方式：上述方式配置代理，当请求了3000不存在的资源时，那么该请求会转发给5000 （优先匹配前端资源）



## 方法二

1. 第一步：创建代理配置文件

   ```
   在src下创建配置文件：src/setupProxy.js
   ```

2. 编写setupProxy.js配置具体代理规则：

   ```js
   const proxy = require('http-proxy-middleware')
   
   module.exports = function(app) {
     app.use(
       proxy('/api1', {  //api1是需要转发的请求(所有带有/api1前缀的请求都会转发给5000)
         target: 'http://localhost:5000', //配置转发目标地址(能返回数据的服务器地址)
         changeOrigin: true, //控制服务器接收到的请求头中host字段的值
         /*
         	changeOrigin设置为true时，服务器收到的请求头中的host为：localhost:5000
         	changeOrigin设置为false时，服务器收到的请求头中的host为：localhost:3000
         	changeOrigin默认值为false，但我们一般将changeOrigin值设为true
         */
         pathRewrite: {'^/api1': ''} //去除请求前缀，保证交给后台服务器的是正常请求地址(必须配置)
       }),
       proxy('/api2', { 
         target: 'http://localhost:5001',
         changeOrigin: true,
         pathRewrite: {'^/api2': ''}
       })
     )
   }
   ```

说明：

1. 优点：可以配置多个代理，可以灵活的控制请求是否走代理。
2. 缺点：配置繁琐，前端请求资源时必须加前缀。









## 复习

原生事件绑定：

以下是三种方式：

![image-20220311093740455](C:\Users\rtt\AppData\Roaming\Typora\typora-user-images\image-20220311093740455.png)

 第三种方式最好，比较推荐的



this 指向：

![image-20220311095913483](C:\Users\rtt\AppData\Roaming\Typora\typora-user-images\image-20220311095913483.png)

![image-20220311102001706](C:\Users\rtt\AppData\Roaming\Typora\typora-user-images\image-20220311102001706.png)



- react 中如果要改变状态，必须要用satState() 来更改，且更新是一种合并，不是替换！！！！

 如：

```js
const isHot = this.state.isHot
this.setState ({isHot:!isHot})

XXXXX
this.state.isHot = !isHot  //   这样改状态是错误的！！！  千万别写！！！！
```



`constructor`:   是构造器，    构造器要调用一次！！！

`render`  调用1 + n 次  （1 是初始化的那次，  n 是状态更新的次数）

- 展开运算符：

```js
<script type="text/javascript">
    let arr1 = [1,3,5,7]
    let arr2 = [2,4,6,8]
console.log(...arr1)    //  展开一个数组
let arr3 = [...arr1 , ...arr2]   //  链接数组；   也就是 合并 arr1 和 arr2  里的数据，展现在 arr3 中


//  在函数中使用
function sum (...numbers) {
    //  reduce  方法是有返回值的
  return  numbers.reduce((preValue,currentValue) => {
        return preValue  + currentValue   //  以前的值 + 当前的值
    })
}

console.log (sum(1,2,3,4));

let person = {namme:'tom',age:18}


</script>
```

![image-20220311115739529](C:\Users\rtt\AppData\Roaming\Typora\typora-user-images\image-20220311115739529.png)

批量传递：

![image-20220311115837408](C:\Users\rtt\AppData\Roaming\Typora\typora-user-images\image-20220311115837408.png)





required:  必传的



对 props 限制

![image-20220311134700152](C:\Users\rtt\AppData\Roaming\Typora\typora-user-images\image-20220311134700152.png)







SETP1： 在 emc-web —> src—>APP —>Pages —> PostLogin —> router —> (具体写路径的文件夹中写路径) 如：pad.js

step2：  





refs:

![image-20220311161141736](C:\Users\rtt\AppData\Roaming\Typora\typora-user-images\image-20220311161141736.png)

