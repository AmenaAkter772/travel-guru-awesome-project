import React from 'react';
import { useParams } from 'react-router-dom';
import { array, hotelInformation } from '../FakeData/FakeData';
import HotelDetails from '../HotelDetails/HotelDetails';
import SimpleMap from '../SimpleMap/SimpleMap';

const Hotel = () => {
    const {detailId} = useParams()
    const select = array.find(pd => pd.id.toString() === detailId);
    const {title} = select;
    return (
        <div>
        <div style={{backgroundColor:'white'}}>
            <h1>Stay in {title}</h1>
            <div style={{display:'flex'}}>
                <div style={{width:'60%'}}>
                    {
                        hotelInformation.map(hotel => <HotelDetails hotel= {hotel} key={hotel.id}></HotelDetails>)
                    }
                
                </div>
                <div>
                    <h1>map show here</h1>
                   <SimpleMap></SimpleMap>
                </div>
            </div>
        </div>
        </div>
    );
};

export default Hotel;