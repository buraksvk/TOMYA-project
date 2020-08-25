import React from "react";

import { ApiService } from '../../../../services/apiService';

import GetAssetBalance from '../GetAssetBalance'

import { store } from 'react-notifications-component'

import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { setProduct } from "../../../../redux/actions";

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
 const minAssets = { 
  'BTCTRY' : 0.00000100,
  'BTCUSDT' : 0.00000100,
  'ETHTRY' : 0.00001000,
  'ETHBTC' : 0.00100000,
  'XRPTRY' : 0.10000000,
  'XRPBTC' : 1.00000000,
  'LTCTRY' : 0.00001000,
  'LTCBTC' : 0.01000000,
  'USDTTRY' : '',
  'XRPUSDT' : 0.10000000,
  'LTCUSDT' : 0.00001000,
  'ETHUSDT' : 0.00001000
}
const maxAssets = { 
  'BTCTRY' : 9000.00000000,
  'BTCUSDT' : 9000.00000000,
  'ETHTRY' : 9000.00000000,
  'ETHBTC' : 100000.00000000,
  'XRPTRY' : 9000000.00000000,
  'XRPBTC' : 90000000.00000000,
  'LTCTRY' : 900000.00000000,
  'LTCBTC' : 100000.00000000,
  'USDTTRY' : '',
  'XRPUSDT' : 9000000.00000000,
  'LTCUSDT' : 900000.00000000,
  'ETHUSDT' : 9000.00000000
}
const stepAssets = { 
  'BTCTRY' : 0.00000100,
  'BTCUSDT' : 0.00000100,
  'ETHTRY' : 0.00001000,
  'ETHBTC' : 0.00100000,
  'XRPTRY' : 0.10000000,
  'XRPBTC' : 1.00000000,
  'LTCTRY' : 0.00001000,
  'LTCBTC' : 0.01000000,
  'USDTTRY' : '',
  'XRPUSDT' : 0.10000000,
  'LTCUSDT' : 0.00001000,
  'ETHUSDT' : 0.00001000
}

class MarketBuyAndSell extends React.Component {

  constructor(props) { 
    super(props);
    this.state = {
      value: 0,
      orderType: 0,
      assetMain: symbolMainAssets[this.props.product],
      assetSecondary: symbolSecondAssets[this.props.product],
      price: 0,
      notification: '',
      isLoggedin: ''
    };

    this.apiService = new ApiService();
    this.handleChange = this.handleChange.bind(this);
    this.sendMarketOrder = this.sendMarketOrder.bind(this);
    this.handleBuySellType = this.handleBuySellType.bind(this);
    
  }

