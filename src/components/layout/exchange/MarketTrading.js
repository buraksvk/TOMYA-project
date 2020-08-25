
import React from 'react'
import Price from './Price'
import {Spinner} from 'react-bootstrap';
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { setProduct } from "../../../redux/actions";

const TradingForm = (
    class extends React.Component{
        constructor(props){
            super(props);
    
            this.state = {
                data : [],
                asks : [],
                bids : [],
                intervalID : ""
            }
        }
            componentDidMount(){
             const getData = () => {
                 fetch('https:pro.tomya.com/api/providers/trading/orderbook?asset='+this.props.product)
                   .then(response => response.json())
                   .then(data => {
                     this.setState({bids: data.bids});
                     this.setState({asks: data.asks});
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
        if (this.state.asks[0] === undefined || this.state.bids[0] === undefined) {
            user = <Spinner animation="border" variant="light" />;
        } else { 
            user = 
            <div>
            <table className="tabledeneme" style={{fontSize:"10px"}}>
                <thead>
                    <tr>
                        <th scope="col">Toplam</th>
                        <th scope="col">Fiyat</th>
                        <th scope="col">Miktar</th>
                    </tr>
                </thead>
                <tbody>
                {
                    React.Children.toArray(
                        this.state.asks.map((item, i) => 
                        <tr>
                            <td>{item[2]}</td>
                            <td className="crypt-down" style={{paddingRight:"60px"}}><b>{item[0]}</b></td>
                            <td style={{paddingRight:"10px"}}>{item[1]}</td>
                        </tr>
                    )
                    )
                }
                </tbody>
            </table>
            <div>
            
                <table className="tablexxx" style={{fontSize:"12px",backgroundColor:"black", textAlign:"center"}}>
                <tbody>
                        <tr>
                        <td></td>
                        {this.state.asks[3] ? <td style={{paddingRight:"100px"}}><b><Price symbol={this.props.product}/></b></td> : <td className="crypt-down"><b><Price symbol={this.props.product}/></b></td>}
                            
                            <td style={{paddingRight:"10px"}}></td>
                        </tr>
                </tbody>
            </table>
            </div>
            <table className="tabledeneme" style={{fontSize:"10px"}}>
                <tbody>
                {
                    React.Children.toArray(
                        this.state.bids.map((item, i) => 
                        <tr>
                            <td >{item[2]}</td>
                            <td style={{paddingRight:"60px"}} className="crypt-up"><b>{item[0]}</b></td>
                            <td style={{paddingRight:"10px"}}>{item[1]}</td>
                        </tr>
                    )
                    )
                }
                </tbody>
            </table>
        </div>
        }
        return(<div>{user}</div>);
        }
    }
)
class MarketHistory extends React.Component{
    render(){
        return(
            <TradingForm
            product = {this.props.product}
            >
            </TradingForm>);
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
    connect(mapStateToProps, mapDispatchToProps)(MarketHistory)
  );

