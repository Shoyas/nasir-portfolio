import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header/Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import Services from './components/Services/Services';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import MakeAwesome from './components/MakeAwesome/MakeAwesome';
import Footer from './components/Footer/Footer';
import Works from './components/Works/Works';
import Navigation from './components/Header/Navigation/Navigation';
import Blogs from './components/Blogs/Blogs';
import Resume from './components/Resume/Resume';
import Contact from './components/Contact/Contact';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Header></Header>
          <Services></Services>
          <MakeAwesome></MakeAwesome>
          <Footer></Footer>
        </Route>
        <Route path="/home">
          <Header></Header>
          <Services></Services>
          <MakeAwesome></MakeAwesome>
          <Footer></Footer>
        </Route>
        <Route path="/works">
          <Navigation></Navigation>
          <Works></Works>
          <Footer></Footer>
        </Route>
        <Route path="/blogs">
          <Navigation></Navigation>
          <Blogs></Blogs>
          <Footer></Footer>
        </Route>
        <Route path="/resume">
          <Navigation></Navigation>
          <Resume></Resume>
          <Footer></Footer>
        </Route>
        <Route path="/contact">
          <Navigation></Navigation>
          <Contact></Contact>
          <Footer></Footer>
        </Route>

      </Switch>
    </Router>
  );
}

export default App;
