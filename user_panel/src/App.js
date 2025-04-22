import logo from './logo.svg';
import {BrowserRouter , Route , Routes} from "react-router-dom";
import './App.css';
import "bootstrap/dist/css/bootstrap.css"
import MainPage from './Component/MainPage';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Routes>
        <Route path='/' element={<MainPage />} />
      </Routes>
    </div>
    </BrowserRouter>
    
  );
}

export default App;
