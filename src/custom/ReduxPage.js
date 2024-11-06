import React, {Component} from 'react';
import store from "../store/counterReducer";

class ReduxPage extends Component {
    componentDidMount() {
        store.subscribe(() => {
            console.log("state发生变化");
            this.forceUpdate();
        })
    }

    render() {
        return (
            <div>
                <h3>Redux Page</h3>
                <p>{store.getState()}</p>
                <button onClick={() => store.dispatch({type: "ADD"})}>add</button>
            </div>
        );
    }
}

export default ReduxPage;