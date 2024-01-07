import React, { useEffect } from 'react';

const TradingViewWidget = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://s3.tradingview.com/external-embedding/embed-widget-tickers.js';
    script.async = true;
    script.innerHTML = JSON.stringify({
      "symbols": [
        {
            "description": "Bitcoin",
            "proName": "BINANCE:BTCUSDT"
          },
          {
            "description": "Ethereum",
            "proName": "BINANCE:ETHUSDT"
          },
          {
            "description": "Solana",
            "proName": "BINANCE:SOLUSDT"
          },
          {
            "description": "Polygon",
            "proName": "BINANCE:MATICUSDT"
          },
          {
            "description": "Arbitrum",
            "proName": "BINANCE:ARBUSDT"
          },
          {
            "description": "Optimism",
            "proName": "BINANCE:OPUSDT"
          },
          {
            "description": "Chainlink",
            "proName": "BINANCE:LINKUSDT"
          },
          {
            "description": "Uniswap",
            "proName": "BINANCE:UNIUSDT"
          },
          {
            "description": "dYdX",
            "proName": "BINANCE:DYDXUSDT"
          }
      ],
      "isTransparent": false,
      "showSymbolLogo": true,
      "colorTheme": "dark",
      "locale": "en"
    });

    document.querySelector('.tradingview-widget-container__widget').appendChild(script);
  }, []);

  return (
    <div className="tradingview-widget-container">
      <div className="tradingview-widget-container__widget"></div>
      {/* ... */}
    </div>
  );
};

export default TradingViewWidget;
