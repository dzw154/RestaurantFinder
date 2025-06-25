import React, { useContext, useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import RestFinder from '../apis/RestFinder';
import { RestaurantsContext } from '../context/RestaurantContext';



const UpdateRestaurant = (props) =>{
    const {id} = useParams();
    let navigation = useNavigate();
    const {restaurant} = useContext(RestaurantsContext)
    const [name, setName] = useState("");
    const [location, setLocation] = useState("");
    const [price_range, setPriceRange] = useState("");

    const handleSubmit = async (e) =>{
        e.preventDefault();
        const updatedRestaurant = await RestFinder.put(`/${id}`, {name, location, price_range});
        navigation('/');
    }

    useEffect(() =>{
        const fetchData = async () =>{
            const response = await RestFinder.get(`/${id}`);
            setName(response.data.data.restaurant.name);
            setLocation(response.data.data.restaurant.location);
            setPriceRange(response.data.data.restaurant.price_range);
        }
        fetchData();
    }, [])


    return (
        <div>
            <form acion="">
                <div className='form-group'>
                    <label htmlFor='name'>Name</label>
                    <input value={name} onChange={e => setName(e.target.value)} id='name' className='form-control' type='text'></input>
                </div>

                <div className='form-group'>
                    <label htmlFor='location'>Location</label>
                    <input value={location} onChange={e => setLocation(e.target.value)} id='location' className='form-control' type='text'></input>
                </div>

                <div className='form-group'>
                    <label htmlFor='price_range'>Price Range</label>
                    <select value={price_range} onChange={e => setPriceRange(e.target.value)} className="form-select">
                            <option disabled>Price Range</option>
                            <option value="1">$</option>
                            <option value="2">$$</option>
                            <option value="3">$$$</option>
                            <option value="4">$$$$</option>
                            <option value="5">$$$$$</option>
                        </select>
                </div>

                <button type='submit' onClick={handleSubmit} className='btn btn-primary'>Submit</button>
            </form>
        </div>
    )
}

export default UpdateRestaurant;