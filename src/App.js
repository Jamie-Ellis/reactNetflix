import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import './components/NavBar'
import Home from './components/Home'
import './components/Footer'
import NetflixNavBar from './components/NavBar'
function App() {
  return (
    <>
    <NetflixNavBar />
    <Home/>
    </>
  );
}

export default App;
