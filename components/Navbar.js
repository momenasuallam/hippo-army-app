import Link from "next/link";
import Image from "next/image";

function Navbar() {
  return (
    <div>
      <nav
        id="navbar"
        className="navbar navbar-expand-lg fixed-top navbar-custom navbar-light sticky wow fadeInUp"
        data-wow-duration="1s"
        data-wow-delay="0.2s"
        data-wow-offset={0}
      >
        <div className="container">
          <a className="navbar-brand" href="index.html">
            <Image src="/logo.jpeg" alt="logo" width="80px" height="80px" />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarCollapse"
            aria-controls="navbarCollapse"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="mdi mdi-menu" />
          </button>
          {/*end button*/}
          <div className="collapse navbar-collapse" id="navbarCollapse">
            <ul id="navbar-navlist" className="navbar-nav ms-auto">
              <li className="nav-item">
                <Link href="#about">
                  <a className="nav-link">About Hippo U</a>
                </Link>
              </li>
              <li className="nav-item">
                <Link href="#roadmap">
                  <a className="nav-link">Road Map</a>
                </Link>
              </li>
              <li className="nav-item">
                <Link href="#faq">
                  <a className="nav-link">FAQ</a>
                </Link>
              </li>
              <li className="nav-item">
                <Link href="#team">
                  <a className="nav-link">Team</a>
                </Link>
              </li>
              <li className="nav-item">
                <Link href="#">
                  <a className="nav-link btnpri">Opensea</a>
                </Link>
              </li>
            </ul>
            {/*END NAVBAR NAV*/}
          </div>
          {/*END COLLAPSE*/}
        </div>
        {/* END CONTAINER */}
      </nav>
    </div>
  );
}

export default Navbar;
