import './App.css';
import { BrowserRouter,Switch, Route,useHistory} from 'react-router-dom';
import { useState, useEffect } from "react"
import Axios from "axios"
import Home from './component/home';
import "./component/btn.css"
import "./component/input.css"
import Transition from "./component/transition"
import UserInfo from './component/userInfo';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const history=useHistory();
  useEffect(() => {
    const strage = localStorage.getItem("loggedData")
    const loggedData = JSON.parse(strage)
    if (loggedData !== null) {
      setIsLoggedIn(true)
    }
  }, [])

  const login=()=>{
    setIsLoggedIn(true)
  }

  const logout = () => {
    setIsLoggedIn(false)
    localStorage.removeItem("loggedData")
  }

  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path="/life-admin-demo">
            <Home isLoggedIn={isLoggedIn} login={login} logout={logout}/>
          </Route>

          <Route path="/life-admin-demo/userInfo">
            <UserInfo logout={logout}/>
          </Route>

          <Route path="/life-admin-demo/transition">
            <Transition logout={logout}/>
          </Route>

        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
