import React from 'react';
import { Layout, Menu, Breadcrumb, Divider, Typography, Space } from 'antd';
import GenerateButton from './GenerateButton'
import NRIC_Display from './NRIC_Display'

const { Header, Content, Footer } = Layout;
const { Title, Text } = Typography;


const MainPage = () => {
    const [loading, setLoading] = React.useState(false);

    const handleClick = () => {
        setLoading(true);
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
                    <NRIC_Display />

                </div>
            </Content>
            <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
        </Layout>
    )
}

export default MainPage;