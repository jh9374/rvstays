import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Route, Switch } from "react-router-dom";
import SignupFormPage from "./components/SignupFormPage";
import * as sessionActions from "./store/session";
import Navigation from "./components/Navigation";
import SearchBar from "./components/SearchBar";
import Listings from "./components/Listings";
import ProfilePage from "./components/ProfilePage";
import CreateListing from "./components/CreateListing";

function App() {
  const dispatch = useDispatch();
  const [isLoaded, setIsLoaded] = useState(false);
  useEffect(() => {
    dispatch(sessionActions.restoreUser()).then(() => setIsLoaded(true));
  }, [dispatch]);

  return (
    <div className="wrapper">
      <Route path="/"></Route>
      <Navigation isLoaded={isLoaded} />
      {isLoaded && (
        <Switch>
          <Route exact path="/">
            <SearchBar />
          </Route>
          <Route exact path="/signup">
            <SignupFormPage />
          </Route>
          <Route path="/listings">
            <Listings></Listings>
          </Route>
          <Route path="/profile">
            <ProfilePage />
          </Route>
          <Route path="/create-listing">
            <CreateListing />
          </Route>
        </Switch>
      )}
    </div>
  );
}

export default App;