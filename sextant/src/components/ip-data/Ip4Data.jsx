import {useEffect, useState} from "react";

const Ip4Data = () => {
    const [IPv4, setIPv4] = useState('');

    useEffect(() => {
        fetch('https://api.ipify.org?format=json')
            .then(response => response.json())
            .then(data => setIPv4(data));
    }, [])

    return <h2>Your IPv4 is: {IPv4.ip}</h2>
}

export default Ip4Data;