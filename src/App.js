import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom"
import Login from './components/loginComponent/login';
import HomePage from './components/HomePage/homePage';
import Register from './components/loginComponent/register';
function App() {
  return (
    <div className="App">
     <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<HomePage/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/register" element={<Register/>}/>
        </Routes>
      </div>
    </BrowserRouter>
    </div>
  );
}

export default App;