 async sendMarketOrder () {
    let data;
    let response = '';
    if(!this.state.isLoggedin) {
      store.addNotification({...this.state.notification,message:'Lütfen giriş yapın.',type:'warning',title:'Hata!'});
      return;
    }

    if(this.state.value === 0) 
    {
      store.addNotification({...this.state.notification,message:'Değer giriniz',type:'warning',title:'Hata!'});
    } 
    else 
    {
      if(this.state.value > 0) {
        //if(this.state.value >= minAssets[this.props.product] && this.state.value <= maxAssets[this.props.product] && this.state.value % stepAssets[this.props.product] == 0)
        //{
          if(this.state.orderType === 0) {
            data = { 
              "Symbol": this.props.product, 
              "Side" : this.state.orderType, // 0 Buy, 1 Sell
              "QuoteQuantity": this.state.value 
            }

            response = await this.apiService.callApiPost( 'order/NewMarketOrder', data)

            .catch((err)=>{
              let message = '';
              switch (err.response.data[0]) {
                case "invalid_symbol":
                  message = "Hatalı sembol değeri."
                  break;
                case "another_order_in_progress":
                  message = "Başka bir talep işlem görüyor lütfen bekleyiniz."
                  break;
                case "has_pending_trades":
                  message = "Bekleyen işlemler var."
                  break;
                case "duplicate_amount":
                  message = "Mükerrer tutar."
                  break;
                case "invalid_amount":
                  message = "Hatalı tutar."
                  break;
                case "insufficient_funds":
                  message = "Yetersiz bakiye."
                  break;
                case "wrong_amount_type":
                  message = "Hatalı tutar tipi."
                  break;
                default:
                  message = "İşlem başarısız."
                  break;
              }

              store.addNotification({...this.state.notification,message:message,type:'danger',title:'Hata!'});
              return;
            });

            if(response) { 
              if(response.status === 200) {
                if(response.data.isFilled) {
                  store.addNotification({...this.state.notification,message:'İşleminiz tamamlandı.'});
                } else {
                  store.addNotification({...this.state.notification,message:'İşlem başarısız.',type:'danger',title:'Hata!'});  
                }
              } else {
                store.addNotification({...this.state.notification,message:'İşlem başarısız.',type:'danger',title:'Hata!'});     
              }
            }

          } else if (this.state.orderType === 1) {
            data = { 
              "Symbol": this.props.product, 
              "Side" : this.state.orderType, // 0 Buy, 1 Sell
              "Quantity": this.state.value
            }
            //buralarda işlemler yapılacak ! ! ! ^
            response = await this.apiService.callApiPost( 'order/NewMarketOrder', data)
            .catch((err)=>{
              let message = '';
              switch (err.response.data[0]) {
                case "invalid_symbol":
                  message = "Hatalı sembol değeri."
                  break;
                case "another_order_in_progress":
                  message = "Başka bir talep işlem görüyor lütfen bekleyiniz."
                  break;
                case "has_pending_trades":
                  message = "Bekleyen işlemler var."
                  break;
                case "duplicate_amount":
                  message = "Mükerrer tutar."
                  break;
                case "invalid_amount":
                  message = "Hatalı tutar."
                  break;
                case "insufficient_funds":
                  message = "Yetersiz bakiye."
                  break;
                case "wrong_amount_type":
                  message = "Hatalı tutar tipi."
                  break;
                default:
                  message = "İşlem başarısız."
                  break;
              }

              store.addNotification({...this.state.notification,message:message,type:'danger',title:'Hata!'});
              return;
            });

            if(response) { 
              if(response.status === 200) {
                if(response.data.isFilled) {
                  store.addNotification({...this.state.notification,message:'İşleminiz tamamlandı.'});
                } else {
                  store.addNotification({...this.state.notification,message:'İşlem başarısız.',type:'danger',title:'Hata!'});  
                }
              } else {
                store.addNotification({...this.state.notification,message:'İşlem başarısız.',type:'danger',title:'Hata!'});     
              }
            }
        }
      //}
      else{
        store.addNotification({...this.state.notification,message:'Değerler istenen aralıkta olmalıdır.' +this.state.value % stepAssets[this.props.product] ,type:'danger',title:'Hata!'});
      }
      } else {
        store.addNotification({...this.state.notification,message:'Değeri sıfırdan büyük sayı veya rakam olmalıdır.',type:'danger',title:'Hata!'});
      }
    } 

    //  setTimeout(function(){
    //    window.location.reload(); //bu kısım bakılacak!
    //  },1000);
  }

  async componentWillMount() {
    // this.setState({assetMain : symbolMainAssets[this.props.product]});
    // this.setState({assetSecondary : symbolSecondAssets[this.props.product]});

    this.setState({notification : {
      title: "İşlem başarılı!",
      message: "",
      type: "success",
      insert: "top",
      dismiss: {
        duration: 1500,
        onScreen: true
      },
      container: "top-right",
      animationIn: ["animated", "fadeIn"],
      animationOut: ["animated", "fadeOut"]
    }});

    this.setState({isLoggedin: await this.apiService.isLoggedin()});
    
  }
  

  componentWillUpdate() {


    this.state.notification = {
      title: "İşlem başarılı!",
      message: "",
      type: "success",
      insert: "top",
      dismiss: {
        duration: 1500,
        onScreen: true
      },
      container: "top-right",
      animationIn: ["animated", "fadeIn"],
      animationOut: ["animated", "fadeOut"]
    }
    
  }
  
  handleChange(event) {
    this.setState({value: parseFloat(event.target.value) });
    this.setState({price: parseFloat(event.target.value)*0.998});
  }

  handleBuySellType(event) { 
    this.setState({orderType: parseInt(event.target.value)});
    this.setState({price:0, value:0});
  }

  async handlePercentButtons(data) {
    const orderType = data.split('_')[1];
    const orderPercent = data.split('_')[0];
    let assetBalance;
    if(orderType === 'b'){
      assetBalance = parseFloat(await GetAssetBalance(symbolSecondAssets[this.props.product]));
      this.setState({value: assetBalance*(orderPercent/100)})
    } else
    if(orderType === 's') {
      assetBalance = parseFloat(await GetAssetBalance(symbolMainAssets[this.props.product]));
      this.setState({value: assetBalance*(orderPercent/100)})
    } 
  }

