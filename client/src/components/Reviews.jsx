import React from "react";
import StarRating from "./StarRating";

const Reviews = ({reviews}) =>{
    return(
        <div className="container pt-2">
            <div className="row row-cols-3 row-cols-md-3 g-4">
                {reviews.map((review) => {
                    return(
                    <div className="col" key={review.id}>
                        <div className="card text-white bg-primary mb-3 me-4 g-3">
                            <div className="card-header d-flex justify-content-between">
                                <span>{review.name}</span>
                                <span><StarRating rating={review.rating}/></span>
                            </div>
                            <div className="card-body">
                                <p className="card-text">{review.review}</p>
                            </div>
                        </div>
                    </div>
                    )
                })}
            </div>
        </div>
)}

export default Reviews