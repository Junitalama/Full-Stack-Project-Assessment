const Nav = () => {
  return (
    <div>
      <nav role="navigation">
        <div id="menuToggle">
          <input type="checkbox" />

          <span></span>
          <span></span>
          <span></span>

          <ul id="menu">
            
            <a href="#About">
              <li>About</li>
            </a>
            <a href="#recommendation">
              <li>video Recommendation</li>
            </a>
            <a href="#contact">
              <li>Contact</li>
            </a>
          </ul>
        </div>
      </nav>
      
    </div>
  );
};

export default Nav;
