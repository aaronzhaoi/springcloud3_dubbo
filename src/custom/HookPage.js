import React, {useEffect, useState} from 'react';
import UseClock from "./useClock";

function HookPage(props) {

    // 顶一个count的state变量，初始化为0
    const [count, setCount] = useState(0);
    const [myDate, setDate] = useState(new Date());

    // 和didiMount，didUpdate功能类似
    useEffect(() => {
        console.log("effect")
        // 只需要在count发生变化时才执行
        document.title = `点击率:${count}`;
    }, [count]);

    useEffect(() => {
        console.log("Date");
        // 只需要在did mount时执行即可
        const timer = setInterval(() => {
            setDate(new Date())
        }, 1000);

        // 使用定时器后要记得清楚，否则会内存泄漏，class在will unmount中清除，function在return中清除
        return ()=>clearInterval(timer);

    }, []);


    return (
        <div>
            <h3>Hook Page</h3>
            <button onClick={() => setCount(count + 1)}>add</button>
            <p>{UseClock().toLocaleTimeString()}</p>
        </div>
    );
}

export default HookPage;