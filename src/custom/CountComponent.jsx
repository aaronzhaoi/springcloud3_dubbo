import React, {Component} from "react";


class CountComponent extends Component {

    constructor(props) {
        super(props);
        this.state = {
            counter: 0
        };
    }

    componentDidMount() {
        // this.changeCount(1)
        // 绑定原生事件
        document.getElementById("myClick").addEventListener('click', this.addCount)
    }

    changeCount = vl => {
        // setState在批量合成事件和生命周期函数中是异步执行的，这样可以优化性能  setstate的更新是批量更新，后面的时间会覆盖前面的时间
        /* this.setState({
             counter: this.state.counter + vl
         }, () => {
             console.log("count", this.state.counter) // 通过callback实时获取数据值
         });*/
        // 这个方法可以使事件顺序调用
        this.setState((state) => {
            return {
                counter: state.counter + vl
            }
        })
    };


    addCount = () => {
        /* setTimeout(() => {
             this.changeCount(1)
         }, 0)*/
        // setstate的更新是批量更新，后面的时间会覆盖前面的时间,如果想想链式调用，使用新方法
        this.changeCount(1)
        this.changeCount(2)
    }

    render() {
        return <div>
            <h2>计数器</h2>
            <button onClick={this.addCount}>{this.state.counter}</button>
            <button id="myClick">原生事件*{this.state.counter}</button>
        </div>
    }
}

export default CountComponent;