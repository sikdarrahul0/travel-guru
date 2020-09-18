import React from 'react';
import './SpotUnit.css'

const SpotUnit = (props) => {
    const {title, img, id} = props.place;
    const design ={
        background: `url(${img})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        
    }
    return (
        <>
        <div className="spot-div" style={design} onClick={()=>props.handleChange(id)}>
            <h4 className="title-design">{title}</h4>
        </div>
        </>
    );
};

export default SpotUnit;