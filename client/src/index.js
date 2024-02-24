import React from "react";
import App from "./App.js";
import AddAnimalForm from './AddAnimalForm.js';
import DogContainer from './DogContainer.js';
import FostrFriends from './FostrFriends.js';
import DogCard from './DogCard.js';
import "./index.css";
import { createRoot } from "react-dom/client";

const router = createBrowserRouter([
    {
      path: '/',
      element: <App />
    },
    {
      path: '/add-animal',
      element: <AddAnimalForm />
    },
    {
      path:'./animal-information',
      element: <DogContainer />
    },
    {
      path: '/fostr-friends',
      element: <FostrFriends />
    },
    {
      path: "/dogs/:id",
      element: <DogCard />
    }
    
  ]);

const container = document.getElementById("root");
const root = createRoot(container);
root.render(
    <React.StrictMode>
      <RouterProvider router={router}>
        <App />
      </RouterProvider>
    </React.StrictMode>
  );