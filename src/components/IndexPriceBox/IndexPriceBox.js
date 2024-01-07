import React from "react";
import './IndexPriceBox.css';

const prices = [
    {id:'ETH/USD', label:'ETH',fullName:'Ethereum', value:'$2,000 USD', change:'+3.25%', delta:'$71.17', direction:1},
];

const IndexPriceBox =() =>{

    return(
        <div>
            {prices.map((price, index) => (
                <div className="item">
                    <div className="inner-box">
                        <div className="fullname-change">
                            <span className="ticker-fullname">{price.fullName}</span>
                            <span className={`ticker-change ${price.direction === 1 ? 'up' : 'down'}`}>{price.change}</span>
                        </div>
                        <div className="value-delta">
                            <span className="ticker-value">{price.value}</span>
                            <span className={`ticker-delta ${price.direction === 1 ? 'up' : 'down'}`}>{price.delta}</span>
                        </div>
                    </div>
                </div>
            ))}
        </div>   
    );
};

export default IndexPriceBox;