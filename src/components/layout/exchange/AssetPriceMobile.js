import React, {useState, useEffect, Fragment} from 'react'
import GetSymbol from './GetSymbol';
import AssetDropdown from './AssetDropdown';
import GetMainAsset from './GetMainAsset'

const AssetPrice = (props) => {

            return (
                <Fragment>
                    <div className="crypt-gross-market-cap mt-2 ">
                    <div className="row">
                        <div className="col-3 col-sm-6 col-md-12 col-lg-6">
                        <div className="row">
                            <div className="col-sm-4 col-md-12 col-lg-3">
                            <div ><AssetDropdown /></div>
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
                </Fragment>
            )
 }

export default AssetPrice;
