import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { setProduct } from "../../../redux/actions";


const GetMainAsset = () => {
    
    const getMainAsset = () => {

        const symbolMainAssets = { 
            'BTCTRY' : 'BTC',
            'BTCUSDT' : 'BTC',
            'ETHTRY' : 'ETH',
            'ETHBTC' : 'ETH',
            'XRPTRY' : 'XRP',
            'XRPBTC' : 'XRP',
            'LTCTRY' : 'LTC',
            'LTCBTC' : 'LTC',
            'USDTTRY' : 'USDT',
            'XRPUSDT' : 'XRP',
            'LTCUSDT' : 'LTC',
            'ETHUSDT' : 'ETH'
        }
        return symbolMainAssets[this.props.product];
    }

    return getMainAsset();
}


const mapStateToProps = (state) => {
    return {
      product: state.testRedux.product,
    };
  };
  const mapDispatchToProps = (dispatch) => ({
    setProduct: (payload) => dispatch(setProduct(payload)),
  });
  
  export default withRouter(
    connect(mapStateToProps, mapDispatchToProps)(GetMainAsset)
  );
