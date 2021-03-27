import React from 'react';
import axios from "axios";
import { Layout, Menu, Breadcrumb, Divider, Typography, Space } from 'antd';
import GenerateButton from './GenerateButton'
import NRIC_Display from './NRIC_Display'

const { Header, Content, Footer } = Layout;
const { Title, Text } = Typography;


const MainPage = () => {
    const [loading, setLoading] = React.useState(false);
    const [currentNRIC, setCurrentNRIC] = React.useState("Click the button to generate a new NRIC");

    const handleClick = () => {
        setLoading(true);

        axios.get('/api/nric')
            .then((res) => {
                console.log("Add successful");
                setLoading(false);
                setCurrentNRIC(res)
            })
            .catch((error) => {
                console.log("Error", error);
                setLoading(false);
            })
    }


    return (
        <Layout className="layout">
            <Header>
                <Text strong style={{ color: 'white', fontSize: 20 }}> Random NRIC Generator</Text>
            </Header>
            <Content style={{ padding: '0 50px', textAlign: 'center' }}>
                <div className="site-layout-content">
                    {/* <Space direction="vertical"></Space> */}
                    <GenerateButton loading={loading} handleClick={handleClick} />
                    <Divider />
                    <NRIC_Display currentNRIC={currentNRIC} />

                </div>
            </Content>
            <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
        </Layout>
    )
}

export default MainPage;