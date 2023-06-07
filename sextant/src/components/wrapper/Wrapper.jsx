import './Wrapper.css';

const Wrapper = (props) => {
    return <div className={'container'}>
        <div className={'container_top'}>{props.top}</div>
        <main className={'container_body'}>
            <div className={'container_left'}>{props.left}</div>
            <div className={'container_right'}>{props.right}</div>
        </main>
    </div>
}

export default Wrapper;