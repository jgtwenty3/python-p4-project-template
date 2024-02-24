import React, { useState } from "react";
import dogsData from "./db.json";
import NavBar from "./NavBar.js";
import './App.css';

function AddAnimalForm() {
  const [name, setName] = useState("");
  const [image, setImage] = useState("");
  const [arrival, setArrival] = useState("");
  const [age, setAge] = useState("");
  const [sex, setSex] = useState("");
  const [color, setColor] = useState("");
  const [vaccinated, setVaccinated] = useState("");

  const [newDogData, setNewDogData] = useState({
  
    name: "",
    image: "",
    arrival: "",
    age: "",
    sex: "",
    color: "",
    vaccinated: ""
  });
  

  const handleSubmit = (event) => {
    event.preventDefault();

    const newDog = {
      ...newDogData
    };
    console.log(JSON.stringify(newDog));

    const configObj = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': "application/json"
      },
      body: JSON.stringify(newDog),
    };

    fetch("http://localhost:3000/dogs",configObj) 
    .then(res => res.json())
    .then(newDog => {
        dogsData.dogs.push(newDog);

        setNewDogData({
          name: "",
          image: "",
          arrival: "",
          age: "",
          sex: "",
          color: "",
          vaccinated: ""
        });
      });
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
              value={arrival}
              onChange={(e) => setArrival(e.target.value)}
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
    
            <label className = ".form-container label" htmlFor="color">Color:</label>
            <input className ="form-container input"
              type="text"
              id="color"
              value={color}
              onChange={(e) => setColor(e.target.value)}
            />
    
            <label className = ".form-container label" htmlFor="vaccinated">Vaccinated:</label>
            <input className ="form-container input"
              type="text"
              id="vaccinated"
              value={vaccinated}
              onChange={(e) => setVaccinated(e.target.value)}
            />
    
            <button type="submit">Add Dog</button>
            
          </form>
        </div>
      </div>
      );
    }
export default AddAnimalForm;    