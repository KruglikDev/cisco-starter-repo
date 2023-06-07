import React, { useState } from 'react';
import useWebSocket from 'react-use-websocket';
import Plot from 'react-plotly.js';

const WS_URL = 'ws://localhost:55455';

const Latency = () => {
    const [data, setData] = useState([{ x: [], y: [] }]);
    useWebSocket(WS_URL, {
        onOpen: () => {
            console.log('WebSocket connection established.');
        },
        onMessage: (event) => {
            const packetTimestamp = parseInt(event.data);
            const currentTimestamp = new Date().getTime();
            const packetLatency = currentTimestamp - packetTimestamp;
            setData([{ x: [...data[0].x, currentTimestamp], y: [...data[0].y, packetLatency] }]);
        },
    });
    return (
            <Plot
                data={[
                    {
                        x: data[0].x,
                        y: data[0].y,
                        type: 'scatter',
                        mode: 'lines+markers',
                        marker: {color: 'red'},
                    }
                ]}
                layout={{ autosize: false, width: window.innerWidth - 100, title: 'Packet Latency' }}
            />
    );
}

export default Latency;