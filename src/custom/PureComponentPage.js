import React, {Component} from 'react';

class PureComponentPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            counter: 0
        }
    }

    setCount = () => {
        this.setState({counter: 100})
    }

    // 只有在状态发生变化时才执行render打印页面的效果 pureCompent组件是一个签比较，比较一个对象
    shouldComponentUpdate(nextProps, nextState, nextContext) {
        return nextState.counter !== this.state.counter;
    }

    render() {
        const {counter} = this.state;
        console.log("render");
        return (
            <div>
                <h3>Pure Page Component</h3>
                <button onClick={this.setCount}>{counter}</button>
            </div>
        );
    }
}

export default PureComponentPage;