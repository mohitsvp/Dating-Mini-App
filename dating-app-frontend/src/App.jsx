import './App.css';
import DatingCards from './components/DatingCards/DatingCards';
import Header from './components/Headers/Header';
import SwipeButtons from './components/SwipeButtons/SwipeButtons'

function App() {
  return (
    <div className="App">
      <Header/>
      <DatingCards/>
      <SwipeButtons/>
    </div>
  );
}

export default App;
