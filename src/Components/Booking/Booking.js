import React from 'react';
import { Link, useParams } from 'react-router-dom';
import './Booking.css';
import touristSpotData from '../../touristSpotData/touristSpotData';

const Booking = () => {
    const {id} = useParams();
    const place = touristSpotData.find(spot=> spot.id === parseInt(id));

    return (
        <>
        <section className="book-page">
            <div className="inner">
            <div style={{display: 'flex', paddingTop: '185px'}}>
               <div className="spot-info">
                    <h1>{place.title}</h1>
                    <p>{place.details}</p>
                </div>
                <div className="booking-form">
                    <form action="">
                        <div className="form-group">
                                <label htmlFor="origin">Origin</label>
                                <input type="text" className="form-control input-field" id="origin" placeholder="Starting Point" required></input>
                        </div>
                        <div className="form-group">
                            <label htmlFor="destination">Destination</label>
                            <input type="text" className="form-control input-field" id="destination" defaultValue={place.title}></input>
                        </div>
                        <div style={{display: 'flex', marginBottom: '10px'}}>
                            <div>
                                <label htmlFor="start">From</label>
                                <input type="date" className="form-control input-field-date" id="start" name="trip-start"
                                min="2020-09-18" max="2021-12-31" required></input>
                            </div>
                            <div>
                                <label htmlFor="start">To</label>
                                <input type="date" className="form-control input-field-date" id="start" name="trip-start"
                                min="2020-09-18" max="2021-12-31" required></input>
                            </div>
                        </div>
                        <Link to={`/checkout/${place.title}`}><button className="booking-btn btn-warning">Start Booking</button></Link>
                    </form>
                </div>
                </div>
            </div>
        </section>
        </>
    );
};

export default Booking;