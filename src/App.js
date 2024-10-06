import './App.css';
import {BrowserRouter as Router, Route, Redirect} from 'react-router-dom';
import Products from './products/pages/ProductsApp';

const App = () => {
  return (
    <Router>
          <Route path='/'>
            <Products />      
          </Route>
        <Redirect to='/' />  
    </Router>
  );
};

export default App;
