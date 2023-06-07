import React, { useState } from 'react';
import useWebSocket from 'react-use-websocket';

const WS_URL = 'ws://localhost:55455';

const Latency = () => {
    const [latency, setLatency] = useState(0);
    useWebSocket(WS_URL, {
        onOpen: () => {
            console.log('WebSocket connection established.');
        },
        onMessage: (event) => {
            const packetTimestamp = parseInt(event.data);
            const currentTimestamp = new Date().getTime();
            const packetLatency = currentTimestamp - packetTimestamp;
            setLatency(packetLatency);
        },
    });
    return (
        <div>
            <h1>Packet Latency: {latency}ms</h1>
        </div>
    );
}

export default Latency;