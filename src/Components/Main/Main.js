import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import touristSpotData from '../../touristSpotData/touristSpotData';
import SpotUnit from '../SpotUnit/SpotUnit';
import Header from '../Header/Header';


import './Main.css';
const Main = () => {
    const[spot, setSpot] = useState(touristSpotData[0]);
    const handleChange = (id) => {
       const newPlace = touristSpotData.find(spot => spot.id === id)
       console.log(newPlace);
       setSpot(newPlace);
    }
    return (
        <>
        <section className="main-page">
            <div className="inner">
            <Header></Header>
            <div style={{display: 'flex'}}>
            <div className="spot-info">
                <h1>{spot.title}</h1>
                <p>{spot.summary}</p>
                <Link to={`/booking/${spot.id}`}><Button className="btn btn-warning">Booking <FontAwesomeIcon icon={ faArrowRight } /></Button></Link>
            </div>
            {
                touristSpotData.map(place => <SpotUnit place={place} handleChange={handleChange} ></SpotUnit>)
            }
            </div>
            </div>
        </section>
        </>
    );
};

export default Main;