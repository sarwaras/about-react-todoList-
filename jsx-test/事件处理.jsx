//  事件处理

        /*
        React 元素的事件处理和 DOM 元素的很相似，但是有一点语法上的不同：
        React 事件的命名采用小驼峰式（camelCase），而不是纯小写。
        使用 JSX 语法时你需要传入一个函数作为事件处理函数，而不是一个字符串。
        */

//  小提示： jsx中要有父元素
<div>


        <div>
        {/*  传统HTML 中： */}
            <button onClick="activateLasers()">
                Activate Lasers
            </button>

        {/*   React 中 （略微不同） */}
        <button onClick={activateLasers}> 
        Activate Lasers
            </button>
        </div>

        {/* 在 React 中另一个不同点是你不能通过返回 false 的方式阻止默认行为。你必须显式的使用 preventDefault。

        例如，传统的 HTML 中阻止表单的默认提交行为，你可以这样写： */}
        <form onsubmit="console.log('you click submit') ; return false ">
            <button type="submit">submit</button>
        </form>
    </div>

            {/*  在React 中，可能是这样的 */}
            function Form() {
            function handleSubmit(e) {
            e.preventDefault()
            console.log('you click submit');
                
            }
            return(
                <div>
                    <form onSubmit={handleSubmit}>
                        <button type="submit"> Submit </button>
                    </form>
                </div>
            )
        }

        /*
            在这里，e 是一个合成事件。React 根据 W3C 规范来定义这些合成事件，所以你不需要担心跨浏览器的兼容性问题。
            React 事件与原生事件不完全相同。如果想了解更多，请查看 SyntheticEvent 参考指南。
            使用 React 时，你一般不需要使用 addEventListener 为已创建的 DOM 元素添加监听器。
            事实上，你只需要在该元素初始渲染的时候添加监听器即可。
        */

            //当你使用 ES6 class 语法定义一个组件的时候，通常的做法是将事件处理函数声明为 class 中的方法。例如，下面的 Toggle 组件会渲染一个让用户切换开关状态的按钮：
            
            class Toggle extends React.Component{
                constructor(props){
                    super(props)
                    this.state = {isToggleOn: true}
                    //  为了在回调中使用`this`,这个绑定是必不可少的
                    this.handleClick = this.handleClick.bind(this)
                }

                handleClick() {
                    this.setState(prevState => ({
                        isToggleOn: !prevState.isToggleOn
                    }))
                }
                render(){
                    return(
                        <div>
                            <button onClick={this.handleClick}>
                                {this.state.isToggleOn ? 'ON' : 'OFF'}
                            </button>
                        </div>
                    )
                }
            }
            /*
            你必须谨慎对待 JSX 回调函数中的 this，在 JavaScript 中，class 的方法默认不会绑定 this。
            如果你忘记绑定 this.handleClick 并把它传入了 onClick，当你调用这个函数的时候 this 的值为 undefined
            */

            //这并不是 React 特有的行为；这其实与 JavaScript 函数工作原理有关。通常情况下，如果你没有在方法后面添加 ()，
            // 例如 onClick={this.handleClick}，你应该为这个方法绑定 this。

            class LoggingButton extends React.Component{
                  // 此语法确保 `handleClick` 内的 `this` 已被绑定。
                    // 注意: 这是 *实验性* 语法。
                    handleClick = () => {
                        console.log('this is ', this);
                    }

                    render() {
                        return(
                            <div>
                                <button onClick={this.handleClick}>click me</button>
                            </div>
                        )
                    }
            }

            // 如果你没有使用 class fields 语法，你可以在回调中使用箭头函数：
            class LoggingButton extends React.Component{
                handleClick() {
                    console.log('this is ', this);
                }
                render() {
                    // 此语法确保 `handleClick` 内的 `this` 已被绑定。
                    return(
                        <div>
                            <button onClick={ () => this.handleClick()}></button>
                        </div>
                    )
                }
            } 

            //  向时间处理程序传递参数

            /* 
            在循环中，通常我们会为事件处理函数传递额外的参数。例如，若 id 是你要删除那一行的 ID，以下两种方式都可以向事件处理函数传递参数：
            */
           <div>
           <button onClick={(e) => this.daleteRow(id,e)}>Delete Row</button>
           <button onClick={this.deleteRow.bind(this,id)}>Delete Row</button>
           </div>
           //上述两种方式是等价的，分别通过箭头函数和 Function.prototype.bind 来实现。






            





      