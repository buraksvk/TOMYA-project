// import React, {useState, useEffect} from 'react'

// import {ApiService} from '../../../services/apiService'

// import { connect } from "react-redux";
// import { withRouter } from "react-router-dom";
// import { setProduct } from "../../../redux/actions";


// const symbolMainAssets = { 
//     'BTCTRY' : 'BTC',
//     'BTCUSDT' : 'BTC',
//     'ETHTRY' : 'ETH',
//     'ETHBTC' : 'ETH',
//     'XRPTRY' : 'XRP',
//     'XRPBTC' : 'XRP',
//     'LTCTRY' : 'LTC',
//     'LTCBTC' : 'LTC',
//     'USDTTRY' : 'USDT',
//     'XRPUSDT' : 'XRP',
//     'LTCUSDT' : 'LTC',
//     'ETHUSDT' : 'ETH'
// }
// const symbolSecondAssets = { 
//     'BTCTRY' : 'TRY',
//     'BTCUSDT' : 'USDT',
//     'ETHTRY' : 'TRY',
//     'ETHBTC' : 'BTC',
//     'XRPTRY' : 'TRY',
//     'XRPBTC' : 'BTC',
//     'LTCTRY' : 'TRY',
//     'LTCBTC' : 'BTC',
//     'USDTTRY' : 'TRY',
//     'XRPUSDT' : 'USDT',
//     'LTCUSDT' : 'USDT',
//     'ETHUSDT' : 'USDT'
// }

// const AssetsMobile = (props) => {
//     let walletData;
//     let user;
//     let api;
//     let GetMainAsset = symbolMainAssets[props.product];
//     let GetSecondAsset = symbolSecondAssets[props.product];

//     const [assetsData,setAssetsData] = useState([]);
//     async function getWallet() {
//         api = new ApiService();

//         if(await api.isLoggedin()) {
//             user = await api.authService.getUser();
//             walletData = await api.callApi('wallet/GetMyWallets');
            
//             let dataAppendString = ''
//             for (let index = 0; index < walletData.data.length; index++) {
//                 if(GetMainAsset === walletData.data[index].asset || GetSecondAsset === walletData.data[index].asset){
//                     dataAppendString += '<div className="ml-4"> <p> Kullanılabilir '+walletData.data[index].asset+': '+walletData.data[index].amount+'</p>';
//                 }
                
//             }
//             setAssetsData(<div className="ml-4" dangerouslySetInnerHTML={{ __html:dataAppendString}}></div>);
            
//         } else {
//             setAssetsData(<div className="ml-4"> <p>Lütfen Giriş Yapın</p> </div>);
//         }
//     }

//     useEffect( () => {
//         getWallet();
//         return () => { };
//     }, [props.product]);

//     return (

//   //--------------------------------


//                     <div >
//             <div className="crypt-boxed-area assetmobile">
//               <div className="no-gutters" style={{minHeight:"150px"}}>

//                   <div className="row">
//                       <div className="col ml-4 mt-3" style={{paddingRight:"15px"}}>
//                         <a href='https://myaccount.tomya.com/cuzdanim/yatirma' target="_blank" rel="noopener noreferrer">
//                             <button  style={{width:"100%", background:"#f7614e"}} className="percent-btn">Yatırım</button>
//                         </a>
//                       </div>
//                       <div className="col mr-4 mt-3" style={{paddingRight:"15px"}}>
//                         <a href='https://myaccount.tomya.com/cuzdanim/cekme' target="_blank" rel="noopener noreferrer">
//                             <button style={{width:"100%", background:"#49c279"}} className="percent-btn">Çekim</button>
//                         </a>
//                       </div>
                      
//                   </div>
//                   {assetsData}
//               </div>
//           </div>
//         </div>

//     )
    
    
// }

// const mapStateToProps = (state) => {
//     return {
//       product: state.testRedux.product,
//     };
//   };
//   const mapDispatchToProps = (dispatch) => ({
//     setProduct: (payload) => dispatch(setProduct(payload)),
//   });
  
//   export default withRouter(
//     connect(mapStateToProps, mapDispatchToProps)(AssetsMobile)
//   );
import React, {useState, useEffect} from 'react'

import {ApiService} from '../../../services/apiService'

import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { setProduct } from "../../../redux/actions";


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

const AssetsDesktop = (props) => {
    let walletData;
    let user;
    let api;
    let GetMainAsset = symbolMainAssets[props.product];
    let GetSecondAsset = symbolSecondAssets[props.product];

    const [assetsData,setAssetsData] = useState([]);
    async function getWallet() {
        api = new ApiService();

        if(await api.isLoggedin()) {
            user = await api.authService.getUser();
            walletData = await api.callApi('wallet/GetMyWallets');
            
            let dataAppendString = ''
            for (let index = 0; index < walletData.data.length; index++) {
                if(GetMainAsset === walletData.data[index].asset || GetSecondAsset === walletData.data[index].asset){
                    dataAppendString += '<div className="ml-4"> <p> Kullanılabilir '+walletData.data[index].asset+': '+walletData.data[index].free+'</p>';
                }
                
            }
            setAssetsData(<div className="ml-4" dangerouslySetInnerHTML={{ __html:dataAppendString}}></div>);
            
        } else {
            setAssetsData(<div className="ml-4"> <p>Lütfen Giriş Yapın</p> </div>);
        }
    }

    useEffect( () => {
        getWallet();
        return () => { };
    }, [props.product]);

    return (
        <div className="tab-content">
        <ul className="nav nav-tabs">
          <li role="presentation">
            <a
              href="#history"
              className="active"
              data-toggle="tab"
            >
              Varlıklarım
            </a>
          </li>
        </ul>
        <div
          role="tabpanel"
          className="tab-pane active"
          id="history"
          style={{ maxHeight: "300px"}}
        >
          <div>
            <div className="crypt-boxed-area">
              <div className="no-gutters" style={{minHeight:"200px"}}>

                  <div className="row">
                      <div className="col ml-4 mt-3" style={{paddingRight:"15px"}}>
                        <a href='https://myaccount.tomya.com/cuzdanim/yatirma' target="_blank" rel="noopener noreferrer">
                            <button  style={{width:"100%", background:"#f7614e"}} className="percent-btn">Yatırım</button>
                        </a>
                      </div>
                      <div className="col mr-4 mt-3" style={{paddingRight:"15px"}}>
                        <a href='https://myaccount.tomya.com/cuzdanim/cekme' target="_blank" rel="noopener noreferrer">
                            <button style={{width:"100%", background:"#49c279"}} className="percent-btn">Çekim</button>
                        </a>
                      </div>
                      
                  </div>
                  {assetsData}
              </div>
          </div>
  </div>
        </div>
      </div>

        
    )
    
    
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
    connect(mapStateToProps, mapDispatchToProps)(AssetsDesktop)
  );
  