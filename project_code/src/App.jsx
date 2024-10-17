import './App.css'
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import Login from './components/Login';
import Signup from './components/Signup';
import Header from './components/Header';
function App() {
  

  return (
    <div className='app'>
      <Router>
        <Header/>
        <Routes>
          <Route path='/login' Component={Login}/>
          <Route path='/signup' Component={Signup}/>
          <Route path='/*' Component={Login}/>
        </Routes>
      </Router>
    </div>
  )
}

export default App
