import React from 'react'

import { store } from 'react-notifications-component'

class LimitBuyAndSell extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      notification : ''
    };

    this.handleBuyAndSellButton = this.handleBuyAndSellButton.bind(this);
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

  handleBuyAndSellButton() {
    store.addNotification({...this.state.notification,message:'Limit Emirleri Yakında Eklenecektir.',type:'warning',title:'Limit Emri!'});
  }

  render() {
    return (
      <div>
      <div className="crypt-boxed-area">
        <div className="row no-gutters">
          <div className="tab-content" style={{minHeight:"430px"}}>
            <ul
              className="nav nav-tabs limit-buttons"
              style={{ backgroundColor: "transparent" }}
            >
              <li role="presentation">
                <button
                  href="#limitBuyMobile"
                  className="button-buy limit-btn active show"
                  data-toggle="tab" 
                >
                  AL
                </button>
              </li>
              <li role="presentation">
                <button
                  href="#limitSellMobile"
                  className="button-sell limit-btn"
                  data-toggle="tab" 
                >
                  SAT
                </button>
              </li>
            </ul>
            <div role="tabpanel" className="tab-pane active" id="limitBuyMobile">
              <div className="col-md-12">
                <div className="crypt-buy-sell-form">
                  <div className="crypt-buy">
                  <div className="input-group mb-3">
                                              <div className="input-group-prepend"> <span className="input-group-text">Fiyat</span> </div>
                                              <input type="text" className="form-control" placeholder="0.02323476" readOnly/>
                                              <div className="input-group-append"> <span className="input-group-text">BTC</span> </div>
                                          </div>                                    <div className="input-group mb-3">
                                              <div className="input-group-prepend"> <span className="input-group-text">Miktar</span> </div>
                                              <input type="text" className="form-control" placeholder="0.02323476" readOnly/>
                                              <div className="input-group-append"> <span className="input-group-text">BTC</span> </div>
                                          </div>                                    <div className="input-group mb-3">
                                              <div className="input-group-prepend"> <span className="input-group-text">Toplam</span> </div>
                                              <input type="text" className="form-control" placeholder="0.02323476" readOnly/>
                                              <div className="input-group-append"> <span className="input-group-text">BTC</span> </div>
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
                      <p> <h6></h6></p>
      
                    </div>
                    <div className="menu-green">
                      <a href="#" className="crypt-button-green-full" onClick={this.handleBuyAndSellButton}>
                        AL
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div role="tabpanel" className="tab-pane" id="limitSell">
              <div className="col-md-12">
                <div className="crypt-buy-sell-form">
                  <div className="crypt-sell">
                  <div className="input-group mb-3">
                                              <div className="input-group-prepend"> <span className="input-group-text">Fiyat</span> </div>
                                              <input type="text" className="form-control" placeholder="0.02323476" readOnly/>
                                              <div className="input-group-append"> <span className="input-group-text">BTC</span> </div>
                                          </div>
                                          <div className="input-group mb-3">
                                              <div className="input-group-prepend"> <span className="input-group-text">Miktar</span> </div>
                                              <input type="text" className="form-control" placeholder="0.02323476" readOnly/>
                                              <div className="input-group-append"> <span className="input-group-text">BTC</span> </div>
                                          </div>
                                          <div className="input-group mb-3">
                                              <div className="input-group-prepend"> <span className="input-group-text">Toplam</span> </div>
                                              <input type="text" className="form-control" placeholder="0.02323476" readOnly/>
                                              <div className="input-group-append"> <span className="input-group-text">BTC</span> </div>
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
                    <p><h6></h6></p>
      
                    </div>
                    <div>
                      <a href="#" className="crypt-button-red-full" onClick={this.handleBuyAndSellButton}>
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
  )
  }
}

export default LimitBuyAndSell;
