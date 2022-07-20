import './App.css';
import Header from './components/Header';
import Home from './components/Home';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Checkout from './components/Checkout';
import Login from './components/Login';
import { useEffect } from 'react';
import { auth } from './firebase'
import { useStateValue } from './components/StateProvider';
import Payment from './components/Payment';
import { loadStripe } from "@stripe/stripe-js"
import { Elements } from '@stripe/react-stripe-js';
import Order from './components/Order';
// import Slider from './components/Slider';

const promise = loadStripe('Your stripe publik key');
function App() {
  const [{ }, dispatch] = useStateValue();
  useEffect(() => {
    //will only run once when app component runs
    auth.onAuthStateChanged(authUser => {
      console.log("The user is  >>> ", authUser)
      if (authUser) {
        //the user is logged inn or the user was logged in
        dispatch({
          type: 'SET_USER',
          user: authUser
        })

      }
      else {
        //The user is logged out
        dispatch({
          type: 'SET_USER',
          user: null
        })
      }
    })
  }, [])

  return (
    <Router>

      <div className="App">

        <Routes>
          <Route exact path='/login' element={[<Login />]} />
          <Route exact path='/payment' element={[<Header />, <Elements stripe={promise}><Payment /></Elements>]} />
          <Route exact path='/checkout' element={[<Header />, <Checkout />]} />
          <Route exact path='/orders' element={[<Header />, <Order />]} />
          <Route exact path='/' element={[<Header />, <Home />]} />

        </Routes>

      </div>
    </Router >

  );
}

export default App;
