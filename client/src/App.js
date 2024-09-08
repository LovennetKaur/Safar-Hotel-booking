import { Route , Routes} from 'react-router-dom';
import './App.css';
import Home from './routes/Home/Home';
import About from './routes/About/About';
import List from "./routes/list/list";
import Hotel from "./routes/Hotels/Hotel";
import SignUp from './routes/signup/signup';

function App() {
  return (
    <>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/about" element={<About/>}/>
      <Route path="/list" element={<List/>}/>
      <Route path="/Hotel" element={<Hotel/>}/>
      <Route path="/signup" element={<SignUp/>}/>
    </Routes>
    
    </>
  );
}

export default App;
