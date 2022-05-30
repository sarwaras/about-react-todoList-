//组件，从概念上类似于 JavaScript 函数。它接受任意的入参（即 “props”），并返回用于描述页面展示内容的 React 元素。

//定义组件最简单的方式就是编写 JavaScript 函数：
// 函数组件
function assembly(props){
    return <h1>hello , {props.name}</h1>
}

// class 组件：
class assembly extends React.Component{
    render (){
        return(
            <div>
                <h1>Hello , {this.props.name}</h1>
            </div>
        )
    }
}

//  渲染组件
 //  也没上渲染 "Hello ,Sara"
  function Welcome(props){
return <h1>Hello , {props.name}</h1>
  }

  const element = <Welcome name="Sara" />
  const root = ReactDOM.createRoot(document.getElementById("root"))
  root.render(element)

            /* 
            注意： 组件名称必须以大写字母开头。
            React 会将以小写字母开头的组件视为原生 DOM 标签。例如，<div /> 代表 HTML 的 div 标签，而 <Welcome /> 则代表一个组件，并且需在作用域内使用 Welcome。
            你可以在深入 JSX 中了解更多关于此规范的原因。
            */
    
    // 组合组件
                /* 
            组件可以在其输出中引用其他组件。这就可以让我们用同一组件来抽象出任意层次的细节。
            按钮，表单，对话框，甚至整个屏幕的内容：在 React 应用程序中，这些通常都会以组件的形式表示。
                */
 //  多次渲染Welcome组件的APP组件
        function App() {
            return(
                <div>
                    <Welcome name="Angela" />
                    <Welcome name="Sara" />
                    <Welcome name="Tima" />
                </div>
            )
        }
        function Welcome(props) {
            return <h1>Hello, {props.name}</h1>
        }

        const root1 = ReactDOM.createRoot(document.getElementById("root"))
        root1.render(<App/>)
