import { Input } from 'antd';

const NricDisplay = (props) => {
    return (
        <Input placeholder={props.currentNRIC} disabled={true} />
    )
}

export default NricDisplay;