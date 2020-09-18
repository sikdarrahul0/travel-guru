import React from 'react';
import hotelData from '../../hotelData/hotelData';
import './CheckOut.css';
import starLogo from '../../Icon/star_1_.png'
import { useParams } from 'react-router-dom';

const CheckOut = () => {
    const {title} = useParams();
    const location = `https://maps.google.com/maps?width=520&amp;height=400&amp;hl=en&amp;q=${title}%20+()&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed`
    
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
                                <h5>{info.title}</h5>
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
                <div style={{overflow: 'hidden'}} className="col-4 google-map">
                
                <iframe width="520" height="400" frameBorder="0" scrolling="no" marginHeight="0" marginWidth="0" id="gmap_canvas" src={location}></iframe><script type='text/javascript' src='https://maps-generator.com/google-maps-authorization/script.js?id=AIzaSyANda9McsMTWYE750YGB2pisk-JwPNbjU0'></script>
                </div>
            </div>
            
           
        </section>
    );
};

export default CheckOut;