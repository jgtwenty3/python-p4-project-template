import React, { useState } from "react";
import NavBar from "./NavBar.js";
import './App.css';

function AddAnimalForm() {
  const [name, setName] = useState("");
  const [image, setImage] = useState("");
  const [arrivalDate, setArrivalDate] = useState("");
  const [species, setSpecies] = useState("");
  const [age, setAge] = useState("");
  const [sex, setSex] = useState("");
  const [breed, setBreed] = useState("");
  const [color, setColor] = useState("");
  const [weight, setWeight] = useState("");
  const [description, setDesciption] = useState("");
  const [vaxStatus, setVaxstatus] = useState("");
  const [specialNeeds, setSpecialNeeds] = useState("");
  const [adoptionStatus, setAdoptionStatus] = useState("");
  const [destination, setDestination] = useState("");


  const handleSubmit = (event) => {
    event.preventDefault();

    const newAnimal = {
      name, 
      image, 
      arrivalDate,
      species,
      age,
      sex,
      breed,
      color, 
      weight, 
      description,
      vaxStatus,
      specialNeeds,
      adoptionStatus,
      destination
    };
   
    fetch("/animals", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newAnimal),
    })

  };


    return (
      <div>
        <header>
          <NavBar />
        </header>
        <div className="form-container">
          <h2>Add New Animal</h2>
  
          <form onSubmit={handleSubmit}>
            <label className = ".form-container label" htmlFor="name">Name:</label>
            <input className ="form-container input"
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
    
            <label className = ".form-container label" htmlFor="image">Image URL:</label>
            <input className ="form-container input"
              type="text"
              id="image"
              value={image}
              onChange={(e) => setImage(e.target.value)}
            />
    
            <label className = ".form-container label" htmlFor="arrival">Arrival:</label>
            <input className ="form-container input"
              type="text"
              id="arrival"
              value={arrivalDate}
              onChange={(e) => setArrivalDate(e.target.value)}
            />
            <label className = ".form-container label" htmlFor="species">Species:</label>
            <input className ="form-container input"
              type="text"
              id="species"
              value={species}
              onChange={(e) => setSpecies(e.target.value)}
            />
    
            <label className = ".form-container label" htmlFor="age">Age:</label>
            <input className ="form-container input"
              type="text"
              id="age"
              value={age}
              onChange={(e) => setAge(e.target.value)}
            />
    
            <label className = ".form-container label" htmlFor="sex">Sex:</label>
            <input className ="form-container input"
              type="text"
              id="sex"
              value={sex}
              onChange={(e) => setSex(e.target.value)}
            />
            <label className = ".form-container label" htmlFor="breed">Breed:</label>
            <input className ="form-container input"
              type="text"
              id="breed"
              value={breed}
              onChange={(e) => setBreed(e.target.value)}
            />
    
            <label className = ".form-container label" htmlFor="color">Color:</label>
            <input className ="form-container input"
              type="text"
              id="color"
              value={color}
              onChange={(e) => setColor(e.target.value)}
            />
            <label className = ".form-container label" htmlFor="weight">Weight:</label>
            <input className ="form-container input"
              type="text"
              id="weight"
              value={weight}
              onChange={(e) => setWeight(e.target.value)}
            />
            
            <label className = ".form-container label" htmlFor="description">Description:</label>
            <input className ="form-container input"
              type="text"
              id="description"
              value={description}
              onChange={(e) => setDesciption(e.target.value)}
            />
    
            <label className = ".form-container label" htmlFor="vaccinated">Vaccinated:</label>
            <input className ="form-container input"
              type="text"
              id="vaccinated"
              value={vaxStatus}
              onChange={(e) => setVaxstatus(e.target.value)}
            />
            <label className = ".form-container label" htmlFor="specialNeeds">Special Needs:</label>
            <input className ="form-container input"
              type="text"
              id="specialNeeds"
              value={specialNeeds}
              onChange={(e) => setSpecialNeeds(e.target.value)}
            />
            <label className = ".form-container label" htmlFor="adoptionStatus">AdoptionStatus:</label>
            <input className ="form-container input"
              type="text"
              id="adoptionStatus"
              value={adoptionStatus}
              onChange={(e) => setAdoptionStatus(e.target.value)}
            />
            <label className = ".form-container label" htmlFor="destination">Destination:</label>
            <input className ="form-container input"
              type="text"
              id="destination"
              value={destination}
              onChange={(e) => setDestination(e.target.value)}
            />
    
            <button type="submit">Add Animal</button>
            
          </form>
        </div>
      </div>
      );
    }
export default AddAnimalForm;    