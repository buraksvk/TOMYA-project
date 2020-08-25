import React, { Fragment, useEffect } from "react";
import MarketTrading from "./MarketTrading";
import MarketHistory from "./MarketHistory";
//import AssetPrice from "./AssetPrice";
import Assets from "./Assets";
import Balance from "./Balance";
import AssetSidebar from "./AssetSidebar";
import ClosedOrder from "./ClosedOrder";
import OpenOrder from "./OpenOrder";
import { TVChartContainer } from "../../TVChartContainer";
import MarketBuyAndSell from "./BuyAndSell/MarketBuyAndSell";
import LimitBuyAndSell from "./BuyAndSell/LimitBuyAndSell";
//import StopLimitBuyAndSell from "./BuyAndSell/StopLimitBuyAndSell";

const Exchange = () => {
  useEffect(() => {
    let search = window.location.search;
    let params = new URLSearchParams(search);
    let symbol = params.get("symbol");
    return () => {};
  }, []);

  return (
    <Fragment>
      <div className="container-fluid">
        <div className="row sm-gutters">
          <div className="col-md-7 col-lg-7 col-xl-7 col-xxl-7">
            <AssetSidebar />
            <div>
              <TVChartContainer />
            </div>
          </div>
          <div className="col-md-5 col-lg-5 col-xl-5 col-xxl-5">
            <div className="row sm-gutters">
              <div className="col-md-5 col-lg-5 col-xl-5 col-xxl-5">
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
                        <MarketTrading />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-7 col-lg-7 col-xl-7 col-xxl-7">
                <div className="crypt-market-status mt-2">
                  <div>
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
                          <a href="#LimitBuyAndSell" data-toggle="tab">
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

                  {/* <div>
                    <ul className="nav nav-tabs">
                      <li role="presentation">
                        <a href="#history" className="active" data-toggle="tab">
                          Geçmiş
                        </a>
                      </li>
                    </ul>
                    <div className="mb-1">
                      <div className="tab-content">
                        <div role="tabpanel" className="tab-pane active" id="history">
                          <MarketHistory />
                        </div>
                      </div>
                    </div>
                  </div> */}
                </div>
                
              </div>
            </div>
          </div>
        </div>
      </div>

    {/********************************************************************************************************************** */}
    <div className="container-fluid mt-2">
        <div className="row sm-gutters">
          <div className="col-md-7 col-lg-7 col-xl-7 col-xxl-7">
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
                    <OpenOrder />
                  </div>
                  <div role="tabpanel" className="tab-pane" id="closed-orders">
                    <ClosedOrder />
                  </div>
                  <div role="tabpanel" className="tab-pane" id="balance">
                    <Balance />
                  </div>
                </div>
              </div>
            </div>   
          </div>
          <div className="col-md-5 col-lg-5 col-xl-5 col-xxl-5">
            <div className="row sm-gutters">
              <div className="col-md-5 col-lg-5 col-xl-5 col-xxl-5">
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
                        style={{maxHeight:"300px"}}
                      >
                        <MarketHistory />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-7 col-lg-7 col-xl-7 col-xxl-7">
                  <Assets />
                
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Exchange;

// <div id="crypt-candle-chart"></div> tradingview ekrani eski

/* 

                <div className="tradingview-widget-container mb-3">
                    
                </div>
*/
