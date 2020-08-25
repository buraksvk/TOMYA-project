import React, {useState, useEffect} from 'react'

const OrderBook = () => {
    // Options
    const DEPTH = 10;
    const DEFAULT_FREQUENCY = 2000;
    var pairs = ["ETHBTC","XRPBTC", "LTCBTC"];
    var derivedPairs = ["BTC", "ETH", "XRP", "LTC"];
    const SUCCESS = 1;
    const FAIL = -1;
    var usdTry = 1;

    const [orderBook, setOrderBook] = useState(null);

    useEffect(() => {
      const interval = setInterval(async () => {
        await fetch("https:pro.tomya.com/api/providers/trading/orderbook?asset=BTCUSDT")
        .then(res => res.json())
      }, 1000);
      return () => {
        clearInterval(interval);
      };
    }, []);
    
    return (
        <div>
            {orderBook}
        </div>
    )
}

export default OrderBook;
