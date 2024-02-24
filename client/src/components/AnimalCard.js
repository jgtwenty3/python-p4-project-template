import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./App.css";
import NavBar from "./NavBar";

function AnimalCard() {
  const { id } = useParams();
  const [animal, setAnimal] = useState(null);
  const [editMode, setEditMode] = useState(false);
  const [updatedAnimal, setUpdatedAnimal] = useState({});

  useEffect(() => {
    fetch(`/animals/${id}`)
      .then((res) => res.json())
      .then((data) => setAnimal(data))
      .catch((error) => console.log(error));
  }, [id]);

  const handleEditClick = () => {
    setEditMode(true);
  };

  const handleInputChange = (e) => {
    setUpdatedAnimal({
      ...updatedAnimal,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const updatedAnimalData = {
      ...animal,
      ...updatedAnimal,
    };

    setAnimal(updatedAnimalData);
    setEditMode(false);
  };

  if (!animal) {
    return <div>Invalid animal ID</div>;
  }

  return (
    <div>
      <header>
        <NavBar />
      </header>
      <div className="animal-card">
        <h2 className="animal-card h2">{animal.name}</h2>
        <img className=".animal-card img" src={animal.image} alt={animal.name} />
        <p className=".animal-card-p">Arrival: {animal.arrival_date}</p>
        <p className=".animal-card-p">Age: {animal.age}</p>
        <p className=".animal-card-p">Breed: {animal.breed}</p>
        <p className=".animal-card-p">Sex: {animal.sex}</p>
        <p className=".animal-card-p">Color: {animal.color}</p>
        <p className=".animal-card-p">Weight: {animal.weight}</p>
        <p className=".animal-card-p">Description: {animal.description}</p>
        <p className=".animal-card-p">Vaccinated: {animal.vaxstatus}</p>
        <p className=".animal-card-p">Special Needs: {animal.special_needs}</p>
        <p className=".animal-card-p">Adoption Status: {animal.adoption_status}</p>
        <p className=".animal-card-p">Destination: {animal.destination}</p>
        {editMode ? (
          <form onSubmit={handleSubmit}>
            <label>
              Name:
              <input
                type="text"
                name="name"
                value={updatedAnimal.name || ""}
                onChange={handleInputChange}
              />
            </label>
            <br />
            <label>
              Image:
              <input
                type="text"
                name="image"
                value={updatedAnimal.image || ""}
                onChange={handleInputChange}
              />
            </label>
            <br />
            <label>
              Arrival Date:
              <input
                type="text"
                name="arrival_date"
                value={updatedAnimal.arrival_date || ""}
                onChange={handleInputChange}
              />
            </label>
            <br />
            <label>
              Age:
              <input
                type="text"
                name="age"
                value={updatedAnimal.age || ""}
                onChange={handleInputChange}
              />
            </label>
            <br />
            <label>
              Breed:
              <input
                type="text"
                name="breed"
                value={updatedAnimal.breed || ""}
                onChange={handleInputChange}
              />
            </label>
            <br />
            <label>
              Sex:
              <input
                type="text"
                name="sex"
                value={updatedAnimal.sex || ""}
                onChange={handleInputChange}
              />
            </label>
            <br />
            <label>
              Color:
              <input
                type="text"
                name="color"
                value={updatedAnimal.color || ""}
                onChange={handleInputChange}
              />
            </label>
            <br />
            <label>
              Weight:
              <input
                type="text"
                name="weight"
                value={updatedAnimal.weight || ""}
                onChange={handleInputChange}
              />
            </label>
            <br />
            <label>
              Description:
              <input
                type="text"
                name="description"
                value={updatedAnimal.description || ""}
                onChange={handleInputChange}
              />
            </label>
            <br />
            <label>
              Vaccinated?:
              <input
                type="text"
                name="vaxstatus"
                value={updatedAnimal.vaxstatus || ""}
                onChange={handleInputChange}
              />
            </label>
            <br />
            <label>
              Special Needs:
              <input
                type="text"
                name="special_needs"
                value={updatedAnimal.special_needs || ""}
                onChange={handleInputChange}
              />
            </label>
            <br />
            <label>
              Adoption Status:
              <input
                type="text"
                name="adoption_status"
                value={updatedAnimal.adoption_status || ""}
                onChange={handleInputChange}
              />
            </label>
            <br />
            <label>
              Destination:
              <input
                type="text"
                name="destination"
                value={updatedAnimal.destination || ""}
                onChange={handleInputChange}
              />
            </label>
            <br />
            <button type="submit">Save</button>
          </form>
        ) : (
          <button className=".animal-card button" onClick={handleEditClick}>
            Edit Animal
          </button>
        )}
      </div>
    </div>
  );
}

export default AnimalCard;