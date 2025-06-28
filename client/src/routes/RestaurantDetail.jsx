import React, { useContext, useEffect } from 'react'
import { useParams } from 'react-router-dom';
import { RestaurantsContext } from '../context/RestaurantContext';
import RestFinder from '../apis/RestFinder';
import StarRating from '../components/StarRating';
import Reviews from '../components/Reviews';
import AddReview from '../components/AddReview';

const Details =  () => {
    const {id} = useParams();
    const {selectedRestaurant, setSelected} = useContext(RestaurantsContext);

    useEffect(() =>{
        const fetchData = async () =>{
            try{
                const response = await RestFinder.get(`/${id}`);
                setSelected(response.data.data);
            }catch(err){
                console.log(err);
            }
        }
        fetchData();
    }, [])
    return (
        <div>
            {selectedRestaurant && (
                <>
                <div className="mp-3">
                    <Reviews reviews={selectedRestaurant.reviews}/>
                </div>
                <AddReview/>
                </>
                )}
        </div>
    )
};

export default Details;