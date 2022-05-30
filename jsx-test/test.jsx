
      //   const name = "asiye"
      //   const element = <h1> hello , {name} </h1>

      //  jsx
      function formatName(user) {
        return user.firstName + "" + user.lastName
      }

      const user = {
        firstName: " zero",
        lastName: "bug",
      }

      const element = <h1>Hello , {formatName.user}</h1>

      const root = ReactDom.createRoot(document.getElementById("root"))

      root.render(<h1> Hello world !!!</h1>)


      //  if 语句或者 for 循环中可以用jsx
      function getGreeting(user){
   if(user) {
       return <h1>Hello , {formatName(user)}!</h1>
   }
   return <h1>Hello , Stranger. </h1>
      }


      //  你可以通过使用引号，来将属性值指定为字符串字面量：
      const element1 = <a href="http://ww.reactjs.org"> Link </a>
      //也可以使用大括号，来在属性值中插入一个 JavaScript 表达式：
    const element2 = <img src={user.avatarUrl} />
            //     警告：
            // 因为 JSX 语法上更接近 JavaScript 而不是 HTML，所以 React DOM 使用 camelCase（小驼峰命名）来定义属性的名称，而不使用 HTML 属性名称的命名约定。
            // 例如，JSX 里的 class 变成了 className，而 tabindex 则变为 tabIndex。

            //JSX 标签里能够包含很多子元素:
            const element3 = (
                <div>
                <h1> hello world !!</h1>
                <button type="primary" size="mini">Button</button>
                <input type="text" placeholder="please into the text you need"/>
                </div>
               
            )

            //JSX 防止注入攻击
            // 你可以安全地在 JSX 当中插入用户输入内容：
    const title = response.potentiallyMaliciousInput
    // 直接使用是安全的
    const element4 = <h1>{title}</h1>
    /* 
     React DOM 在渲染所有输入内容之前，默认会进行转义。它可以确保在你的应用中，
    永远不会注入那些并非自己明确编写的内容。所有的内容在渲染之前都被转换成了字符串。
    这样可以有效地防止 XSS（cross-site-scripting, 跨站脚本）攻击。
    */

// Babel 会把 JSX 转译成一个名为 React.createElement() 函数调用。
// 以下两种示例代码完全等效： 
            const element5 = (
                <h1 className="greeting">Hello world ! </h1>
            )      

            const element51 = React.createElement(
                'h1',
                {className:"greeting"},
                'hello world!'
            ) 
            //  上面的 element5 和element51 是等价的 （the same result ）

            