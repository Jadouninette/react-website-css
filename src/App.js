import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';


function App() {
  return (
    <>
    <Router>
        <Navbar />
        <Switch>
          <Route path='/' exact component={Home} />

      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1> Hello word </h1>
      </header>
      </Switch>
      </Router>
    </>
  );
}

export default App;
