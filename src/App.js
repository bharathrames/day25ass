import './App.css';
import Base from './Base/Base';
import {Switch, Route} from "react-router-dom"
import Dashboard from './Components/Dashboard';
import Login from './Components/login';
import Nopage from './Components/nopage';
import Forgotpass from './Components/forgotpass';
import Buttons from './Components/buttons';
import Border from './Components/Border';
import Color from './Components/Pages';
function App() {
  return (
    <div className="App">
      <Switch>
       <Route exact path ="/"><Dashboard/></Route>
       <Route path="/login"><Login/></Route>
       <Route path="/nopage"><Nopage/></Route>
       <Route path="/forget"><Forgotpass/></Route>
       <Route path="/buttons"><Buttons/></Route>
       <Route path="/color"><Color/></Route>
       <Route path="/border"><Border/></Route>
      </Switch>
    </div>
  );
}

export default App;
