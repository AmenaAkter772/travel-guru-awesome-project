import React from 'react';
import { useHistory } from 'react-router-dom';
import './TravelPart.css'

const TravelPart = (props) => {
    const {title,image,id}= props.travel;
    const history = useHistory()
    const addHandler = () => {
        history.push(`/about/${id}`)
    }
    
    return (
    
            <div onClick={addHandler} style={{backgroundImage:`url(${image})`}} className="selectPlace">
              <h3 className="textStyle">{title}</h3>
           </div>
    );
};

export default TravelPart;