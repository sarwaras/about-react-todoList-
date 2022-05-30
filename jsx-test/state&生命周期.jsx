const root = ReactDOM.createElement(document.getElementById("root"))

function Clock(props){
    return(
        <div>
            <h1>Hello , world ! </h1>
            <h2>  It is {props.date.toLocalTimeString()}</h2>
        </div>
    )
}

function tick() {
    root.render(<Clock date={new Date()}/>)
}

setInterval(tick ,1000)


//  函数组件转换成class组件
class Clock extends React.Component{
    render() {
        return(
            <div>
                <h1>Hello , world ! </h1>
                <h2> It is {this.props.date.toLocalTimeString()}</h2>
            </div>
        )
    }
}

//  向组件中添加局部的state
 class Clock extends React.Component{
     constructor(props){
super(props)
this.state = {date: new Date ()}
     }
     render() {
        return(
            <div>
                <h1>Hello , world ! </h1>
                <h2> It is {this.props.date.toLocalTimeString()}</h2>
            </div>
        )
    }
 }


 //通过以下方式将 props 传递到父类的构造函数中：
 constructor(props) {
    super(props);
    this.state = {date: new Date()};
  }

  // 将生命周期方法添加到 class 中

  class Clock extends React.Component{
      constructor(props){
      super(props)
      this.state = {date:new Date()}
      }
      //  挂载 mount
      componentDidMount(){
          // 计时器
          this.timerID = setInterval( () => this.tick(),1000)
      }
      //  卸载
      componentWillUnmount() {
          // 清除计时器
        clearInterval(this.timerID)
      }

      // 使用 this.setState() 来时刻更新组件 state：
      tick() {
          this.setState({
              date: new Date()
          })
      }
      render() {
          return(
             <div>
                <h1>Hello , world ! </h1>
                <h2> It is {this.props.date.toLocalTimeString()}</h2>
            </div>
          )
      }
  }

  const root2 = ReactDOM.createRoot(document.getElementById("root"))
  root2.render(<Clock />)


  //  不能直接修改state：
        //   错误示范：
        this.state.commet = 'hello'
        // 正确示范：
        this.state = ({commet: "hello"})

        // state 的更新可能是异步的
        //  正确示范：(箭头函数)
        this.setState((state,props) => {
            counter: state.counter + props.increment
        })
        //  正确示范：(普通函数)
        this.setState(function(state,props) {
            return{
                counter:state.counter + props.increment
            }
        })

        // state 的更新会被合并
        constructor(props) {
            super(props)
            this.state = {
                posts: [],
                comments: []
            }
        }
        //然后你可以分别调用 setState() 来单独地更新它们：
        componentDidMount() {
            fetchPosts().then(response => {
                this.setState({
                    posts:response.posts
                })
            })

            fetchComponents().then(response => {
                this.setState({
                    comments:response.comments
                })
            })
        }
        // 这里的合并是浅合并，所以 this.setState({comments}) 完整保留了 this.state.posts， 但是完全替换了 this.state.comments。


        //   数据是向下流动的
        /* 
        不管是父组件或是子组件都无法知道某个组件是有状态的还是无状态的，并且它们也并不关心它是函数组件还是 class 组件。
        这就是为什么称 state 为局部的或是封装的的原因。除了拥有并设置了它的组件，其他组件都无法访问
        */

        //  组件可以选择把它的state作为props向下传递他的子组件中：
        <formattedDate date={this.state.date} />

        //  组件会在其props中接受参数state，但是组件本身无法知道他是来自于 Clock 的 state ，或是 Cloock 的 props ，害所受的输入的：
        function formattedDate(props) {
            return <h2>It is {props.date.toLocalTimeString()}</h2>
        }


        // note:
        /* 
            这通常会被叫做“自上而下”或是“单向”的数据流。任何的 state 总是所属于特定的组件，
            而且从该 state 派生的任何数据或 UI 只能影响树中“低于”它们的组件。
            如果你把一个以组件构成的树想象成一个 props 的数据瀑布的话，那么每一个组件的 state 就像
            是在任意一点上给瀑布增加额外的水源，但是它只能向下流动。
        */


            //  没饿过组件都是真正的独立的：
            function App() {
                return(
                    <div>
                        <Clock />
                        <Clock />
                        <Clock />
                    </div>
                )
            }
            //每个 Clock 组件都会单独设置它自己的计时器并且更新它。
    




