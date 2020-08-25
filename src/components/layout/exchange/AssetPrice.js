import React, {Fragment} from 'react'
import AssetDropdown from './AssetDropdown';

import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { setProduct } from "../../../redux/actions";

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
const AssetForm = (
    class extends React.Component{
        constructor(props){
            super(props);
    
            this.state = {
                price : [],
                priceChange : [],
                priceChangePercent : [],
                openPrice : [],
                highPrice : [],
                lowPrice : [],
                volume : [],
                lastPrice : [],
                asset : [],
                intervalID : ""
            }
        }
            componentDidMount(){
             const getData = () => {
                    fetch('https:pro.tomya.com/api/providers/trading/price?asset='+this.props.product)
                    .then(response => response.json())
                    .then(data => {
                    this.setState({price: data.price});
                    this.setState({priceChange: parseFloat(data.priceChange).toFixed(6)});
                    this.setState({priceChangePercent: data.priceChangePercent});
                    this.setState({openPrice: data.openPrice});
                    this.setState({highPrice: parseFloat(data.highPrice).toFixed(4)});
                    this.setState({lowPrice: parseFloat(data.lowPrice).toFixed(4)});
                    this.setState({volume: parseFloat(data.volume).toFixed(6)});
                    this.setState({lastPrice: data.lastPrice});

                     this.intervalID = setTimeout(getData.bind(this), 1000);
                   });
             }
             getData();
             return () => {
                 if(this.intervalID) { 
                     clearInterval(this.intervalID);
                     clearTimeout(this.intervalID);
                 }
             };
        }
        render(){
    
          var user = [];
        if (this.state.price === undefined) {
            user = <span>Yükleniyor...</span>;
        } else { 
            user = 
            <Fragment>
            <div className="crypt-gross-market-cap mt-2 ">
            <div className="row">
                <div className="col-3 col-sm-6 col-md-12 col-lg-6">
                <div className="row">
                    <div className="col-sm-4 col-md-12 col-lg-3">
                    <div ><AssetDropdown /></div>
                    </div>
                    <div className="col-sm-4 col-md-12 col-lg-4">
                    <p>Güncel {symbolMainAssets[this.props.product]} Fiyatı</p>
                    <p>
                        {this.state.price}
                    </p>
                    </div>
                    <div className="col-sm-4 col-md-12 col-lg-5">
                    <p>Fark {symbolMainAssets[this.props.product]}</p>
                    <p className="crypt-down">{this.state.priceChange} {this.state.priceChangePercent}%</p>
                    </div>
                </div>
                </div>
                <div className="col-3 col-sm-2 col-md-12 col-lg-2">
                <p>En Yüksek {symbolMainAssets[this.props.product]}</p>
                <p className="crypt-up">{this.state.highPrice}</p>
                </div>
                <div className="col-3 col-sm-2 col-md-12 col-lg-2">
                <p>En Düşük {symbolMainAssets[this.props.product]}</p>
                <p className="crypt-up">{this.state.lowPrice}</p>
                </div>
                <div className="col-3 col-sm-2 col-md-12 col-lg-2">
                <p>Hacim 24Hr</p>
                <p className="crypt-down">{this.state.volume}</p>
                </div>
            </div>
            </div>
        </Fragment>
        }
        return(<div>{user}</div>);
        }
    }
)
class AssetPrice extends React.Component{
    render(){
        return(
            <AssetForm
            product = {this.props.product}
            >
            </AssetForm>);
    }
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
    connect(mapStateToProps, mapDispatchToProps)(AssetPrice)
  );

