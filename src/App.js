import logo from './logo.svg';
import './App.css';
import Dashboard from './components/dashboard/Dashboard';
import Gallery from './components/gallery/gallery';
import Footer from './components/include/footer';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/gallery">
            <Gallery />
          </Route>
          <Route path="/">
            <Dashboard />
          </Route>
        </Switch>
      </div>
      <Footer />
    </Router>
  );
}


export default App;
