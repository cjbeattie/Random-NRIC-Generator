import React from 'react';
import axios from "axios";
import { Layout, Divider, Typography, Row, Col } from 'antd';
import GenerateButton from './GenerateButton'
import NricDisplay from './NricDisplay'

const { Header, Content, Footer } = Layout;
const { Text } = Typography;


const MainPage = () => {
    const [loading, setLoading] = React.useState(false);
    const [currentNRIC, setCurrentNRIC] = React.useState("Click the button to generate a new NRIC");
    const [errorMessage, setErrorMessage] = React.useState("");

    const handleClick = () => {
        setLoading(true);

        axios.get('/api/nric')
            .then((res) => {
                setLoading(false);
                setCurrentNRIC(res.data.NRIC)
            })
            .catch((error) => {
                setLoading(false);
                setErrorMessage("An error occurred, please try again.");
                console.log("An error occurred: ", error);
            })
    }

    return (
        <Layout className="layout" style={{ height: "100vh" }}>
            <Header>
                <Text strong style={{ color: 'white', fontSize: 20 }}> Random NRIC Generator</Text>
            </Header>
            <Content style={{ padding: '50px', textAlign: 'center' }}>
                <div className="site-layout-content">
                    <GenerateButton loading={loading} handleClick={handleClick} />
                    <Row justify="center" style={{ padding: '20px' }} >
                        <Col span={4}>
                            <NricDisplay currentNRIC={currentNRIC} />
                        </Col>
                    </Row>
                    <Row justify="center" >
                        <Col span={4}>
                            <Text style={{ color: 'red' }}>{errorMessage}</Text>
                        </Col>
                    </Row>


                </div>
            </Content>
            <Footer style={{ textAlign: 'center' }}>
                <Divider />
                Created by <a href="https://github.com/cjbeattie">Courtney Beattie</a>
            </Footer>
        </Layout>
    )
}

export default MainPage;