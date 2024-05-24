import './App.css';
// import slackLogo from './assets/slack-logo.avif';
import Navbar from './components/Navbar';

function App() {

  const handleSubmit = () => console.log('submitted');

  const obj = {padding: '5px', width: '50px', backgroundColor: 'green'}

  const username = 'John';

  const imgUrl = "https://perscholas.org/wp-content/themes/per-scholas/assets/images/logo1.svg";
  
  const atlText = 'Perscholas logo';
  


  return (
    <div className='container'>

      <Navbar />

      <img src={imgUrl} alt={atlText} />
      {/* <img src={slackLogo} alt={atlText}/> */}

      <h1 onClick={() => console.log('clicked')} >
        Hello React version {17 + 1}
      </h1>

      <p>Username: {username} {new Date().getTime()}</p>

      <form onSubmit={handleSubmit} className='form-container'>
        <input type="text" />
        <input type="submit" value="Get" style={obj}/>
      </form>

    </div>
  )
}

export default App
