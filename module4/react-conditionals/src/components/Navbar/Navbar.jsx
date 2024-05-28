import "./Navbar.css";
import reactLogo from "../../assets/react.svg";

function NavBar(props) {

    console.log(props.userData.darkMode);

    const anchorStyles = {
        color: props.userData.darkMode ? 'white': 'black',
    }

  return (
    <nav>
      <img src={reactLogo} alt="react logo" />

      <a href="#" style={anchorStyles}>Home</a>
      <a href="#" style={anchorStyles}>Sign in</a>
    </nav>
  );
}

export default NavBar;
