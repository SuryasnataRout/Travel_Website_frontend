import logo from './logo.svg';
import './App.css';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Home from "./routes/Home"// import the custom navbar component from the components folder
import Service from "./routes/Service"
import About from "./routes/About"
import Contact from "./routes/Contact"
import SignUp from "./routes/SignUp"
function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/Service" element={<Service/>} />
          <Route path="/About" element={<About/>} />
          <Route path="/Contact" element={<Contact/>} />
          <Route path="/SignUp" element={<SignUp/>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;// this makes the app component available to other files
