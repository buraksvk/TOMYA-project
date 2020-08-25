import React, {useState, useEffect, useRef} from 'react'
//import axios from 'axios'

import {ApiService} from '../../../services/apiService'

const GetAssetBalance = async (assetSymbol) => {
    let walletData;
    let api;

    api = new ApiService();

    if(await api.isLoggedin()) {
        walletData = await api.callApi('wallet/GetMyWallets');

        for (let index = 0; index < walletData.data.length; index++) {
            if(assetSymbol === walletData.data[index].asset){
                return walletData.data[index].amount;
            }
        }
    } else {
        console.log('Kullanıcı girişi yapınız.');
    }

    return null;
}
export default GetAssetBalance;