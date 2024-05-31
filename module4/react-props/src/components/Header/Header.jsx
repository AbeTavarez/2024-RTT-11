//
//
function Header(props) {

  return (
    <div style={{backgroundColor: props.bgColor || 'white'}}>
       <h1>{props.title}</h1>
    </div>
  )
}

export default Header;
