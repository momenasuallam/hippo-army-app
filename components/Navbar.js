import Link from "next/link";
import { useState } from "react"; 


function Navbar() {
    // let { BrowserRouter, Switch, Route, NavLink } = ReactRouterDOM;
      const [click, setClick] = useState(false);

      const handleClick = () => setClick(!click);
      const Close = () => setClick(false);
  return (
    <div>
      <div>
        <div
          className={click ? "main-container" : ""}
          onClick={() => Close()}
        />
        <nav className="navbar" onClick={(e) => e.stopPropagation()}>
          <div className="nav-container">
            <a className="nav-logo">
              CodeBucks
              <i className="fa fa-code"></i>
            </a>

            <ul className={click ? "nav-menu active" : "nav-menu"}>
              <li className="nav-item">
                <a
                  activeClassName="active"
                  className="nav-links"
                  onClick={click ? handleClick : null}
                >
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a
                  activeClassName="active"
                  className="nav-links"
                  onClick={click ? handleClick : null}
                >
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a
                  activeClassName="active"
                  className="nav-links"
                  onClick={click ? handleClick : null}
                >
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a
                  activeClassName="active"
                  className="nav-links"
                  onClick={click ? handleClick : null}
                >
                  Home
                </a>
              </li>
            </ul>
            <div className="nav-icon" onClick={handleClick}>
              <i className={click ? "fa fa-times" : "fa fa-bars"}></i>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
}

export default Navbar;
