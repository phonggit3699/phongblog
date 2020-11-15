import React, { useState} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import AuthContext from './authContext';


const AppWrapper = () => {
  const [loggedIn, setLoggedIn] = useState(false)
  const hiddenNav = true;
  return (
    <AuthContext.Provider value={{ loggedIn,  setLoggedIn, hiddenNav}}>
      <App />
    </AuthContext.Provider>
  )
}
ReactDOM.render(
  <React.StrictMode>
    <AppWrapper />
  </React.StrictMode>,
  document.getElementById('root')
);


