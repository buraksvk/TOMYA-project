import React, { Fragment } from "react";
import AssetsDesktop from './AssetsDesktop';
import AssetsMobile from './AssetsMobile';

class Assets extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        showComponent: false,
      };
      this._onButtonClick = this._onButtonClick.bind(this);
    }
  
    _onButtonClick() {
    if(this.state.showComponent == false || this.state.showComponent == null){
        this.setState({
            showComponent: true,
          });
    }
    else{
        this.setState({
            showComponent: false,
          });
    }

    }
  
    render() {
      return (
    <Fragment>
      <div id="content-desktop">
        <AssetsDesktop sidebar='1' />
      </div> 
      <div id="content-mobile">
          {/* <button className={"assetmobile " + (this.state.showComponent ? "altvar" : "altyok")}  style={{border:"1px solid",background:"purple",minHeight:"50px",color:"white"}} onClick={this._onButtonClick}>Varlıklarım</button>
          {this.state.showComponent ?
           <AssetsMobile /> :
           null
        } */}
        <AssetsMobile sidebar='1' />
      </div> 
      
    </Fragment>
  );
      }
};

export default Assets;
