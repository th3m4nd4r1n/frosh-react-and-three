import './App.css';
import OurTeam from './components/our_team'
import Team from './components/team'
import Faculty from './components/faculty'
import Navbar from './components/navbar'
import LogIn from './components/login'
import Map from './components/map'

import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";


function App() {
  return (
    <div className="App">
      <Navbar/>      
      <Routes>
        <Route exact path="/" element={<> <OurTeam/> <Map/> </>} ></Route>
        <Route exact path="/login" element={<LogIn/>} ></Route>
        <Route exact path="/team" element={<Team/>}></Route>
        <Route exact path="/faculty" element={<Faculty/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
