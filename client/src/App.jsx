import {Routes,Route} from 'react-router-dom'
import './App.css';
import Home from './pages/HomePage/Home';

function App() {

  return (
    <div>
      <Routes>
        <Route path = '/' element = {<Home/>}></Route>
      </Routes>
    
    </div>
  )
}

export default App
