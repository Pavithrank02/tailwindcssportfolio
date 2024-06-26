import { BrowserRouter } from 'react-router-dom';
import './App.css';
import { CardHoverEffectDemo } from './components/CardHoverEffectDemo';
import { TabsDemo } from './components/TabsDemo';
//dfsss
function App() {
  return (
    <div className="App">
      <TabsDemo />
      <BrowserRouter>
        <CardHoverEffectDemo />
      </BrowserRouter>
    </div>
  );
}

export default App;
