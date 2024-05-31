import PropTypes from 'prop-types';

function Nav(props) {
  console.log(props);

  return (
    <nav style={{display: 'flex', alignItems: 'center', justifyContent: 'space-around'}}>
      <a href="#">Home</a>
      <a href="#">Sign in</a>

      {props.username && <h3>Welcome {props.username}</h3>}

      {props.username ? <h3>Welcome {props.username}</h3> : <h4>Hello</h4>}
    </nav>
  );
}


Nav.propTypes = {
  username: PropTypes.string,
}

export default Nav;
