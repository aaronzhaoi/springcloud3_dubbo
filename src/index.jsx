// 负责逻辑控制，数据转换到虚拟vdom
import React from 'react';
// reactdom渲染实际dom，vdom转换到dom
import ReactDOM from 'react-dom/client';
// 使用到的组件
import App from './App';
import store from "./store/counterReducer";
import {Provider} from "react-redux";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <Provider store={store}>
            <App/>
        </Provider>
    </React.StrictMode>
);
