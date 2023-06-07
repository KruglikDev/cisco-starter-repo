import {useEffect, useState} from "react";

const Ip6Data = () => {
    const [IPv6, setIPv6] = useState('');

    useEffect(() => {
        fetch('https://api64.ipify.org?format=json')
            .then(response => response.json())
            .then(data => setIPv6(data));
    }, [])

    return <h2>Your IPv6 is: {IPv6.ip}</h2>
}

export default Ip6Data;