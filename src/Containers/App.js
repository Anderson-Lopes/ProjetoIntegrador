import Root from '../Componentes/Root'
import Headers from '../Componentes/Headers';
import Body from '../Componentes/Body';
import Footer from '../Componentes/Footer';
import '../App.css';



const App = () => (
  <> 
    <Headers />
    <Root/>
    <Body/>

    {/* <Body/>
    <Footer/>  */}
   



    {/* <div className="App">

      <headers className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </headers>
    </div> */}
  </>
  );


export default App;
