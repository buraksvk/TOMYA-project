import React, {Fragment} from "react";
import MarketTrading from "./MarketTrading";
import MarketHistory from "./MarketHistory";
//import AssetPrice from "./AssetPrice";
import AssetSidebar from "./AssetSidebar";
import ClosedOrder from "./ClosedOrder";
import OpenOrder from "./OpenOrder";
import { TVChartContainer } from "../../TVChartContainer";

import MarketBuyAndSell from "./BuyAndSell/MarketBuyAndSell";
import LimitBuyAndSell from "./BuyAndSell/LimitBuyAndSell";
import MarketBuyAndSellMobile from "./BuyAndSellMobile/MarketBuyAndSellMobile";
import MarketBuyMobile from "./BuyAndSellMobile/MarketBuyMobile";
import MarketSellMobile from "./BuyAndSellMobile/MarketSellMobile";
import LimitBuyAndSellMobile from "./BuyAndSellMobile/LimitBuyAndSellMobile";
//import StopLimitBuyAndSell from "./BuyAndSell/StopLimitBuyAndSell";
import Assets from "./Assets";
import Balance from "./Balance";
import GetSymbol from "./GetSymbol";

import 'react-notifications-component/dist/theme.css'
import { store } from 'react-notifications-component'

import { ApiService } from '../../../services/apiService';

import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { setProduct } from "../../../redux/actions";
import { setTheme } from "../../../redux/actions";

