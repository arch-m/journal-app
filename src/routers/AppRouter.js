import { useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Switch
} from "react-router-dom";
import { useDispatch } from "react-redux";

import { JournalScreen } from '../components/journal/JournalScreen';
import { AuthRouter } from './AuthRouter';
import { firebase } from '../firebase/firebase-config';
import { login } from '../actions/auth'
import { PrivateRoute } from "./PrivateRoute";
import { PublicRoute } from "./PublicRoute";
import { startLoadingNotes } from "../actions/notes";

export const AppRouter = () => {

  const dispatch = useDispatch();
  const [checking, setChecking] = useState(true);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    
    firebase.auth().onAuthStateChanged( (user) => {
      if(user?.uid) {
        dispatch(login(user.uid, user.displayName));
        setIsLoggedIn(true);
        dispatch( startLoadingNotes(user.uid) );

      } else {
        setIsLoggedIn(false);
      }
      setChecking(false);
    });
  }, [dispatch]);

  if (checking) {
    return <h1>Wait...</h1>
  }

  return (
    <Router>
      <div>
        <Switch>
          <PublicRoute path="/auth" component={ AuthRouter } isLoggedIn={ isLoggedIn }/>
          <PrivateRoute exact path="/" component={ JournalScreen } isLoggedIn={ isLoggedIn }/>
        </Switch>
      </div>
    </Router>
  );
}
