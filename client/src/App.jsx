import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './routes/Home';
import Update from './routes/UpdatePage';
import Details from './routes/RestaurantDetail';
import { RestaurantsContextProvide } from './context/RestaurantContext';

const App = () => {
    return (
        <RestaurantsContextProvide>
            <div className='container'>
                <Router>
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/restaurants/:id/update" element={<Update />} />
                        <Route path="/restaurants/:id" element={<Details />} />
                    </Routes>
                </Router>
            </div>
        </RestaurantsContextProvide>
    );
};

export default App;
