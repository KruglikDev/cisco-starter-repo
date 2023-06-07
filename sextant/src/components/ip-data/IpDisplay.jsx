import {useEffect, useState} from "react";

const IpDisplay = ({url, version}) => {
    const [ip, setIp] = useState('');

    useEffect(() => {
        fetch(`${url}`)
            .then(response => response.json())
            .then(data => setIp(data));
    }, [url])

    return <h2>Your {version} is: {ip.ip}</h2>
}

export default IpDisplay;