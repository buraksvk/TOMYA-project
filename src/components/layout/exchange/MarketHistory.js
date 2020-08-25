import React from 'react'
import {Spinner} from 'react-bootstrap';
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { setProduct } from "../../../redux/actions";

const HistoryForm = (
    class extends React.Component{
        constructor(props){
            super(props);
    
            this.state = {
                data : [],
                intervalID : ""
            }
        }
            componentDidMount(){
             const getData = () => {
                 fetch('https:pro.tomya.com/api/providers/trading/trades?asset='+this.props.product)
                   .then(response => response.json())
                   .then(data => {
                     this.setState({data: data.trades});
                     this.intervalID = setTimeout(getData.bind(this), 1000);
                   });
             }
             getData();
             return () => {
                 clearTimeout(this.intervalID);
             };
        }
        render(){
    
          var user = [];
        if (this.state.data[0] === undefined) {
            user = <Spinner animation="border" variant="light" />;
        } else { 
            user = 
                <div className="scroller">
                <table className="tabledeneme" style={{fontSize:"10px"}}>
                    <thead>
                        <tr>
                            <th scope="col">Tarih</th>
                            <th scope="col">Miktar</th>
                            <th scope="col">Fiyat</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            React.Children.toArray(
                            this.state.data.map((item, i) => 
                                <tr>
                                     <td>{new Intl.DateTimeFormat('tr', {hour: '2-digit', minute: '2-digit', second: '2-digit'}).format(item[2])}</td> 
                                    {item[3] ? <td className="crypt-up" style={{paddingRight:"60px"}}><b>{item[1]}</b></td> : <td className="crypt-down" style={{paddingRight:"60px"}}><b>{item[1]}</b></td>}
                                    <td style={{paddingRight:"10px"}}>{item[0]}</td>
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
            <HistoryForm
            product = {this.props.product}
            >
        
            </HistoryForm>);
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

