import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from './components/Home/Header/Header';
import Home from './components/Home/Home/Home';
import AddHotel from './components/Home/Pages/AddHotel/AddHotel';
import About from './components/Home/Pages/About/About';

function App() {
  return (
    <div className="App">
      <Router>
        <Header></Header>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="/home">
            <Home></Home>
          </Route>
          <Route path="/about">
            <About></About>
          </Route>
          <Route path="/addHotel">
            <AddHotel></AddHotel>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
