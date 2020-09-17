import React from 'react';
import './SpotUnit.css'

const SpotUnit = (props) => {
    const {title, img, id} = props.place;
    const design ={
        background: `url(${img})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        width: "270px",
        height: "416px",
        borderRadius: "20px",
        margin: "0 10px",
        color: "white",
        position: "relative",
        border: "none"  
    }
    return (
        <>
        <button style={design} onClick={()=>props.handleChange(id)}>
            <h4 className="title-design">{title}</h4>
        </button>
        </>
    );
};

export default SpotUnit;