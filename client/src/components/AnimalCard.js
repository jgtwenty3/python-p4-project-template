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
      <div className="animal-card"style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
        <h2 className="animal-card h2">{animal.name}</h2>
        <img className=".animal-card img" src={animal.image} alt={animal.name} />
        <table className="animalcard-table">
        <tbody>
          <tr className="centered-table-row">
            <td>Arrival Date:</td>
            <td>{animal.arrival}</td>
          </tr>
          <tr className="centered-table-row">
            <td>Age:</td>
            <td>{animal.age}</td>
          </tr>
          <tr className="centered-table-row">
            <td>Breed:</td>
            <td>{animal.breed}</td>
          </tr>
          <tr className="centered-table-row">
            <td>Sex:</td>
            <td>{animal.sex}</td>
          </tr>
          <tr className="centered-table-row">
            <td>Color:</td>
            <td>{animal.color}</td>
          </tr>
          <tr className="centered-table-row">
            <td>Weight:</td>
            <td>{animal.weight}</td>
          </tr>
          <tr className="centered-table-row">
            <td>Description:</td>
            <td>{animal.description}</td>
          </tr>
          <tr className="centered-table-row">
            <td>Rabies Shots Date:</td>
            <td>{animal.rabies}</td>
          </tr>
          <tr lassName="centered-table-row">
            <td>SNAP Shots Date:</td>
            <td>{animal.snap}</td>
          </tr>
          <tr className="centered-table-row">
            <td>DHPP Shots Date:</td>
            <td>{animal.dhpp}</td>
          </tr>
          <tr className="centered-table-row">
            <td>Spayed/Neutered?:</td>
            <td>{animal.spayneuter}</td>
          </tr>
          <tr className="centered-table-row">
            <td>Microchip Number:</td>
            <td>{animal.microchip}</td>
          </tr>
          <tr className="centered-table-row">
            <td>Rescued By:</td>
            <td>{animal.rescuer}</td>
          </tr>
          <tr className="centered-table-row">
            <td>Rescued From:</td>
            <td>{animal.rescuedfrom}</td>
          </tr>
          <tr className="centered-table-row">
            <td>Special Needs:</td>
            <td>{animal.specialneeds}</td>
          </tr>
          <tr className="centered-table-row">
            <td>Adoption Status:</td>
            <td>{animal.adoptionstatus}</td>
          </tr>
          <tr className="centered-table-row">
            <td>Destination:</td>
            <td>{animal.destination}</td>
          </tr>
        </tbody>
      </table>
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