class Exchange extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      symbol: "ETHUSDT",
      isLoggedin : '',
      notification : '',
      showComponentBuy: false,
      showComponentSell: false,
    };
    this._onButtonClick1 = this._onButtonClick1.bind(this);
    this._onButtonClick2 = this._onButtonClick2.bind(this);
    this.apiService = new ApiService();
    this.handleLimitOnClick = this.handleLimitOnClick.bind(this);
  }

  async componentDidMount() {
    this.setState({isLoggedin: await this.apiService.isLoggedin() });
  }

  componentWillMount() { 
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

  static getInitialProps({ query: { symbol } }) {
    return { symbol: symbol };
  }

  handleLimitOnClick() {
    store.addNotification({...this.state.notification,message:'Limit Emirleri Yakında Eklenecektir.',type:'warning',title:'Limit Emri!'});
  }
  _onButtonClick1() {
    if(this.state.showComponentBuy == false || this.state.showComponentBuy == null || this.state.showComponentSell == true){
        this.setState({
          showComponentBuy: true,
          showComponentSell: false,
          });
    }
    else{
        this.setState({
          showComponentBuy: false,
          });
    }

    }
    _onButtonClick2() {
      if(this.state.showComponentSell == false || this.state.showComponentSell == null || this.state.showComponentBuy == true){
          this.setState({
            showComponentSell: true,
            showComponentBuy: false,
            });
      }
      else{
          this.setState({
            showComponentSell: false,
            });
      }
  
      }
  
  render() {
    
    return (
      <Fragment>
        <div className="">
          <div className="row ">
            <div className="col-md-7 col-lg-7 col-xl-7 col-xxl-7">
                <AssetSidebar />
              <div>
                <TVChartContainer symbol={this.props.product} themes={this.props.themes}/>
              </div>
            </div>
            <div className="col-md-5 col-lg-5 col-xl-5 col-xxl-5" style={{paddingRight: "15px"}}>
              <div className="row ">
                <div className="col-md-5 col-lg-5 col-xl-5 col-xxl-5" >
                  <div className="crypt-market-status mt-2">
                    <div>
                      <div className="tab-content">
                        <ul className="nav nav-tabs">
                          <li role="presentation">
                            <a
                              href="#history"
                              className="active"
                              data-toggle="tab"
                            >
                              Emir Defteri
                            </a>
                          </li>
                        </ul>
                        <div
                          role="tabpanel"
                          className="tab-pane active"
                          id="history"
                        >
                          <div id="content-desktop">
                             <MarketTrading />
                          </div>
                          <div id="content-mobile" className=" mr-2">
                              <MarketTrading />
                          </div>
                          
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-7 col-lg-7 col-xl-7 col-xxl-7" style={{paddingRight: "15px"}}>
                <div id="content-desktop">
                  <div className="crypt-market-status mt-2">
                    
                      <div className="tab-content">
                        <ul className="nav nav-tabs">
                          <li role="presentation">
                            <a
                              href="#MarketBuyAndSell"
                              className="active"
                              data-toggle="tab"
                            >
                              Piyasa
                            </a>
                          </li>
                          <li role="presentation">
                            <a href="#LimitBuyAndSell" onClick={this.handleLimitOnClick} data-toggle="tab">
                              Limit
                            </a>
                          </li>
                        </ul>
                        <div
                          role="tabpanel"
                          className="tab-pane active"
                          id="MarketBuyAndSell"
                        >
                          <MarketBuyAndSell />
                        </div>
                        <div
                          role="tabpanel"
                          className="tab-pane"
                          id="LimitBuyAndSell"
                        >
                          <LimitBuyAndSell />
                        </div>
                      </div>
                    </div>

                  </div>

                  
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className=" mt-2 ">
          <div className="row ">
            <div className="col-md-7 col-lg-7 col-xl-7 col-xxl-7 mb-2" >
              <div className="crypt-market-status">
                <div>
                  <ul className="nav nav-tabs">
                    <li role="presentation">
                      <a
                        href="#active-orders"
                        className="active"
                        data-toggle="tab"
                      >
                        Açık Emirler
                      </a>
                    </li>
                    <li role="presentation">
                      <a href="#closed-orders" data-toggle="tab">
                        Kapanmış Emirler
                      </a>
                    </li>
                    <li role="presentation">
                      <a href="#balance" data-toggle="tab">
                        Bakiye
                      </a>
                    </li>
                  </ul>


                  
                  <div className="tab-content">
                    <div
                      role="tabpanel"
                      className="tab-pane active"
                      id="active-orders"
                    >
                      <div id="content-desktop">
                        <OpenOrder />
                          </div>
                          <div id="content-mobile" className="mr-3">
                            
                          <OpenOrder />
                      </div>
                    </div>
                    <div
                      role="tabpanel"
                      className="tab-pane"
                      id="closed-orders"
                    >
                      <div id="content-desktop">
                        <ClosedOrder />
                          </div>
                          <div id="content-mobile" className="mr-3">
                            
                          <ClosedOrder />
                      </div>
                      
                    </div>
                    <div role="tabpanel" className="tab-pane" id="balance">
                    <div id="content-desktop">
                        <Balance />
                          </div>
                          <div id="content-mobile" className="mr-3">
                            
                          <Balance />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-5 col-lg-5 col-xl-5 col-xxl-5 mb-2" style={{paddingRight: "15px"}}>
              <div className="row ">
                <div className="col-md-5 col-lg-5 col-xl-5 col-xxl-5 mb-2">
                  <div className="crypt-market-status">
                    <div>
                      <div className="tab-content">
                        <ul className="nav nav-tabs">
                          <li role="presentation">
                            <a
                              href="#history"
                              className="active"
                              data-toggle="tab"
                            >
                              Geçmiş
                            </a>
                          </li>
                        </ul>
                        <div
                          role="tabpanel"
                          className="tab-pane active"
                          id="history"
                          style={{ maxHeight: "210px" }}
                        >
                          <div id="content-desktop">
                            <MarketHistory />
                          </div>
                          <div id="content-mobile" className="mr-3">
                            <div >
                              <MarketHistory />
                            </div>
                            
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-7 col-lg-7 col-xl-7 col-xxl-7 mb-2" >
                  <Assets />
                </div>
                
              </div>
              <div id="content-mobile">
                    <button className={"buttonbuymobile " /*+ (this.state.showComponent ? "altvar" : "altyok")*/}  style={{border:"1px solid",background:"green",minHeight:"50px",color:"white"}} onClick={this._onButtonClick1}><b>AL</b></button>
          {this.state.showComponentBuy ?
            <div className="assetmobile">
              <MarketBuyMobile />
           </div> :
           null
            }
             <button className={"buttonsellmobile " /*+ (this.state.showComponent ? "altvar" : "altyok")*/}  style={{border:"1px solid",background:"red",minHeight:"50px",color:"white"}} onClick={this._onButtonClick2}><b>SAT</b></button>
          {this.state.showComponentSell ?
            <div className="assetmobile">
              <MarketSellMobile />
           </div> :
           null
            }
    
                    </div>
            </div>
          </div>
        </div>
      </Fragment>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    product: state.testRedux.product,
    themes: state.themeReducer.themes,
  };
};
const mapDispatchToProps = (dispatch) => ({
  setProduct: (payload) => dispatch(setProduct(payload)),
  setTheme: (payload) => dispatch(setTheme(payload)),
});

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(Exchange)
);
