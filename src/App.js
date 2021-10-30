import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from './components/Header/Header';
import About from './components/About/About';
import AddHotel from './components/AddHotel/AddHotel';
import Home from './components/Home/Home';
import AuthProvider from './context/AuthProvider';

function App() {
  return (
    <div className="App">
      <AuthProvider>
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
      </AuthProvider>
    </div>
  );
}

export default App;
