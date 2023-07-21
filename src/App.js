import React, { useEffect } from 'react';
import './App.css';
import HomeScreen from './screens/HomeScreen.js';
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import LoginScreen from './screens/LoginScreen.js';
import { auth } from './firebase';
import { onAuthStateChanged } from 'firebase/auth';
import { useDispatch } from 'react-redux';
import { login, logout } from './features/userSlice';


function App() {
  const user = null;
  const dispatch = useDispatch();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, userAuth => {
      if (userAuth) {
          dispatch(
            login({
            uid: userAuth.uid,
            email: userAuth.email,
          })
        );
        } else {
            dispatch(logout);
        }
    });

    return unsubscribe;
  }, []);

  return (
    <div className="app">
        <Router> 
            {!user ? (
              <LoginScreen />
            ) : (
              <Routes>
                <Route exact path="/Home" element={<HomeScreen/>}>
                </Route>
              </Routes>
            )}
        </Router>
    </div>
  );
}

export default App;
