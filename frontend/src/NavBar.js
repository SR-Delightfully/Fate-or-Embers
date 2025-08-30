
const NavBar = () => {
    return (
        <ul className="navBar">
        <li><a href="/home">home</a></li>
        <li><a href="/forums">forums</a></li>
        <li><a href="/games">games</a></li>
        <li className="icon">
          <img src="https://i.imgur.com/XImoKKi.png" />
          <a href="/home"><img id="eye" src="https://i.imgur.com/obWJ4bN.png" /></a>
          <img src="https://i.imgur.com/hV5kdQf.png" />
        </li>
        <li><a href="/shops">shops</a></li>
        <li><a href="/profile">profile</a></li>
        <li><a href="/settings">settings</a></li>
      </ul>
    );
}

export default NavBar;