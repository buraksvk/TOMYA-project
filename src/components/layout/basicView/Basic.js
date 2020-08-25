import React from 'react';
import Assets from "../exchange/Assets"
import Balance from './Balance'
import MarketBuyAndSell from '../exchange/BuyAndSell/MarketBuyAndSell';
import AssetDropdown from './AssetDropdown'

import 'react-notifications-component/dist/theme.css'

const Basic = () => {
  return (
    <div className="">
<div className="row ">
<div className="col-md-3 col-lg-3 col-xl-3 col-xxl-3">

  </div>
  <div className="col-md-3 col-lg-3 col-xl-3 col-xxl-3 mt-2" >
  <AssetDropdown />
      <div className="tab-content">
              <ul className="nav nav-tabs">
                <li role="presentation">
                  <a
                    href="#MarketBuyAndSell"
                    className="active"
                    data-toggle="tab"
                  >
                    HIZLI AL/SAT
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
            </div>
  </div>
  <div className="col-md-5 col-lg-5 col-xl-5 col-xxl-5">
    <div className="row ">
      <div className="col-md-7 col-lg-7 col-xl-7 col-xxl-7" >
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
                    Bakiye
                  </a>
                </li>
              </ul>
              <div
                role="tabpanel"
                className="tab-pane active"
                id="history"
              >
                <div id="content-desktop">
                <Balance/>
                </div>
                <div id="content-mobile" className="ml-1 mr-4 mb-1">
                <Balance/>
                </div>
                
                
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
    <div className="col-md-9 col-lg-9 col-xl-9 col-xxl-9" >
      <div className="row ">
      <div className="col-md-9 col-lg-9 col-xl-9 col-xxl-9" >
        
        <div className="crypt-market-status mt-3" >
          <div style={{marginLeft:"-15px" }}>
          <Assets />
          </div>
        </div>
      </div>
      </div>
  </div>
  </div>
</div>
</div>

  );
};

export default Basic;

