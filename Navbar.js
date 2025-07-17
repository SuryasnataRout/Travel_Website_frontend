import { Component } from "react";
import "./NavbarStyles.css";
import { Link } from "react-router-dom";

class Navbar extends Component {
  state = { clicked: false };

  handleClick = () => {
    this.setState({ clicked: !this.state.clicked });
  };

  render() {
    return (
      <nav className="navbar-container">
        <div className="NavbarItems">
          <h1 className="navbar-logo">Travel With Me Odisha</h1>

          {/* Hamburger Icon */}
          <div className="menu-icon" onClick={this.handleClick}>
            <i className={this.state.clicked ? "fa fa-times" : "fa fa-bars"}></i>
          </div>

          {/* Menu Links */}
          <ul className={this.state.clicked ? "nav-menu active" : "nav-menu"}>
            <li>
              <Link to="/"><i className="fa-solid fa-house-user"></i> Home</Link>
            </li>
            <li>
              <Link to="/service"><i className="fa-solid fa-briefcase"></i> Service</Link>
            </li>
            <li>
              <Link to="/about"><i className="fa-solid fa-eject"></i> About</Link>
            </li>
            <li>
              <Link to="/contact"><i className="fa-solid fa-address-book"></i> Contact</Link>
            </li>
            <li>
              <Link to="/signup"><i className="fa-solid fa-right-to-bracket"></i> SignUp</Link>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

export default Navbar;
