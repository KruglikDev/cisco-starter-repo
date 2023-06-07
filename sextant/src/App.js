import './App.css';
import Wrapper from "./components/wrapper/Wrapper";
import Banner from "./components/Banner";

function App() {
  return (
    <div className="App">
        <Wrapper top={<Banner/>}/>
    </div>
  );
}

export default App;
