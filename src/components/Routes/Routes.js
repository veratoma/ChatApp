import React from "react";
import {
  BrowserRouter,
  Switch,
  Route,
  Link,
  // Router
} from "react-router-dom";
import { Chats } from "../../Pages/Chats/Chats";
import { Home } from "../../Pages/Home/Home";
import { Profile } from "../../Pages/Profile/Profile";
import { NoChat } from "../NoChat/NoChat";


export default function Routes() {
  return (
    <BrowserRouter>
      <header>
        <ul>
          <li>
            <Link to="/profile">Profile</Link>
          </li>

          <li>
            <Link to="/chats">chats</Link>
          </li>

          <li>
            <Link to="/">Home</Link>
          </li>
        </ul>
      </header>
      <Switch>

        <Route exact path="/">
          <Home></Home>
        </Route>

        <Route path="/profile">
          <Profile></Profile>
        </Route>

        <Route

          path="/chats/:chatId"
        >
          <Chats></Chats>
        </Route>

        <Route

          path="/chats"
        >
          <Chats></Chats>
        </Route>

        <Route path="/nochat">
          <NoChat />
        </Route>

        <Route>
          <h3>Page not found</h3>
        </Route>

      </Switch>
    </BrowserRouter>

  );

}

