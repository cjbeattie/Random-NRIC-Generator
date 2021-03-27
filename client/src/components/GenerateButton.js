import { Button } from 'antd';

const GenerateButton = (props) => {
    return (
        <>
            <Button type="primary" loading={props.loading} onClick={props.handleClick}>
                Generate NRIC
            </Button>
        </>
    );
}

export default GenerateButton;