import React from "react";

export default function Header(props) {
  const getNavLinkClass = (path) => {
    return props.location.pathname === path ? " active" : "";
  };

  function showFeatured() {
    window.scrollTo({
      top: props.refFeatured.current.offsetTop - 30,
      behavior: "smooth",
    });
  }

  function showContact() {
    window.scrollTo({
      top: props.refContact.current.offsetTop - 30,
      behavior: "smooth",
    });
  }

  return (
    <header class="spacing-sm">
      <div className="container">
        <nav className="navbar navbar-expand-lg navbar-light bg-transparent">
          <a className="navbar-brand font-weight-bold" href="/" style={{fontSize: 25, fontFamily: 'Poppins'}}>
            Aflarc
          </a>
          <button
            className="navbar-toggler navbar-toggler-right"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ml-auto mr-3">
              <li className={`nav-item mx-md-2${getNavLinkClass("/")}`}>
                <a className="nav-link Active" href="/" style={{fontSize: 16, fontFamily: 'Poppins'}}>
                  Home
                </a>
              </li>
              <li className={`nav-item mx-md-2`}>
                <a className="nav-link" onClick={showFeatured} style={{fontSize: 16, fontFamily: 'Poppins'}}>
                  Featured
                </a>
              </li>
              <li className={`nav-item mx-md-2`}>
                <a className="nav-link" onClick={showContact} style={{fontSize: 16, fontFamily: 'Poppins'}}>
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </header>
  );
}
