import './styles/App.scss';
import Header from './components/Header';
import Slider from './components/Slider';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <main>
        <Slider></Slider>
      </main>
    </div>
  );
}

export default App;
