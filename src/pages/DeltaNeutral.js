import React, {useState} from 'react';
import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';

import '../App.css';
import './DeltaNeutral.css';


import LineChart from '../components/LineChart/LineChart.js';
import BarChart from '../components/BarChart/BarChart.js';
import InfoBox from '../components/InfoBox/InfoBox.js';
import ScrollingPrices from '../components/ScrollingPrices/ScrollingPrices.js';
import TradingViewWidget from '../components/TradingViewWidget.js';
import IndexPriceBox from '../components/IndexPriceBox/IndexPriceBox.js';
import OptimPositions from '../components/OptimPositions/OptimPositions.js';

const DeltaNeutral=()=>{

    return(

    <div className="App">
        <header className="App-header">
            <div className='header-container'>
                <IndexPriceBox/>
            </div>
            <div className='firstrow-container'>
                <LineChart/>
                <OptimPositions/>
            </div>
            <div className='secondrow-container'>
            <InfoBox/>
            </div>
      </header>
    </div>

    );
};
export default DeltaNeutral;