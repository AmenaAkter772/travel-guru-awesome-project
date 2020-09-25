
import { Grid } from '@material-ui/core';
import React from 'react';
import { array } from '../FakeData/FakeData';
import TravelPart from '../TravelPart/TravelPart';
import './Home.css'


const Home = () => {
     // const [selectPlace, setSelectPlace] = useState()
    // console.log(selectPlace);

    // const addHandler = id => {
    //     const data = array.toString()
    //     const selectItems = data.find( items => items.id === id.id)
    //     console.log(selectItems);
    //     // setSelectPlace (selectItems)
    // }

    ;
    return (
        <>
        <div>
         {/* <h5>{selectPlace}</h5> */}
        </div>
            <div>
                <Grid
                container
                direction="row"
                justify="center"
                alignItems="center"
                style={{marginTop:'200px', marginLeft:'200px'}}
                >
                {
                array.map(travel => <TravelPart travel = {travel} key={travel.id}></TravelPart>)
                }
                </Grid>
            </div>
            </>
   )
};

export default Home;