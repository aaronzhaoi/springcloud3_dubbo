import React, {Component} from 'react';
import {BrowserRouter as Router, Link, Route, Routes} from "react-router-dom";
import ReduxPage from "./ReduxPage";
import UserPage from "./UserPage";
import NavigationBar from "./NavigationBar";
import HomePage from "./HomePage";
import PureComponentPage from "./PureComponentPage";
import HookPage from "./HookPage";
import UseMemoFun from "./UseMemoFun";
import UseCallFun from "./UseCallFun";

class RouterPage extends Component {
    render() {
        return (
            <div>
                <h3>Router Page</h3>
                <Router>
                    <Link to="/">首页</Link>
                    <p></p>
                    <Link to="/ReduxPage" target="_blank">ReduxPage 打开新的标签</Link>
                    <p></p>
                    <Link to="/UserPage">UserPage</Link>
                    <p></p>
                    <Link to="/NavigationBar">NavigationBar</Link>
                    <p></p>
                    <Link to="/PureComponentPage">PureComponentPage</Link>
                    <p></p>
                    <Link to="/HookPage">HookPage</Link>
                    <p></p>
                    <Link to="/UseMemoFun">UseMemoFun</Link>
                    <p></p>
                    <Link to="/UseCallFun">UseCallFun</Link>
                    <Routes>
                        <Route exact path="/" element={<HomePage/>}/>
                        <Route exact path="/ReduxPage" element={<ReduxPage/>}/>
                        <Route exact path="/UserPage" element={<UserPage/>}/>
                        <Route exact path="/NavigationBar" element={<NavigationBar/>}/>
                        <Route exact path={"/PureComponentPage"} element={<PureComponentPage/>}/>
                        <Route exact path={"/HookPage"} element={<HookPage/>}/>
                        <Route exact path={"/UseMemoFun"} element={<UseMemoFun/>}/>
                        <Route exact path={"/UseCallFun"} element={<UseCallFun/>}/>
                    </Routes>
                </Router>
            </div>
        );
    }
}

export default RouterPage;