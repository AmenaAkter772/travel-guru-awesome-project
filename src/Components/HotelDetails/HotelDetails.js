import React from 'react';
import StarIcon from '@material-ui/icons/Star';
import './HotelDetails.css'

const HotelDetails = (props) => {
    const {image, name, price, star, review, bed, bedroom,guest, bath} = props.hotel;
    return (
        <div className="hotel-main-container">
            <div className="hotelPart">
                <div className="image">
                    <img style={{width:'250px', margin:'15px'}} src={image} alt=""/>
                </div>
                <div style={{marginTop:'15px'}}>
                   <h6>{name}</h6>
                   <div className="hotel-features">
                   <span>{guest} guests </span>
                   <span>{bedroom} bedrooms</span>
                   <span>{bed} beds</span>
                   <span>{bath} baths</span>
               </div>
                    <p>Wif air conditioning kitchen</p>
                    <p>Cancellation flexibility available</p>
                    <span><StarIcon style={{color:'yellow'}}></StarIcon>{star}</span>
                    <span>({review})</span>
                    <span>${price}/Night</span>
                    <span>167 total</span>
                </div>
                
            </div>
        </div>
    );
};

export default HotelDetails;