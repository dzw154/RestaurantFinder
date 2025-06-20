import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './routes/Home';
import Update from './routes/UpdateRestaurant';
import Details from './routes/RestaurantDetail';

const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/restaurants/:id/update" element={<Update />} />
                <Route path="/restaurants/:id" element={<Details />} />
            </Routes>
        </Router>
    );
};

export default App;
