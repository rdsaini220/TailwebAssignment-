import React, {Component} from 'react';
import {BrowserRouter, Switch, Route, Redirect} from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop';
import Header from "./components/Header";
import Products from "./pages/Products";
import ProductShow from "./pages/ProductShow";


class App extends Component{	
        
    render(){     
            return (
              <>
                <BrowserRouter>
                  <ScrollToTop />
                  <Header/>
                  <Switch>
                    <Route exact path="/" component={Products} />
                    <Route exact path="/product/:slug" component={ProductShow} />
                    <Redirect exact to="/"></Redirect>
                  </Switch>
                </BrowserRouter>
              </>
            );
    }
}
export default App;

