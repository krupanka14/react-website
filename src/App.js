
import { HashRouter as Router ,Switch,Route} from 'react-router-dom'
import Navbar from './components/pages/Navbar';
import './App.css';
import Home from './components/pages/HomePage/Home';
import Footer from './components/pages/Footer/Footer';
import Products from './components/pages/Products/Products';

import Services from '../src/components/pages/Services/Services'

function App() {
  return (
    <Router basename={process.env.PUBLIC_URL}>
    <Navbar />
      <Switch>
         <Route path='/' exact component={Home} />
         <Route path='/services' exact component={Services} />
         <Route path='/products' exact component={Products} />
         {/* <Route path='/sign-up' exact component={SignUp} /> */}
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
