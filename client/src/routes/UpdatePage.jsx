import React from 'react'
import { RestaurantsContext } from '../context/RestaurantContext';
import UpdateRestaurant from '../components/UpdateRestaurant';

const Update =  () => {
    return (
        <div>
            <h1 className='text-center'>Update Restaurant</h1>  
            <UpdateRestaurant/>
        </div>
    )
};

export default Update;