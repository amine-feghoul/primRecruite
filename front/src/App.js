import './App.css';
import {Navbar,Footer} from './components/';
import {BrowserRouter as Router,Switch,Route} from "react-router-dom"
import { Home ,About,Contacts,Blog,Login,SignUp} from './pages';
function App() {
  const routes = [
    {
      route:"/",
      page: Home
    },
    {
      route:"/about",
      page:About
    },
    {
      route:"/contacts",
      page: Contacts
    },
    {
      route:"/blog",
      page: Blog
    },
    {
      route:"/login",
      page: Login
    },
    {
      route:"/sign-up",
      page:SignUp
    }
  ]
  const displayPages = ()=>
  {
    return routes.map((route)=> <Route path ={route.route} exact component={route.page} />)
  }
  return (
    <div className="App">
        
        <Router>
        <Navbar/>
          <Switch>
            {displayPages()}
          </Switch>
          <Footer/>
        </Router>
    </div>
  );
}

export default App;
