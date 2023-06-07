import './App.css';
import Wrapper from "./components/wrapper/Wrapper";
import Banner from "./components/Banner";
import Ip4Data from "./components/ip-data/Ip4Data";
import Ip6Data from "./components/ip-data/Ip6Data";

function App() {
  return (
    <div className="App">
        <Wrapper top={<Banner/>} left={<Ip4Data/>} right={<Ip6Data />}/>
    </div>
  );
}

export default App;
