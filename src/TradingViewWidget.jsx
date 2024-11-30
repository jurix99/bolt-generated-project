import React, { useEffect, useRef } from 'react';

    const TradingViewWidget = ({ symbol = "BTCUSD" }) => {
      const widgetRef = useRef(null);

      useEffect(() => {
        if (widgetRef.current && window.TradingView) {
          new window.TradingView.widget({
            container_id: widgetRef.current,
            autosize: true,
            symbol: symbol,
            interval: "D",
            timezone: "Etc/UTC",
            theme: "light",
            style: "1",
            locale: "en",
            toolbar_bg: "#f1f3f6",
            enable_publishing: false,
            allow_symbol_change: true,
            details: true,
            hotlist: true,
            calendar: true,
            studies: ["MACD@tv-basicstudies"],
          });
        }
      }, [symbol]);

      return <div ref={widgetRef} style={{ height: "500px" }} />;
    };

    export default TradingViewWidget;
