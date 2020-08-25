import React, {Fragment,useEffect} from 'react';
import Header from "./header/Header";
import Spinner from "react-spinners";

const Basic = () => {
  return (
    <Fragment>
    <div>

      <Header />
      <div className="crypt-boxed-area mt-5">
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
                  data-toggle="tab"
                >
                  AL
                </button>
              </li>
              <li role="presentation">
                <button
                  href="#Sell"
                  className="button-sell market-btn"
                  data-toggle="tab"
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
                      <input type="number" className="form-control" />
                      <div className="input-group-append">
                        {" "}
                        <span className="input-group-text">BTC</span>{" "}
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
                        Ücret: <span className="fright">100x0.2%=0.02</span>
                      </p>
                    </div>
                    <div className="text-center mt-3 mb-3 crypt-up">
                      <p></p>
                      <h4>0.09834 BTC</h4>
                    </div>
                    <div className="menu-green">
                      <a href="" className="crypt-button-green-full">
                        AL
                      </a>
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
                      <input type="text" className="form-control" readOnly />
                      <div className="input-group-append">
                        {" "}
                        <span className="input-group-text">BTC</span>{" "}
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
                        Ücret: <span className="fright">100x0.2%=0.02</span>
                      </p>
                    </div>
                    <div className="text-center mt-3 mb-3 crypt-down">
                      <p></p>
                      <h4>0.09834 BTC</h4>
                    </div>
                    <div>
                      <a href="" className="crypt-button-red-full">
                        SAT
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
        


    </div>
    </Fragment>
  );
};

export default Basic;
