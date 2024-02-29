import ReactDOM from "react-dom";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import React from "react";
import App from "./components/App.js";
import AddAnimalForm from "./components/AddAnimalForm.js";
import AnimalContainer from "./components/AnimalContainer.js";
import AnimalCard from "./components/AnimalCard.js";
import ShelterCard from "./components/ShelterCard.js";
import SheltersContainer from './components/SheltersContainer.js'
import "./index.css";
import AddShelterForm from "./components/AddShelterForm.js";

export default function Launch() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact>
          <App />
        </Route>
        <Route path="/add-animal">
          <AddAnimalForm />
        </Route>
        <Route path="/add-shelter">
          <AddShelterForm/>
        </Route>
        <Route path="/animals" exact>
          <AnimalContainer />
        </Route>
        <Route path="/animals/:id">
          <AnimalCard />
        </Route>
        <Route path="/shelters" exact >
          <SheltersContainer />
        </Route>
        <Route path="/shelters/:id">
          <ShelterCard />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

const root = document.getElementById("root");
ReactDOM.render(<Launch />, root);