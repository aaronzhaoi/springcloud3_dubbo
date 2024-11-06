import React, {Component} from "react";

 class ClockComponent extends Component {
    constructor(props) {
        super(props);
        // 存储状态
        this.state = {
            myDate: new Date()
        }
    }

    // 定时刷新数据
    componentDidMount() {
        this.timer = setInterval(() =>
            // 更新状态
            this.setState({myDate: new Date()}), 1000)
    }

    // 组件卸载
    componentWillUnmount() {
        clearInterval(this.timer)
    }


     render() {
        const {myDate} = this.state;
        return <div>
            <h3>时钟组件</h3>
            <p>{myDate.toLocaleTimeString()}</p>
        </div>
    }

}
export default ClockComponent;