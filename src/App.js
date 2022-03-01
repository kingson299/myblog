import NavBar from "./Navbar"
import Home from "./Home"
import Create from './Create'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import BlogDetails from './BlogDetails';
import NotFound from './NonFound';

function App() {
  return (
    <Router>
      <div className="App">
        <NavBar/>
        <div className="content">
          <Switch>

            <Route path="/create">
              <Create />
            </Route>

            <Route path="/blogs/:id">
              <BlogDetails />
            </Route>

            <Route exact path="/">
              <Home />
            </Route>

            <Route exact path="*">
              <NotFound/>
            </Route>
            
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
