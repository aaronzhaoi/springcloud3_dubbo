import React, {PureComponent, useCallback, useState} from 'react';

function UseCallFun() {
    const [counter, setCounter] = useState(0);

    const [value, setValue] = useState("");

    const addClick = useCallback(() => {
        console.log("computer");
        let sum = 0;
        for (let i = 0; i < counter; i++) {
            sum += 1;
        }
        return sum;
    }, [counter])

    return (
        <div>
            <h3>UseCallFun Page</h3>
            <p>count:{counter}</p>
            <button onClick={() => setCounter(counter + 1)}>Add</button>
            <p/>
            <input value={value} onChange={event => setValue(event.target.value)}/>
            <Child addClick={addClick()}/>
        </div>
    );
}

class Child extends PureComponent {
    render() {
        console.log("child render");
        const {addClick} = this.props;
        return (
            <div>
                <h3>Child</h3>
                <button onClick={() => console.log("child addClick")
                }>add
                </button>
            </div>
        )
    }
}


export default UseCallFun;