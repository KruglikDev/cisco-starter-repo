import './App.css';
import Wrapper from "./components/wrapper/Wrapper";
import Banner from "./components/Banner";
import IpDisplay from "./components/ip-data/IpDisplay";

function App() {
  return (
    <div className="App">
        <Wrapper
            top={<Banner/>}
            left={<IpDisplay url={'https://api.ipify.org?format=json'} version={'IPv4'}/>}
            right={<IpDisplay url={'https://api64.ipify.org?format=json'} version={'IPv6'}/>}
        />
    </div>
  );
}

export default App;
