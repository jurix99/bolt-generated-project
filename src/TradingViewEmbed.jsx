import React from 'react';

    const TradingViewEmbed = ({ symbol = "BTCUSD" }) => {
      return (
        <div>
          <iframe
            title="TradingView"
            src={`https://s.tradingview.com/embed-widget/symbol-overview/?locale=en#%7B%22symbols%22%3A%5B%7B%22s%22%3A%22${symbol}%22%7D%5D%2C%22chartOnly%22%3Atrue%2C%22width%22%3A%22100%25%22%2C%22height%22%3A500%2C%22locale%22%3A%22en%22%2C%22colorTheme%22%3A%22light%22%2C%22autosize%22%3Atrue%7D`}
            style={{ width: "100%", height: "500px", border: "none" }}
            allowFullScreen
          ></iframe>
        </div>
      );
    };

    export default TradingViewEmbed;
