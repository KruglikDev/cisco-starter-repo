import './App.css';
import Wrapper from "./components/wrapper/Wrapper";
import Banner from "./components/Banner";
import IpDisplay from "./components/ip-data/IpDisplay";
import Latency from "./components/latency/Latency";

function App() {
  return (
    <div className="App">
        <Wrapper
            top={<Banner/>}
            left={<IpDisplay url={'https://api.ipify.org?format=json'} version={'IPv4'}/>}
            right={<IpDisplay url={'https://api64.ipify.org?format=json'} version={'IPv6'}/>}
            bottom={<Latency />}
        />
    </div>
  );
}

export default App;
