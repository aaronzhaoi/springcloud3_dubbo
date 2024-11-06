import React, {Component} from 'react';
import {connect} from "react-redux";


export default connect(
    // map state to props 把state映射到props
    state => ({num: state}),
    // map dispatch to props 把dispatch映射到props
    {
        add: () => ({type: "ADD"})
    }
)(class ReactReduxPage extends Component {
        render() {
            const {num, dispatch, add} = this.props;
            console.log("props", this.props);
            return (
                <div>
                    <h2>React Redux Page</h2>
                    <p>{num}</p>
                    {/**下面方法二选一*/}
                    <button onClick={() => dispatch({type: "ADD"})}>add</button>
                    <button onClick={add}>Add2</button>
                </div>
            );
        }
    }
)