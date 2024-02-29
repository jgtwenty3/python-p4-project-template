import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import './App.css';
import NavBar from "./NavBar.js";

function AnimalContainer() {
  const [searchQuery, setSearchQuery] = useState("");
  const [animals, setAnimals] = useState([]);

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  useEffect(()=> {
    fetch('/animals')
    .then(res => res.json())
    .then(data => setAnimals(data))
    .catch(error => console.log('error'))
  }, [])

  const filteredAnimals = animals.filter((animal) =>
    animal.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div>
      <header>
        <NavBar />
      </header>
      <input
        type="text"
        placeholder="Search by name..."
        value={searchQuery}
        onChange={handleSearchChange}
        className="search-input"
      />
      <table className = "animal-table"> 
        <thead>
          <tr className="table-row">
            <th>Name</th>
            <th>Arrival Date</th>
            <th>Age</th>
            <th>Sex</th>
            <th>Breed</th>
            <th>Weight</th>
            <th>Special Needs</th>
            <th>Adoption Status</th>
            <th>Rabies Vax Date</th>
            <th>SNAP Date</th>
            <th>DHPP Shots</th>
            <th>Spayed/Neutered?</th>
            <th>Microchip Number</th>
          </tr>
        </thead>
        <tbody className = "animal-table-body">
          {filteredAnimals.map((animal) => (
            <tr
              className="table-row"
              key={animal.id}
            >
              <td>
                <NavLink to={`/animals/${animal.id}`}>{animal.name}</NavLink>
              </td>
              <td>{animal.arrival}</td>
              <td>{animal.age}</td>
              <td>{animal.sex}</td>
              <td>{animal.breed}</td>
              <td>{animal.weight}</td>
              <td>{animal.specialneeds}</td>
              <td>{animal.adoptionstatus}</td>
              <td>{animal.rabies}</td>
              <td>{animal.snap}</td>
              <td>{animal.dhpp}</td>
              <td>{animal.spayneuter}</td>
              <td>{animal.microchip}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default AnimalContainer;