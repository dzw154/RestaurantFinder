import React, { useState } from "react";

const AddReview = () =>{
    const [name, setName] = useState("");
    const [reviewText, setText] = useState("");
    const [rating, setRating] = useState("Rating");

    const handleReview = async () =>{

    }

    return (
        <div className="mb-2">
            <form action="">
                <div className="row mb-3">
                    <div className="form-group col-md-8">
                        <label htmlFor="name" className="form-label">Name</label>
                        <input id="name" value={name} onChange={(e) => setName(e.target.value)} placeholder="name" type="text" className="form-control" />
                    </div>
                    <div className="mb-3 col-md-4">
                        <label htmlFor="rating" className="form-label">Rating</label>
                        <select id="rating" value={rating} onChange={(e) => setRating(e.target.value)} className="form-select">
                            <option disabled>Rating</option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                        </select>
                    </div>
                </div>
                <div className="form-group">
                    <label htmlFor="Review" className="form-label">Review</label>
                    <textarea id="Review" value={reviewText} onChange={(e) => setText(e.target.value)} className="form-control"></textarea>
                </div>
                <button className="btn btn-primary" onClick={handleReview}>Submit</button>
            </form>
        </div>
    )
}

export default AddReview;