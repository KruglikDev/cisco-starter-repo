import './Wrapper.css';

const Wrapper = (props) => {
    return <div className={'container'}>
        <div className={'container_top'}>{props.top}</div>
        <div className={'container_left'}>{props.left}</div>
        <div className={'container_right'}>{props.right}</div>
        <div className={'container_bottom'}>{props.bottom}</div>
    </div>
}

export default Wrapper;