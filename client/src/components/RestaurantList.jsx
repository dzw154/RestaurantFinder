import React, {useContext, useEffect} from 'react'
import RestFinder from '../apis/RestFinder'
import { RestaurantsContext } from '../context/RestaurantContext';

const RestaurantList = (props) => {
    const {restaurants, setRestaurants} = useContext(RestaurantsContext);
    useEffect( () => {
        async function getEffect(){
            try{
                const response = await RestFinder.get("/");
                setRestaurants(response.data.data.restaurants);
            }catch(err){
                console.log(err)
            }
        }
        getEffect();

    }, []);

    return (
        <div className='list-group'>
            <table className="table table-hover table-dark">
                <thead>
                    <tr className='table-primary'>
                        <th scope='col'>Restaurant</th>
                        <th scope='col'>Location</th>
                        <th scope='col'>Price Range</th>
                        <th scope='col'>Ratings</th>
                        <th scope='col'>Edit</th>
                        <th scope='col'>Delete</th>

                    </tr>
                </thead>
                <tbody>
                    {restaurants && restaurants.map(restaurant => {
                        return(
                        <tr key={restaurant.id}>
                            <td>{restaurant.name}</td>
                            <td>{restaurant.location}</td>
                            <td>{"$".repeat(restaurant.price_range)}</td>
                            <td>reviews</td>
                            <td><button className="btn btn-warning">Update</button></td>
                            <td><button className="btn btn-danger">Delete</button></td>
                        </tr>
                    )})}
                    {/* <tr>
                        <td>test rest</td>
                        <td>test loc</td>
                        <td>$$</td>
                        <td>test</td>
                        <td><button className="btn btn-warning">Update</button></td>
                        <td><button className="btn btn-danger">Delete</button></td>
                    </tr> */}
                </tbody>
            </table>
        </div>
    )
}
export default RestaurantList;