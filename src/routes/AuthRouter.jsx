import { BrowserRouter as Router, Route, Switch  } from "react-router-dom";

import LoginPage from "../pages/LoginPage";
import RegisterPage from "../pages/RegisterPage";


const AuthRouter = () => {
 return (
     <Router>
         <Switch>
             <Route exact path="/login" component= {LoginPage} />
             <Route exact to="/register" component= {RegisterPage} />
         </Switch>
     </Router>
 )
}
 export default AuthRouter;