
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoginView from './Views/LoginView';


  function App() {
    return (
      
      <Router>
        <LoginView path="/login" component={LoginView} />
        {/* other routes go here */}
      </Router>
     
    );
  };
 
export default App;
 // return (
  //   <div className="App">
  //     <header className="App-header">
  //       <img src={logo} className="App-logo" alt="logo" />
  //       <p>
  //         Edit <code>src/App.js</code> and save to reload.
  //       </p>
  //       <a
  //         className="App-link"
  //         href="https://reactjs.org"
  //         target="_blank"
  //         rel="noopener noreferrer"
  //       >
  //         Learn React
  //       </a>
  //     </header>
  //   </div>
  // );