import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { setProduct } from "../../../redux/actions";


const GetSecondAsset = () => {
    
    const getSecondAsset = () => {

        const symbolSecondAssets = { 
            'BTCTRY' : 'TRY',
            'BTCUSDT' : 'USDT',
            'ETHTRY' : 'TRY',
            'ETHBTC' : 'BTC',
            'XRPTRY' : 'TRY',
            'XRPBTC' : 'BTC',
            'LTCTRY' : 'TRY',
            'LTCBTC' : 'BTC',
            'USDTTRY' : 'TRY',
            'XRPUSDT' : 'USDT',
            'LTCUSDT' : 'USDT',
            'ETHUSDT' : 'USDT'
        }

        return symbolSecondAssets[this.props.product];
    }

    return getSecondAsset();
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
    connect(mapStateToProps, mapDispatchToProps)(GetSecondAsset)
  );
