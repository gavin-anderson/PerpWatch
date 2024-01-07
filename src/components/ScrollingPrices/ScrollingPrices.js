import React from "react";
// import Slider from "react-slick";
// import "slick-carousel/slick/slick.css"; 
// import "slick-carousel/slick/slick-theme.css";
import './ScrollingPrices.css';

const prices = [
    {id:'ETH/USD', label:'ETH',fullName:'Ethereum', value:'$2,000', change:'+3.25%', delta:'$71.17', direction:1},
    {id:'BTC/USD', label:'BTC',fullName:'Bitcoin',value: '$40,000',change:'-2.69%', delta:'$1523.23', direction:0},
    {id:'ETH/USD', label:'ETH',fullName:'Ethereum', value:'$2,000', change:'+3.25%', delta:'$71.17', direction:1},
    {id:'BTC/USD', label:'BTC',fullName:'Bitcoin',value: '$40,000',change:'-2.69%', delta:'$1523.23', direction:0},
    {id:'ETH/USD', label:'ETH',fullName:'Ethereum', value:'$2,000', change:'+3.25%', delta:'$71.17', direction:1},
    {id:'BTC/USD', label:'BTC',fullName:'Bitcoin',value: '$40,000',change:'-2.69%', delta:'$1523.23', direction:0},
    {id:'ETH/USD', label:'ETH',fullName:'Ethereum', value:'$2,000', change:'+3.25%', delta:'$71.17', direction:1},
    {id:'BTC/USD', label:'BTC',fullName:'Bitcoin',value: '$40,000',change:'-2.69%', delta:'$1523.23', direction:0},
    {id:'ETH/USD', label:'ETH',fullName:'Ethereum', value:'$2,000', change:'+3.25%', delta:'$71.17', direction:1},
    {id:'BTC/USD', label:'BTC',fullName:'Bitcoin',value: '$40,000',change:'-2.69%', delta:'$1523.23', direction:0},
    {id:'ETH/USD', label:'ETH',fullName:'Ethereum', value:'$2,000', change:'+3.25%', delta:'$71.17', direction:1},
    {id:'BTC/USD', label:'BTC',fullName:'Bitcoin',value: '$40,000',change:'-2.69%', delta:'$1523.23', direction:0}
];



const ScrollingPrices = () => {
    return (
        <div className="scroll-container">
            <div className="scroll-content">
                {prices.map((price, index) => (
                    <div key={index} className="price-item">
                        <div className="price-fullname-change">
                            <span className="ticker-fullname">{price.fullName}</span>
                            <span className={`ticker-change ${price.direction === 1 ? 'up' : 'down'}`}>{price.change}</span>
                        </div>
                        <div className="price-value-delta">
                            <span className="ticker-value">{price.value}</span>
                            <span className={`ticker-delta ${price.direction === 1 ? 'up' : 'down'}`}>{price.delta}</span>
                        </div>
                    </div>
                ))}
            </div> 
        </div>  
    );
};
export default ScrollingPrices;