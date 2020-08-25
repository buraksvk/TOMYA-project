const GetSymbol = () => {

    // Old const availableSymbols = ['BTCUSDT','ETHBTC']; // Available symbols array
    const availableSymbols = ['BTCTRY','BTCUSDT','ETHTRY','ETHBTC','XRPTRY','XRPBTC','LTCTRY','LTCBTC','USDTTRY','XRPUSDT','LTCUSDT','ETHUSDT'];
    // Tomya BTCTRY,BTCUSDT,ETHTRY,ETHBTC,XRPTRY,XRPBTC,LTCTRY,LTCBTC,USDTTRY
    // Tansel "BTCUSDT", "ETHUSDT", "XRPUSDT", "LTCUSDT", "ETHBTC", "XRPBTC", "LTCBTC", "USDTTRY", "BTCTRY", "ETHTRY", "XRPTRY", "LTCTRY"

    const getSymbol = () => {
        let search = window.location.search;
        let params = new URLSearchParams(search);
        if(availableSymbols.includes(params.get('symbol'))) { 
            return params.get('symbol');
        } else {
            return 'BTCUSDT'; // Default symbol
        }
    };

    return getSymbol();
}

export default GetSymbol;
