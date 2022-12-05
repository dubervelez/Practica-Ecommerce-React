import './styles/App.scss';
import Header from './components/Header';
import Slider from './components/Slider';
import Pay from "./components/Pay";

function App() {
  return (
    <div className="App">
      <Header></Header>
      <main>
        <Slider></Slider>
        <Pay></Pay>
      </main>
    </div>
  );
}

export default App;
