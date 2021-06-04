import './App.css';
import Navbar from "./components/header/Navbar";
import Home from "./Home";
import Footer from "./components/footer/Footer";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Home />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
