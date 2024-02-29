import React, { useEffect, useState } from "react";
import { useParams, useHistory } from "react-router-dom";
import "./App.css";
import NavBar from "./NavBar";

function AnimalCard() {
  const { id } = useParams();
  const [animal, setAnimal] = useState(null);
  const [editMode, setEditMode] = useState(false);
  const history = useHistory(); 
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
      [e.target.name.toLowerCase()]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const updatedAnimalData = {
      ...animal,
      ...updatedAnimal,
    };
    

    fetch(`/animals/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedAnimalData),
    })
      .then((res) => res.json())
      .then((data) => {
        setAnimal(data);
        setEditMode(false);
        setUpdatedAnimal({});
      })
      .catch((error) => console.log(error));
  };

  const handleDelete = () => {
    fetch(`/animals/${id}`, {
      method: "DELETE",
    })
      .then(() => {
        console.log("Animal deleted successfully");
        history.push("/animals");
      })
      .catch((error) => console.log(error));
  };
  const handleNextClick = () => {
    
    const nextAnimalId = parseInt(id, 10) + 1;
    history.push(`/animals/${nextAnimalId}`);
  };
  const handlePreviousClick = () => {
   
    const previousAnimalId = parseInt(id, 10) - 1;
    history.push(`/animals/${previousAnimalId}`);
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
        <p className=".animal-card-p">Arrival: {animal.arrival}</p>
        <p className=".animal-card-p">Age: {animal.age}</p>
        <p className=".animal-card-p">Breed: {animal.breed}</p>
        <p className=".animal-card-p">Sex: {animal.sex}</p>
        <p className=".animal-card-p">Color: {animal.color}</p>
        <p className=".animal-card-p">Weight: {animal.weight}</p>
        <p className=".animal-card-p">Description: {animal.description}</p>
        <p className=".animal-card-p">Rabies Shots Date: {animal.rabies}</p>
        <p className=".animal-card-p">SNAP Shots Date: {animal.snap}</p>
        <p className=".animal-card-p">DHPP Shots Date: {animal.dhpp}</p>
        <p className = ".animal-card-p">Rescued By:{animal.rescuer}</p>
        <p className = ".animal-card-p">Rescued From:{animal.rescuedfrom}</p>
        <p className=".animal-card-p">Special Needs: {animal.specialneeds}</p>
        <p className=".animal-card-p">Adoption Status: {animal.adoptionstatus}</p>
        <p className=".animal-card-p">Destination: {animal.destination}</p>
        <p className = ".animal-card-p">Microchip:{animal.microchip}</p>
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
                name="arrival"
                value={updatedAnimal.arrival|| ""}
                onChange={handleInputChange}
              />
            </label>
            <br />
            <label>
              Rescued By:
              <input
                type="text"
                name="rescuer"
                value={updatedAnimal.rescuer || ""}
                onChange={handleInputChange}
              />
            </label>
            <br />
            <label>
              Rescued From:
              <input
                type="text"
                name="rescuedfrom"
                value={updatedAnimal.rescuedfrom || ""}
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
              Rabies Shot Date?:
              <input
                type="text"
                name="rabies"
                value={updatedAnimal.rabies|| ""}
                onChange={handleInputChange}
              />
            </label>
            <br />
            <label>
              SNAP Shot Date?:
              <input
                type="text"
                name="snap"
                value={updatedAnimal.snap|| ""}
                onChange={handleInputChange}
              />
            </label>
            <br />
            <label>
              DHPP Shot Date?:
              <input
                type="text"
                name="dhpp"
                value={updatedAnimal.dhpp|| ""}
                onChange={handleInputChange}
              />
            </label>
            <br />
            <label>
              Special Needs:
              <input
                type="text"
                name="specialneeds"
                value={updatedAnimal.specialneeds|| ""}
                onChange={handleInputChange}
              />
            </label>
            <br />
            <label>
              Adoption Status:
              <input
                type="text"
                name="adoptionstatus"
                value={updatedAnimal.adoptionstatus || ""}
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
            <label>
              Microhip:
              <input
                type="text"
                name="microchip"
                value={updatedAnimal.microchip|| ""}
                onChange={handleInputChange}
              />
            </label>
            <br />
            <button type="submit">Save</button>
          </form>
        ) : (
          <div className = "animal-card button-container">
            <button className="animal-card button" onClick={handlePreviousClick}>
              Previous Animal
            </button>
            <button className="animal-card button" onClick={handleEditClick}>
              Edit Animal
            </button>
            <button className="animal-card button" onClick={handleDelete}>
              Delete Animal
            </button>
            <button className="animal-card button" onClick={handleNextClick}>
              Next Animal
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default AnimalCard;