import React, { useState } from "react"

const AddRestaurant = () => {
    const [name, setName] = useState("");
    const [location, setLoc] = useState("");
    const [price_range, setPrice] = useState("Price Range");
    return (
        <div className="mb-4">
            <form action="">
                <div className="row gx-2 align-items-center">
                    <div className="col">
                        <input type="text" value = {name} onChange={e => setName(e.target.value)} className="form-control" placeholder="name" />
                    </div>
                    <div className="col">
                        <input type="text" value = {location} onChange={e => setLoc(e.target.value)} className="form-control" placeholder="location" />  
                    </div>
                    <div className="col">
                        <select className="form-select" value = {price_range} onChange={e => setPrice(e.target.value)} >
                            <option disabled>Price Range</option>
                            <option value="1">$</option>
                            <option value="2">$$</option>
                            <option value="3">$$$</option>
                            <option value="4">$$$$</option>
                            <option value="5">$$$$$</option>
                        </select>
                    </div>
                    <div className="col-auto">
                        <button type="submit" className="btn btn-primary">Add</button>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default AddRestaurant;