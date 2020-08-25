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
const BuyStepAssets = { 
  'BTCTRY' : 0.01,
  'BTCUSDT' : 0.01,
  'ETHTRY' : 0.01,
  'ETHBTC' : "",
  'XRPTRY' : 0.01,
  'XRPBTC' : "",
  'LTCTRY' : 0.01,
  'LTCBTC' : "",
  'USDTTRY' : "",
  'XRPUSDT' : 0.01,
  'LTCUSDT' : 0.01,
  'ETHUSDT' : 0.01
}
const BuyMinAssets = { 
  'BTCTRY' : 100,
  'BTCUSDT' : 10,
  'ETHTRY' : 100,
  'ETHBTC' : "",
  'XRPTRY' : 100,
  'XRPBTC' : "",
  'LTCTRY' : 100,
  'LTCBTC' : "",
  'USDTTRY' : "",
  'XRPUSDT' : 10,
  'LTCUSDT' : 10,
  'ETHUSDT' : 10
}
const BuyMaxAssets = { 
  'BTCTRY' : 5000000,
  'BTCUSDT' : 1000000,
  'ETHTRY' : 5000000,
  'ETHBTC' : "",
  'XRPTRY' : 5000000,
  'XRPBTC' : "",
  'LTCTRY' : 5000000,
  'LTCBTC' : "",
  'USDTTRY' : "",
  'XRPUSDT' : 1000000,
  'LTCUSDT' : 1000000,
  'ETHUSDT' : 1000000
}
// const TRY = {
//   min: 0.01,
//   max: 100000,
//   step: 0.01,
//   multipler:1000
// };
// const USDT = {
//   min: 0.01,
//   max: 100000,
//   step: 0.01,
//   multipler:1000
// };
// const BTC = {
//   min: 0.01,
//   max: 100000,
//   step: 0.01,
//   multipler:1000
// };
class MarketBuyAndSell extends React.Component {

  constructor(props) { 
    super(props);
    this.state = {
      value:0,
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
          if(this.state.orderType === 0) {
            if(this.props.product == 'ETHBTC' || this.props.product == 'XRPBTC' || this.props.product == 'LTCBTC' || this.props.product == 'USDTTRY'){
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


            }
            else{
              if(this.state.value*1000 >= BuyMinAssets[this.props.product]*1000 && this.state.value*1000 <= BuyMaxAssets[this.props.product]*1000 && (this.state.value*1000 - BuyMinAssets[this.props.product]*1000) % (BuyStepAssets[this.props.product]*1000) == 0){
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
  
  
              }
              else{
                store.addNotification({...this.state.notification,message:'Değerler istenen aralıkta olmalıdır.' ,type:'danger',title:'Hata!'});
              }


            }
 

          } else if (this.state.orderType === 1) {
            if(this.state.value*100000000 >= minAssets[this.props.product]*100000000 && this.state.value*100000000 <= maxAssets[this.props.product]*100000000 && (this.state.value*100000000 - minAssets[this.props.product]*100000000) % (stepAssets[this.props.product]*100000000) == 0)
            {
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
        else{
          store.addNotification({...this.state.notification,message:'Değerler istenen aralıkta olmalıdır.' ,type:'danger',title:'Hata!'});
        }
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
    let valuepercent;
  
    if(orderType === 'b'){
        console.log( await GetAssetBalance(symbolSecondAssets[this.props.product]))
        assetBalance = parseFloat(await GetAssetBalance(symbolSecondAssets[this.props.product]));
        console.log(assetBalance)
        valuepercent = (assetBalance*(orderPercent/100)-(((assetBalance*(orderPercent/100))- BuyMinAssets[this.props.product]) % BuyStepAssets[this.props.product]));
      if(this.props.product == 'ETHBTC' || this.props.product == 'XRPBTC' || this.props.product == 'LTCBTC' || this.props.product == 'USDTTRY'){
          this.setState({value: valuepercent})
      }
      else{
        if(valuepercent >= BuyMinAssets[this.props.product] && valuepercent <= BuyMaxAssets[this.props.product] && (valuepercent*1000 - BuyMinAssets[this.props.product]*1000) % (BuyStepAssets[this.props.product]*1000) == 0){
          
          this.setState({value: valuepercent})
        }
        else{
          store.addNotification({...this.state.notification,message:'Değerler istenen aralıkta olmalıdır.' ,type:'danger',title:'Hata!'});
          
        }
      }

    } 
    else if(orderType === 's') {
      assetBalance = parseFloat(await GetAssetBalance(symbolMainAssets[this.props.product]));
      valuepercent = assetBalance*(orderPercent/100);
      if(this.props.product == 'ETHBTC' || this.props.product == 'XRPBTC' || this.props.product == 'LTCBTC' || this.props.product == 'USDTTRY'){
        this.setState({value: valuepercent})
      }
      else{
      if(valuepercent >= minAssets[this.props.product] && valuepercent <= maxAssets[this.props.product] && (valuepercent*100000000 - minAssets[this.props.product]*100000000) % (stepAssets[this.props.product]*100000000) == 0){
        this.setState({value: valuepercent})
      }
      else{
        store.addNotification({...this.state.notification,message:'Değerler istenen aralıkta olmalıdır.' ,type:'danger',title:'Hata!'});
      }
      
    }

    }
  }

  render() {
    
    this.state.assetMain = symbolMainAssets[this.props.product]
    this.state.assetSecondary = symbolSecondAssets[this.props.product]
    return (
      <div>
        <div className="crypt-boxed-area">
          <div className="row no-gutters">
            <div style={{minHeight:"330px",backgroundColor:"#1f2640",boxShadow: "0 -5px 50px -5px #333"}}>

              <div >
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