import React from 'react';
import { Link, useParams } from 'react-router-dom';
import './Booking.css';
import touristSpotData from '../../touristSpotData/touristSpotData';
import Header from '../Header/Header';

const Booking = () => {
    const {id} = useParams();
    const place = touristSpotData.find(spot=> spot.id === parseInt(id));

    return (
        <>
        <section className="book-page">
            <div className="inner">
            <Header></Header>
            <div style={{display: 'flex'}}>
               <div className="spot-info">
                    <h1>{place.title}</h1>
                    <p>{place.details}</p>
                </div>
                <div className="booking-form">
                    <form action="">
                        <div class="form-group">
                                <label for="origin">Origin</label>
                                <input type="text" class="form-control input-field" id="origin" placeholder="Starting Point"></input>
                        </div>
                        <div class="form-group">
                            <label for="destination">Destination</label>
                            <input type="text" class="form-control input-field" id="destination" value={place.title}></input>
                        </div>
                        <div style={{display: 'flex', marginBottom: '10px'}}>
                            <div>
                                <label for="start">From</label>
                                <input type="date" class="form-control input-field-date" id="start" name="trip-start"
                                min="2020-09-18" max="2021-12-31"></input>
                            </div>
                            <div>
                                <label for="start">To</label>
                                <input type="date" class="form-control input-field-date" id="start" name="trip-start"
                                min="2020-09-18" max="2021-12-31"></input>
                            </div>
                        </div>
                        <Link to="/checkout"><button className="booking-btn btn-warning">Start Booking</button></Link>
                    </form>
                </div>
                </div>
            </div>
        </section>
        </>
    );
};

export default Booking;