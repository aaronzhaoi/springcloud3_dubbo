import {useEffect, useState} from 'react';

// 自定义hook必须以use开头，只能在函数最外层调用hook，不能在循环，判断语句，子函数中使用
// 只能在react函数组件中使用，不要在其他js函数中调用
function UseClock() {
    const [myDate, setDate] = useState(new Date());

    useEffect(() => {
        console.log("Date");
        // 只需要在did mount时执行即可
        const timer = setInterval(() => {
            setDate(new Date())
        }, 1000);

        // 使用定时器后要记得清楚，否则会内存泄漏，class在will unmount中清除，function在return中清除
        return () => clearInterval(timer);

    }, []);

    return myDate;
}

export default UseClock;