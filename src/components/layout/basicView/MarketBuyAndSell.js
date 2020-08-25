import React from "react";

import { ApiService } from '../../../../services/apiService';
import GetSymbol from '../../exchange/GetSymbol';
import GetMainAsset from "../GetMainAsset";
import GetSecondAsset from '../GetSecondAsset';

import { store } from 'react-notifications-component'

class MarketBuyAndSell extends React.Component {

  constructor(props) { 
    super(props);
    this.state = {
      value: 0,
      orderType: 0,
      assetMain: '',
      assetSecondary: '',
      price: 0,
      notification: ''
    };

    this.apiService = new ApiService();

    this.handleChange = this.handleChange.bind(this);
    this.sendMarketOrder = this.sendMarketOrder.bind(this);
    this.handleBuySellType = this.handleBuySellType.bind(this);
    this.handlePercentButtons = this.handlePercentButtons.bind(this);
  }

 async sendMarketOrder () {
    let data;

    if(this.state.value === 0) 
    {
      store.addNotification({...this.state.notification,message:'Değer giriniz',type:'warning',title:'Hata!'});
    } 
    else 
    {
      if(this.state.value > 0) {
          if(this.state.orderType === 0) {
            data = { 
              "Symbol": GetSymbol(), 
              "Side" : this.state.orderType, // 0 Buy, 1 Sell
              "QuoteQuantity": this.state.value 
            }
      
            const token = await this.apiService.authService.getUser();
            //console.log(token);
      
            //const response = await this.apiService._callApiPost(token.access_token, 'order/NewMarketOrder', data);
            //console.log(response);  
            store.addNotification({...this.state.notification,message:JSON.stringify(data)});
      
          } else if (this.state.orderType === 1) {
            data = { 
              "Symbol": GetSymbol(), 
              "Side" : this.state.orderType, // 0 Buy, 1 Sell
              "Quantity": this.state.value
            }
      
            const token = await this.apiService.authService.getUser();
            //console.log(token);
      
            //const response = await this.apiService._callApiPost(token.access_token, 'order/NewMarketOrder', data);
            //console.log(response);  
            store.addNotification({...this.state.notification,message:JSON.stringify(data)});
      
      
          data = {error:'error'}
          store.addNotification({...this.state.notification,message:'İşlem gerçekleştirilemedi',type:'danger',title:'Hata!'});
        }
        //console.log(data);
      } else {
        store.addNotification({...this.state.notification,message:'Değeri sıfırdan büyük sayı yada rakam olmalıdır.',type:'danger',title:'Hata!'});
      }
    } 

  };

  componentWillMount() {
    this.setState({assetMain : GetMainAsset()});
    this.setState({assetSecondary : GetSecondAsset()});

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
    
  } 
  

  testButton() { 
    //console.log('test button');
  }

  handleChange(event) {
    this.setState({value: parseFloat(event.target.value) });
    this.setState({price: parseFloat(event.target.value)*0.997});
  }

  handleBuySellType(event) { 
    this.setState({orderType: parseInt(event.target.value)});
    this.setState({price:0, value:0});
  }
  handlePercentButtons(event) { 
    //console.log('Orana basildi '+event.target.value);
  }

  render() {
    return (
      <div>
        <div className="crypt-boxed-area">
          <div className="row no-gutters">
            <div className="tab-content" style={{minHeight:"430px"}}>
              <ul
                className="nav nav-tabs market-buttons"
                style={{ backgroundColor: "transparent" }}
              >
                <li role="presentation">
                  <button
                    href="#Buy"
                    className="button-buy market-btn active show"
                    data-toggle="tab" value='0' onClick={this.handleBuySellType}
                  >
                    AL
                  </button>
                </li>
                <li role="presentation">
                  <button
                    href="#Sell"
                    className="button-sell market-btn"
                    data-toggle="tab" value='1' onClick={this.handleBuySellType}
                  >
                    SAT
                  </button>
                </li>
              </ul>
              <div role="tabpanel" className="tab-pane active" id="Buy">
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
                        <div className="col"><button className="percent-btn" value='25' onClick={this.handlePercentButtons}>%25</button></div>
                        <div className="col"><button className="percent-btn" value='50' onClick={this.handlePercentButtons}>%50</button></div>
                        <div className="col"><button className="percent-btn" value='75' onClick={this.handlePercentButtons}>%75</button></div>
                        <div className="col"><button className="percent-btn" value='100' onClick={this.handlePercentButtons}>%100</button></div>
                      </div>
                      <div>
                        <p>
                          Ücret: <span className="fright">100x0.3%=0.03</span>
                        </p>
                      </div>
                      <div className="menu-green">
                        <button className="crypt-button-green-full" onClick={this.sendMarketOrder}>AL</button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div role="tabpanel" className="tab-pane" id="Sell">
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
                        <div className="col"><button className="percent-btn">%25</button></div>
                        <div className="col"><button className="percent-btn">%50</button></div>
                        <div className="col"><button className="percent-btn">%75</button></div>
                        <div className="col"><button className="percent-btn">%100</button></div>
                      </div>
                      <div>
                        <p>
                          Ücret: <span className="fright">100x0.3%=0.03</span>
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

export default MarketBuyAndSell;

/*
<div className="text-center mt-3 mb-3 crypt-down">
                        <p></p>
                        <h4>{this.state.price} {this.state.assetMain}</h4>
                      </div>
*/