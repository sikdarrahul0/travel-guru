import React from 'react';
import hotelData from '../../hotelData/hotelData';
import './CheckOut.css';
import starLogo from '../../Icon/star_1_.png'
import { useParams } from 'react-router-dom';
import touristSpotData from '../../touristSpotData/touristSpotData';

const CheckOut = () => {
    const {title} = useParams();

    return (
        <section className="container checkout-page">
            <p>252 stays Apr 13-17 3 guests</p>
            <h4>Stay in {title}</h4>
            <div className="row">
                
                    {
                        hotelData.map(info =>(
                            <>
                            <div className="col-8 hotel-data">
                            <div>
                                 <img src={info.img} alt="hotel-room"/>
                            </div>
                            <div className="info">
                                <h4>{info.title}</h4>
                                <p>{info.room}</p>
                                <p>{info.facility1}</p>
                                <p>{info.facility2}</p>
                                <div className="hotel-info">
                                    <p><img style={{width: '15px', height: '15px'}} src={starLogo} alt="logo"/> {info.rating}</p>
                                    <p>{info.price}</p>
                                    <p>{info.totalPrice}</p>
                                </div>

                            </div>
                            </div>
                            </>
                           
                        ))
                    }
                <div style={{overflow: 'hidden'}} className="col-4">
                   
                </div>
            </div>
            
           
        </section>
    );
};

export default CheckOut;