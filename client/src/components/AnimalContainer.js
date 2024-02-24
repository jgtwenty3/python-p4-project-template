import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import './App.css';

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
  })

  const filteredAnimals = animals.filter((animal) =>
    animal.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div>
      <input
        type="text"
        placeholder="Search by name..."
        value={searchQuery}
        onChange={handleSearchChange}
        className="search-input"
      />
      <table> 
        <thead>
          <tr className="table-row">
            <th>Name</th>
            <th>Arrival</th>
            <th>Age</th>
            <th>Sex</th>
          </tr>
        </thead>
        <tbody>
          {filteredAnimals.map((animal) => (
            <tr
              className="table-row"
              key={animal.id}
            >
              <td>
                <NavLink to={`/animals/${animal.id}`}>{animal.name}</NavLink>
              </td>
              <td>{animal.arrival_date}</td>
              <td>{animal.age}</td>
              <td>{animal.sex}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default AnimalContainer;