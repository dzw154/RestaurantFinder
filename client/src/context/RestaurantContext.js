import React, {useState, createContext} from 'react';

export const RestaurantsContext = createContext();

export const RestaurantsContextProvide = (props) =>{
    const [restaurants, setRestaurants] = useState([]);
    const [selectedRestaurant, setSelected] = useState(null);

    const addRestaurants = (restaurant) => {
        setRestaurants([...restaurants, restaurant])
    }

    return(
        <RestaurantsContext.Provider value = {{restaurants, setRestaurants, addRestaurants, selectedRestaurant, setSelected}}>
            {props.children}
        </RestaurantsContext.Provider>
    )
}