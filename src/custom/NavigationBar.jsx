import Pig from '../image/pig.jpg';
import ImageStyle from '../image/image_style.css';
import ClockComponent from './ClockComponent';
import ClockFunction from './ClockFunction';
import CountComponent from "./CountComponent";
import PageLifeCycleComponent from "./PageLifeCycleComponent";
import BottomBar from "./BottomBar";
import TopBar from "./TopBar";


const name = "Hello from React! this is my first React";
// 基本使用，使用花括号获取数据{}
const employee = {firstName: "zhang", lastName: "san"}

// JSX使用
const goodName = <div><h2>good</h2></div>

// 函数使用
function describeEmployee(obj) {
    return obj.firstName + obj.lastName;
}

// 判断语句
const show = false;

const items = ["apple", "pear", "orange", "desk"]

function NavigationBar() {
    return <div className={ImageStyle.pig}>
        {/** 基本使用，使用花括号获取数据{}**/}
        <h1>{name}</h1>
        {/** 函数使用 **/}
        <h1>{describeEmployee(employee)}</h1>

        {/** JSX使用 **/}
        {goodName}
        {/** 判断语句 **/}
        {show ? goodName : "登录"}
        {show && goodName}
        {/** 数组使用 diff时首先比较key值，同级别同类型的key不能重复，必须唯一**/}
        <div>
            {items.map(item => (<li key={item}>{item}</li>))}
        </div>
        <div><img src={Pig} className="pig" width={100} height={100}/></div>
        <div><img src={Pig} className={ImageStyle.pig_size} style={{width: "100px", height: "100px"}}/></div>
        <div>显示时钟</div>
        <ClockComponent/>
        <ClockFunction/>
        <CountComponent/>
        <PageLifeCycleComponent/>
        <TopBar/>
        <BottomBar/>
    </div>;
}

// 导出组件
export default NavigationBar;