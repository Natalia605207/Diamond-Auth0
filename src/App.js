import './App.css';
import Logout from './components/Logout';
import { useAuth0 } from "@auth0/auth0-react";
import MyAccount from './components/MyAccount';
import { HomePage } from './components/HomePage';

function App() {
  const {isLoading} = useAuth0();
  if (isLoading) return (
    <div className="loader-box">
    <p className="loader">LOADING...</p>
    </div>
    );
  return (
    <div className="App">
      <HomePage />
      <MyAccount />
      <Logout />
    </div>
  );
}

export default App;
