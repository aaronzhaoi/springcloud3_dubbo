import React, {useEffect, useState} from "react";


function ClockFunction(props) {

    const [myDate, setMyDate] = useState(new Date());

    // 相当于 componentDidMount componentWillUnmount componentDidUpdate 三个组件的功能
    useEffect(() => {
        const timer = setInterval(() => {
            setMyDate(new Date());
        }, 1000);
        return () => clearInterval(timer)
    }, []);

    return <div>
        <h3>函數时钟组件</h3>
        <p>{myDate.toLocaleTimeString()}</p>
    </div>
}

export default ClockFunction;