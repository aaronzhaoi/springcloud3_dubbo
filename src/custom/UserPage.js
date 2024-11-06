import React, {Component} from 'react';
import Layout from "./Layout";

class UserPage extends Component {
    render() {
        return (
            <Layout showTopBar={true} showBottomBar={true} title={"用户中心"}>
                <div>
                    <h1>用户中心</h1>
                </div>
            </Layout>
        );
    }
}

export default UserPage;