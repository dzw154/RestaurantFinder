require("dotenv").config();
const express = require("express");
const morgan = require("morgan");
const db = require("./db");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

// get all restaurants
app.get("/api/v1/restaurants", async (req, res) => {
    try{
        const results = await db.query("SELECT * FROM restaurants");
        res.status(200).json({
            status: "success", 
            data: {
                results: results.rows.length,
                restaurants: results.rows
            }
        });
    }
    catch(err){
        console.log(err);
    }
    
});

// get 1 restaurant
app.get("/api/v1/restaurants/:id", async (req, res) => {
    try{
        const restaurant = await db.query("SELECT * FROM restaurants WHERE id = $1", [req.params.id]);

        const reviews = await db.query("SELECT * FROM reviews WHERE restaurant_id = $1", [req.params.id]);

        res.status(200).json({
            status: "success",
            data: {
                restaurant: restaurant.rows[0],
                reviews: reviews.rows[0]
            }
        });
    }
    catch(err){ 
        console.log(err);
    }
});

// create a restaurant
app.post("/api/v1/restaurants", async (req, res) => {
    try{
        const result = await db.query("INSERT INTO restaurants (name, location, price_range) VALUES ($1, $2, $3) RETURNING *", [req.body.name, req.body.location, req.body.price_range]);
        res.status(201).json({
            status: "success",
            data: {
                restaurant: result.rows[0]
            }
        });
    }
    catch(err){
        console.log(err);
    }
});

// Update a restaurant
app.put("/api/v1/restaurants/:id", async (req, res) => {
    try{
        const result = await db.query("UPDATE restaurants SET name = $1, location = $2, price_range = $3 WHERE id = $4 RETURNING *", [req.body.name, req.body.location, req.body.price_range, req.params.id]);
        res.status(200).json({
            status: "success",
            data: {
                restaurant: result.rows[0]
            }
    });
    }
    catch(err){
        console.log(err);
    }
});

app.delete("/api/v1/restaurants/:id", async (req, res) => {
    try{
        const result = await db.query("DELETE FROM restaurants WHERE id = $1", [req.params.id]);
        res.status(204).json({
            status: "success"
        });
    }
    catch(err){
        console.log(err);
    }
});

const port = process.env.PORT || 4001;
app.listen(port, () => {
        console.log(`Server is up and listening on port ${port}`);
    }
);
