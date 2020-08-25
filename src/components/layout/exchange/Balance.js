import React, {useState, useEffect, useRef} from 'react'
//import axios from 'axios'

import {ApiService} from '../../../services/apiService'

const Balance = () => {
        let walletData;
        let user;
        let api;

        const [wallet,setWallet] = useState([]);
        async function getWallet() {
            api = new ApiService();

            if(await api.isLoggedin()) {
                user = await api.authService.getUser();
                walletData = await api.callApi("wallet/GetMyWallets");
                
                let dataAppendString = ''
                for (let index = 0; index < walletData.data.length; index++) {
                    dataAppendString += '<tr> <th>'+walletData.data[index].asset+'</th> <td>'+walletData.data[index].amount+'</td>  <td>'+walletData.data[index].free+'</td></tr>';
                }
                setWallet(<tbody dangerouslySetInnerHTML={{ __html:dataAppendString}}></tbody>);
                
            } else {
                setWallet(<tbody><tr><th className="crypt-up">Lütfen Giriş Yapın</th><th></th><th></th></tr></tbody>);
            }
        }
        async function getWalletUpdate() {

                api = new ApiService();

            if(await api.isLoggedin()) {
                user = await api.authService.getUser();
                walletData = await api.callApi("wallet/GetMyWallets");
                
                let dataAppendString = ''
                for (let index = 0; index < walletData.data.length; index++) {
                    dataAppendString += '<tr> <th>'+walletData.data[index].asset+'</th> <td>'+walletData.data[index].amount+'</td>  <td>'+walletData.data[index].free+'</td></tr>';
                }
                setWallet(<tbody dangerouslySetInnerHTML={{ __html:dataAppendString}}></tbody>);
                
            } else {
                setWallet(<tbody><tr><th className="crypt-up">Lütfen Giriş Yapın</th><th></th><th></th></tr></tbody>);
            }
            }

        useEffect( () => {
            getWallet();
            return () => { };
        }, []);
        
        useEffect( () => {
            const timer = setTimeout(() => {
                getWalletUpdate()
              }, 5000);
              return () => clearTimeout(timer);
        }, [wallet]);
        return (
            <div className="scroller">
                <table className="tablewallet">
                    <thead>
                        <tr>
                            <th scope="col">Varlık</th>
                            <th scope="col">Miktar</th>
                            <th scope="col">Kullanılabilir Miktar</th>
                        </tr>
                    </thead>
                        {wallet}
                </table>
            </div>
        )
        
        
    }

export default Balance;