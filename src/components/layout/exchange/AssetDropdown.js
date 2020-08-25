import React from 'react'
import {Dropdown, DropdownButton} from 'react-bootstrap';
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { setProduct } from "../../../redux/actions";
import { setTheme } from "../../../redux/actions";

import Price from './Price';

class AssetDropdown extends React.Component {
    constructor(props) {
      super(props);
      this.handleChange = this.handleChange.bind(this);
      this.state = {
        intervalID : '',
        data  : '',
    }
    }
  
    handleChange(event) {
      const payload = event.key;
      this.props.setProduct(payload);
    }
    
    render() {

        return (
            <div className="align-items-center" >
                        <DropdownButton variant={this.props.themes?"dark":"light"} size="sm" title={this.props.product} onSelect={this.handleSelect = (evt) => {  const payload = evt; 
                          this.props.setProduct(payload);}}>
                          <Dropdown.Item className="bg-dark text-light" eventKey="BTCTRY"><th><td style={{paddingRight:"30px"}}><img src="images/coins/btc.png" style={{maxHeight:"20px", maxWidth:"20px", marginRight:"5%"}} alt="bitcointry"/></td><td> BTC/TRY</td><td style={{ minWidth:"110px", textAlign:"right"}}><Price symbol={'BTCTRY'}/></td></th></Dropdown.Item>
                          <Dropdown.Item className="bg-dark text-light" eventKey="BTCUSDT"><th><td style={{paddingRight:"30px"}}><img src="images/coins/btc.png" style={{maxHeight:"20px", maxWidth:"20px", marginRight:"5%"}} alt="bitcointry"/></td><td> BTC/USDT</td><td style={{ minWidth:"97px", textAlign:"right"}}><Price symbol={'BTCUSDT'}/></td></th> </Dropdown.Item>
                          <Dropdown.Item className="bg-dark text-light" eventKey="ETHTRY"><th><td style={{paddingRight:"30px"}}><img src="images/coins/eth.png" style={{maxHeight:"20px", maxWidth:"20px", marginRight:"5%"}} alt="bitcointry"/></td><td> ETH/TRY</td><td style={{ minWidth:"100px", textAlign:"right"}}><Price symbol={'ETHTRY'}/></td></th> </Dropdown.Item>
                          <Dropdown.Item className="bg-dark text-light" eventKey="ETHBTC"><th><td style={{paddingRight:"30px"}}><img src="images/coins/eth.png" style={{maxHeight:"20px", maxWidth:"20px", marginRight:"5%"}} alt="bitcointry"/></td><td> ETH/BTC</td><td style={{ minWidth:"110px", textAlign:"right"}}><Price symbol={'ETHBTC'}/></td></th> </Dropdown.Item>
                          <Dropdown.Item className="bg-dark text-light" eventKey="ETHUSDT"><th><td style={{paddingRight:"30px"}}><img src="images/coins/eth.png" style={{maxHeight:"20px", maxWidth:"20px", marginRight:"5%"}} alt="bitcointry"/></td><td> ETH/USDT</td><td style={{ minWidth:"80px", textAlign:"right"}}><Price symbol={'ETHUSDT'}/></td></th> </Dropdown.Item>
                          <Dropdown.Item className="bg-dark text-light" eventKey="XRPTRY"><th><td style={{paddingRight:"30px"}}><img src="images/coins/xrp.png" style={{maxHeight:"20px", maxWidth:"20px", marginRight:"5%"}} alt="bitcointry"/></td><td> XRP/TRY</td><td style={{ minWidth:"74px", textAlign:"right"}}><Price symbol={'XRPTRY'}/></td></th></Dropdown.Item>
                          <Dropdown.Item className="bg-dark text-light" eventKey="XRPBTC"><th><td style={{paddingRight:"30px"}}><img src="images/coins/xrp.png" style={{maxHeight:"20px", maxWidth:"20px", marginRight:"5%"}} alt="bitcointry"/></td><td> XRP/BTC</td><td style={{ minWidth:"130px", textAlign:"right"}}><Price symbol={'XRPBTC'}/></td></th></Dropdown.Item>
                          <Dropdown.Item className="bg-dark text-light" eventKey="XRPUSDT"><th><td style={{paddingRight:"30px"}}><img src="images/coins/xrp.png" style={{maxHeight:"20px", maxWidth:"20px", marginRight:"5%"}} alt="bitcointry"/></td><td> XRP/USDT</td><td style={{ minWidth:"90px", textAlign:"right"}}><Price symbol={'XRPUSDT'}/></td></th></Dropdown.Item>
                          <Dropdown.Item className="bg-dark text-light" eventKey="LTCTRY"><th><td style={{paddingRight:"30px"}}><img src="images/coins/ltc.png" style={{maxHeight:"20px", maxWidth:"20px", marginRight:"5%"}} alt="bitcointry"/></td><td> LTC/TRY</td><td style={{ minWidth:"98px", textAlign:"right"}}><Price symbol={'LTCTRY'}/></td></th></Dropdown.Item>
                          <Dropdown.Item className="bg-dark text-light" eventKey="LTCBTC"><th><td style={{paddingRight:"30px"}}><img src="images/coins/ltc.png" style={{maxHeight:"20px", maxWidth:"20px", marginRight:"5%"}} alt="bitcointry"/></td><td> LTC/BTC</td><td style={{ minWidth:"115px", textAlign:"right"}}><Price symbol={'LTCBTC'}/></td></th></Dropdown.Item>
                          <Dropdown.Item className="bg-dark text-light" eventKey="LTCUSDT"><th><td style={{paddingRight:"30px"}}><img src="images/coins/ltc.png" style={{maxHeight:"20px", maxWidth:"20px", marginRight:"5%"}} alt="bitcointry"/></td><td> LTC/USDT</td><td style={{ minWidth:"77px", textAlign:"right"}}><Price symbol={'LTCUSDT'}/></td></th></Dropdown.Item>
                          <Dropdown.Item className="bg-dark text-light" eventKey="USDTTRY"><th><td style={{paddingRight:"30px"}}><img src="images/coins/tether.png" style={{maxHeight:"20px", maxWidth:"20px", marginRight:"5%"}} alt="bitcointry"/></td><td> USDT/TRY</td><td style={{ minWidth:"64px", textAlign:"right"}}><Price symbol={'USDTTRY'}/></td></th></Dropdown.Item>
                        </DropdownButton>
                </div>


        )
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
  connect(mapStateToProps, mapDispatchToProps)(AssetDropdown)
);
                  /* <select value={this.props.product} onChange={this.handleChange} style={{height:"30px",background:"#0e162d",color:"white",marginTop:"2px",marginLeft:"5px"}}>
                    <option value="BTCTRY"><img src="images/coins/btc.png" style={{maxHeight:"20px", maxWidth:"20px", marginRight:"5%"}} alt="bitcointry"/>BTC/TRY</option>
                    <option value="BTCUSDT">BTC/USDT</option>
                    <option value="ETHTRY">ETH/TRY</option>
                    <option value="ETHBTC">ETH/BTC</option>
                    <option value="ETHUSDT">ETH/USDT</option>
                    <option value="XRPTRY">XRP/TRY</option>
                    <option value="XRPBTC">XRP/BTC</option>
                    <option value="XRPUSDT">XRP/USDT</option>
                    <option value="LTCTRY">LTC/TRY</option>
                    <option value="LTCBTC">LTC/BTC</option>
                    <option value="LTCUSDT">LTC/USDT</option>
                    <option value="USDTTRY">USDT/TRY</option> 
                </select> */