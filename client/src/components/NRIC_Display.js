import { Input } from 'antd';

const NRIC_Display = (props) => {
    return (
        <Input placeholder={props.currentNRIC.data.NRIC} disabled="true" />
    )
}

export default NRIC_Display;