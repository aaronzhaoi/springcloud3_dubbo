import React, {Component} from "react";

class PageLifeCycleComponent extends Component {
    /*static  defaultProps = {
        msg: "omg"
    };

    static propTypes = {
        msg: PropTypes.string//.isRequired
    }
*/
    constructor(props) {
        super(props);
        this.state = {
            counter: 0
        }
        console.log("constructor")
    }

    componentWillMount() {
        console.log("componentWillMount")
    }

// 初始值范围判断
    static getDerivedStateFromProps(props, state) {
        console.log("getDerivedStateFromProps")
        const {counter} = state;
        console.log("getDerivedStateFromProps", counter)
        return counter > 5 ? {counter: 0} : null;
    }


    componentDidMount() {
        console.log("componentDidMount")
    }

    shouldComponentUpdate(nextProps, nextState, nextContext) {
        console.log("shouldComponentUpdate", nextState);
        return true;
    }

    componentWillUpdate(nextProps, nextState, nextContext) {
        console.log("componentWillUpdate");
        return true;
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log("componentDidUpdate");
        return true;
    }

    addCounter = () => {
        this.setState({
                counter:
                    this.state.counter + 1
            }
        );
    };

    render() {
        console.log("render", this.props);
        return (
            <div>
                <h2>PageLifeCycle</h2>
                <p>{this.state.counter}</p>
                <button onClick={this.addCounter}>改变counter</button>
            </div>
        )
    }


}

export default PageLifeCycleComponent;