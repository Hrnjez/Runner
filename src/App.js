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
      <h1>{structure}</h1>
      <Nav/>
      <Route path="/"setStructure={setStructure} exact render = {() => <Home setStructure={setStructure} />}/>
      <Route path="/settings" component={Settings}/>
      <Route path="/play"   render = {() => <Play structure={structure}  />}/>
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
    <div className="settings-page">
      <h2><span>Maze</span> Structure </h2>
      <div className="structure">
        <div>
        <span>Number of columns</span> 
          <select onChange={structureHandler} name="colNum" className="selectCol" id='col'> 
          <option value="5">5</option>
          <option value="10">10</option> 
          </select>
        </div>
          <div>
          <span>Number of Rows</span> 
          <select onChange={structureHandler} name="colRow" className="selectRow" id='row'> 
          <option value="5">5</option>
          <option value="10">10</option> 
          </select>
          </div>
      </div>
    </div>
  </div>
    )
}

export default App;