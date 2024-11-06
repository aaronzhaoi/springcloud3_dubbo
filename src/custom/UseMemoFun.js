import React, {useMemo, useState} from 'react';

function UseMemoFun() {

    const [counter, setCounter] = useState(0);

    const [value, setValue] = useState("");

    const expensive = useMemo(() => {
        console.log("computer");
        let sum = 0;
        for (let i = 0; i < counter; i++) {
            sum += 1;
        }
        return sum;
        // 使用useMemo达到数据更新依赖的关系
    }, [counter]);


    return (
        <div>
            <h3>UseMemo Page</h3>
            <p>count:{counter}</p>
            <button onClick={() => setCounter(counter + 1)}>Add</button>
            <p>expensive: {expensive}</p>
            <input value={value} onChange={event => setValue(event.target.value)}/>
        </div>
    );
}

export default UseMemoFun;