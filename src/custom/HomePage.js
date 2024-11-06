import React, {Component} from 'react';
import Layout from "./Layout";

class HomePage extends Component {
    render() {
        return (
            <Layout showTopBar={true} showBottomBar={true} title={"商城首页"}>
                <div>
                    <h3>HomePage</h3>
                </div>
            </Layout>
        );
    }
}

export default HomePage;