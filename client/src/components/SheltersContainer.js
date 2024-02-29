import React,  {useState, useEffect} from "react"; 
import {NavLink} from "react-router-dom";
import './App.css';
import NavBar from "./NavBar.js";

function SheltersContainer(){
    const [searchQuery, setSearchQuery] = useState("");
    const [shelters, setShelters] = useState([]);

    const handleSearchChange = (e) => {
        setSearchQuery(e.target.value);
      };

      useEffect(()=> {
        fetch('/shelters')
        .then(res => res.json())
        .then(data => setShelters(data))
        .catch(error => console.log('error'))
      }, [])

    const filteredShelters = shelters.filter((shelter) =>
        shelter.name.toLowerCase().includes(searchQuery.toLowerCase())
        );
    
    return(
        <div>
            <header>
                <NavBar/>
            </header>
            <input
                type="text"
                placeholder="Search by name..."
                value={searchQuery}
                onChange={handleSearchChange}
                className="search-input"
            />
            <table>
                <thead>
                    <tr className = 'table-row'>
                       <th>Name</th>
                       <th>Owner</th>
                       <th>Address</th>
                       <th>E-mail</th>
                       <th>Phone-Number</th>
                       <th>About</th>
                    </tr>
                </thead>
                <tbody>
                    {filteredShelters.map((shelter) =>(
                        <tr className="table-row" key={shelter.id}>
                            <td>
                             <NavLink to={`/shelters/${shelter.id}`}>{shelter.name}</NavLink>
                            </td>
                            <td>{shelter.owner}</td>
                            <td>{shelter.address}</td>
                            <td>{shelter.email}</td>
                            <td>{shelter.phone}</td>
                            <td>{shelter.about}</td>
                       
                        </tr>
                   ))}
                </tbody>
            </table>
        </div>
    )
   
}

export default SheltersContainer;