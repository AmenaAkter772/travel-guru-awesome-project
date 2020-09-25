import React, { useState } from 'react';
import {  useHistory, useParams } from 'react-router-dom';
import { array } from '../FakeData/FakeData';
import { Button } from 'react-bootstrap';
import './BookingRoom.css'

const BookingRoom = () => {
    const {bookId} = useParams();
    const select = array.find(pd => pd.id.toString() === bookId);
    const {title, body,id} = select;

    const [date,setDate]=useState(null)
    const [time,setTime]=useState(null)
    const history = useHistory()
    const submitHandler = () => {
     history.push(`/booking/${id}`)

    }
    return (
        <div>
            <div className="main-container">        
                <div className="textPart">
                   <h1 style={{color:'white'}}>{title}</h1>
                   <p style={{color:'white'}}>{body}</p>
                </div>
            <div className="calendar">
                <form onSubmit={submitHandler} style={{marginLeft:'40px'}}>
                    <label style={{marginTop:'40px'}} htmlFor="origin">Origin</label><br/>
                    <input  id="origin" type="text" required/><br/>
                    <label htmlFor="destination">Destination</label><br/>
                    <input id="destination" type="text" required/><br/><br/>
                    <div className="date-time">
                        <div>
                            <label htmlFor="from">From</label><br/>
                            <label htmlFor="meeting"></label><input id="meeting" type="date" value="2011-01-13" selected={date} onChange={date => setDate(date)} required/><br/>
                        </div>
                        <div style={{marginLeft:'40px'}}>
                            <label htmlFor="to">To</label><br/>
                            <label htmlFor="time"></label><input type="time" id="time" name="time" selected={time} onChange={date => setTime(date)} required></input>
                        </div>
                    </div><br/>
                    <Button type="submit" variant="danger" style={{width:'320px'}}>Start Booking</Button>
                </form>
            </div>
            </div>
            
        </div>
    );
};

export default BookingRoom;