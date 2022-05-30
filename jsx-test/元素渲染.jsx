//  元素描述了你在屏幕上想看到的内容。
const element = <h1>Hello world!</h1>
// 与浏览器的 DOM 元素不同，React 元素是创建开销极小的普通对象。React DOM 会负责更新 DOM 来与 React 元素保持一致。

// 想要将一个 React 元素渲染到根 DOM 节点中，只需把它们一起传入 ReactDOM.createRoot()：
const element1 = <h1>Hello world !</h1>
const root = ReactDOM.creatRoot(
    document.getElementById("root")
)
root.render(element1)

//   计时器
const root1 = ReactDOM.creatRoot(
document.getElementById("root")
)

function tick() {
    const element2 = (
        <div>
<h1>Welcome to you </h1>
<h2>It is {new Date().toLocaleDateString()}.</h2>
<input type="text" placeholder="please input the text you nedd " />
<button typr="primary">Button</button>
        </div>
    )
    root.render(element2)
}

setInterval(tixk,1000)