  render() {
    
    this.state.assetMain = symbolMainAssets[this.props.product]
    this.state.assetSecondary = symbolSecondAssets[this.props.product]
    return (
      <div>
        <div className="crypt-boxed-area">
          <div className="row no-gutters">
            <div className="tab-content" style={{minHeight:"330px"}}>
              <ul
                className="nav nav-tabs market-buttons"
                style={{ backgroundColor: "transparent" }}
              >
                <li role="presentation">
                  <button
                    href="#BuyMobile"
                    className="button-buy market-btn active show"
                    data-toggle="tab" value='0' onClick={this.handleBuySellType}
                  >
                    AL
                  </button>
                </li>
                <li role="presentation">
                  <button
                    href="#SellMobile"
                    className="button-sell market-btn"
                    data-toggle="tab" value='1' onClick={this.handleBuySellType}
                  >
                    SAT
                  </button>
                </li>
              </ul>
              <div role="tabpanel" className="tab-pane active" id="BuyMobile">
                <div className="col-md-12">
                  <div className="crypt-buy-sell-form">
                    <div className="crypt-buy">
                      <div className="input-group mb-3">
                        <div className="input-group-prepend">
                          {" "}
                          <span className="input-group-text">Miktar</span>{" "}
                        </div>
                        <input type="number" className="form-control" value={this.state.value} onChange={this.handleChange} />
                        <div className="input-group-append">
                          {" "}
                          <span className="input-group-text">{this.state.assetSecondary}</span>{" "}
                        </div>
                      </div>
                      <div className="row">
                        <div className="col"><button className="percent-btn"  onClick={async ()=>this.handlePercentButtons('25_b')}>%25</button></div>
                        <div className="col"><button className="percent-btn" onClick={async ()=>this.handlePercentButtons('50_b')}>%50</button></div>
                        <div className="col"><button className="percent-btn" onClick={async ()=>this.handlePercentButtons('75_b')}>%75</button></div>
                        <div className="col"><button className="percent-btn"  onClick={async ()=>this.handlePercentButtons('100_b')}>%100</button></div>
                      </div>
                      <div>
                        <p>
                          Ücret: <span className="fright">100x0.2%=0.02</span>
                        </p>
                      </div>
                      <div className="menu-green">
                        <button className="crypt-button-green-full" onClick={this.sendMarketOrder}>AL</button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div role="tabpanel" className="tab-pane" id="SellMobile">
                <div className="col-md-12">
                  <div className="crypt-buy-sell-form">
                    <div className="crypt-sell">
                      <div className="input-group mb-3">
                        <div className="input-group-prepend">
                          {" "}
                          <span className="input-group-text">Miktar</span>{" "}
                        </div>
                        <input type="number" className="form-control" value={this.state.value} onChange={this.handleChange} />
                        <div className="input-group-append">
                          {" "}
                          <span className="input-group-text">{this.state.assetMain}</span>{" "}
                        </div>
                      </div>
                      <div className="row">
                        <div className="col"><button className="percent-btn" onClick={async ()=>this.handlePercentButtons('25_s')}>%25</button></div>
                        <div className="col"><button className="percent-btn" onClick={async ()=>this.handlePercentButtons('50_s')}>%50</button></div>
                        <div className="col"><button className="percent-btn" onClick={async ()=>this.handlePercentButtons('75_s')}>%75</button></div>
                        <div className="col"><button className="percent-btn" onClick={async ()=>this.handlePercentButtons('100_s')}>%100</button></div>
                      </div>
                      <div>
                        <p>
                          Ücret: <span className="fright">100x0.2%=0.02</span>
                        </p>
                      </div>
                      <div>
                        <button className="crypt-button-red-full" onClick={this.sendMarketOrder}>SAT</button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  };
 
};

 const mapStateToProps = (state) => {
   return {
     product: state.testRedux.product,
   };
 };
 const mapDispatchToProps = (dispatch) => ({
   setProduct: (payload) => dispatch(setProduct(payload)),
 });

 export default 
   connect(mapStateToProps, mapDispatchToProps)(MarketBuyAndSell);