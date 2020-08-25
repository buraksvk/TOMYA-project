import React, { Fragment } from "react";
import AssetPrice from './AssetPrice';
import AssetPriceMobile from './AssetPriceMobile';

const AssetSidebar = () => {

  return (
    <Fragment>
      <div id="content-desktop">
        <AssetPrice sidebar='1' />
      </div> 
      <div id="content-mobile">
        <AssetPriceMobile sidebar='1' />
      </div> 
      
    </Fragment>
  );
};

export default AssetSidebar;
