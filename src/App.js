import React,{useEffect} from 'react';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';

import './App.css';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Checkout from './components/Checkout/Checkout';
import Login from './components/Login/Login';
import { useStateValue } from './components/StateProvider/StateProvider';
import {auth} from './Firebase/Firebase';
import Footer from './components/Footer/Footer';

import Admin from './components/Admin/Admin';
function App() {
  const [,dispatch] = useStateValue();
  //Piece of code which runs based on a given condition
  useEffect(() => {
   const unsubscribe= auth.onAuthStateChanged(authUser=>{
      if(authUser){
          dispatch({type:'SET_USER',
          user:authUser
        })
      }
      else{
        dispatch({type:'SET_USER',
        user:null
      })
      }

    })
    return () => {
      //Any CleanUp operation go in here
      unsubscribe();
    }
  }, [])
  return (
   <Router>
    <div className="app">
      
      <Switch>
        <Route path="/checkout">
        <Header />
            <Checkout/>
        </Route>

        <Route path="/login">
            <Login/>
        </Route>
        <Route path="/admin/dashboard">
            <Admin/>
        </Route>
        <Route path="/">
        <Header />
        <Home />
        </Route>

        
      </Switch>
      <Footer/>
    </div>
   </Router>
  );
}

export default App;
