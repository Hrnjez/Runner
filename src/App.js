import React, {useState} from 'react';
import './App.css';
import Nav from './Nav';
import Play from './Play';
import Settings from './Settings';
import { Link } from 'react-router-dom';
import {BrowserRouter as Router, Route} from 'react-router-dom';


function App() {
  
const [structure, setStructure] = useState(5);

  return (
    <Router >
    <div className="App"  >

      <Nav/>
      <Route path="/Runner/"setStructure={setStructure} exact render = {() => <Home setStructure={setStructure} />}/>
      <Route path="/Runner/settings" component={Settings}/>
      <Route path="/Runner/play"   render = {() => <Play structure={structure}  />}/>
    </div>
    </Router>
  );
}
const Home = ({ setStructure }) =>  {
  const structureHandler = (e) => {
    setStructure(parseInt(e.target.value));
    console.log(parseInt(e.target.value));
  }

  return (
  <div className="homepage">
    <div>
  <h1>The <span>Maze</span> Runner</h1>
    <Link  to="/Play">
      <button className='play-btn'> Play!
      </button>
    </Link>
    </div>

  </div>
    )
}

export default App;