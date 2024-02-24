import React, { useState } from "react";
import { useParams } from "react-router-dom";
import dogsData from "./db.json";
import "./App.css";
import NavBar from "./NavBar.js";

function DogCard() {
  const { id } = useParams();
  const [dog, setDog] = useState(dogsData.dogs.find((dog) => dog.id === parseInt(id)));
  const [editMode, setEditMode] = useState(false);
  const [updatedDog, setUpdatedDog] = useState({});

  const handleEditClick = () => {
    setEditMode(true);
  };

  const handleInputChange = (e) => {
    setUpdatedDog({
      ...updatedDog,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const updatedDogData = {
      ...dog,
      ...updatedDog,
    };

    setDog(updatedDogData);
    setEditMode(false);
  };

  if (!dog) {
    return <div>Invalid dog ID</div>;
  }

  return (
    <div>
      <header>
        <NavBar />
      </header>
      <div className="dog-card">
        <h2 className="dog-card h2">{dog.name}</h2>
        <img className=".dog-card img" src={dog.image} alt={dog.name} />
        <p className=".dog-card-p">Arrival: {dog.arrival}</p>
        <p className=".dog-card-p">Age: {dog.age}</p>
        <p className=".dog-card-p">Sex: {dog.sex}</p>
        <p className=".dog-card-p">Color: {dog.color}</p>
        <p className=".dog-card-p">Vaccinated: {dog.vaccinated}</p>
        {editMode ? (
          <form onSubmit={handleSubmit}>
            <label>
              Name:
              <input
                type="text"
                name="name"
                value={updatedDog.name || ""}
                onChange={handleInputChange}
              />
            </label>
            <br />
            <label>
              image:
              <input
                type="text"
                name="age"
                value={updatedDog.img || ""}
                onChange={handleInputChange}
              />
            </label>
            <br />
            <br />
            <label>
              Arrival:
              <input
                type="text"
                name="arrival"
                value={updatedDog.arrival || ""}
                onChange={handleInputChange}
              />
            </label>
            <br />
            <br />
            <label>
              Age:
              <input
                type="text"
                name="age"
                value={updatedDog.age || ""}
                onChange={handleInputChange}
              />
            </label>
            <br />
            <br />
            <label>
              Sex:
              <input
                type="text"
                name="sex"
                value={updatedDog.sex || ""}
                onChange={handleInputChange}
              />
            </label>
            <br />
            <br />
            <label>
              Color:
              <input
                type="text"
                name="color"
                value={updatedDog.color || ""}
                onChange={handleInputChange}
              />
            </label>
            <br />
            <br />
            <label>
              Vaccinated?:
              <input
                type="text"
                name="vaccinated"
                value={updatedDog.vaccinated || ""}
                onChange={handleInputChange}
              />
            </label>
            <br />
            <button type="submit">Save</button>
          </form>
        ) : (
          <button className=".dog-card button" onClick={handleEditClick}>
            Edit Animal
          </button>
        )}
      </div>
    </div>
  );
}

export default DogCard;