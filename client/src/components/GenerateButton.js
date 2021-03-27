import React from 'react';
import { Button } from 'antd';

const GenerateButton = () => {
    const [loading, setLoading] = React.useState(false);

    const handleClick = () => {
        setLoading(true);
    }

    return (
        <>
            <Button type="primary" loading={loading} onClick={handleClick}>
                Click me!
                </Button>
        </>
    );

}

export default GenerateButton;