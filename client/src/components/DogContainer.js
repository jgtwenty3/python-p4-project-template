import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import dogsData from "./db.json";
import './App.css';

function DogContainer() {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const filteredDogs = dogsData.dogs.filter((dog) =>
    dog.name.toLowerCase().includes(searchQuery.toLowerCase())
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
          {filteredDogs.map((dog) => (
            <tr
              className="table-row"
              key={dog.id}
            >
              <td>
                <NavLink to={`/dogs/${dog.id}`}>{dog.name}</NavLink>
              </td>
              <td>{dog.arrival}</td>
              <td>{dog.age}</td>
              <td>{dog.sex}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default DogContainer;