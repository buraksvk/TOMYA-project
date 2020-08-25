import React, {useState, useEffect, useRef} from 'react'

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
                walletData = await api.callApi('wallet/GetMyWallets');
                
                let dataAppendString = ''
                for (let index = 0; index < walletData.data.length; index++) {
                    dataAppendString += '<tr> <th>'+walletData.data[index].asset+'</th> <td>'+walletData.data[index].amount+'</td></tr>';
                    
                }
                setWallet(<tbody dangerouslySetInnerHTML={{ __html:dataAppendString}}></tbody>);
                
            } else {
                setWallet(<tbody><tr><th className="crypt-up">Lütfen Giriş Yapın</th><th></th></tr></tbody>);
            }
        }

        useEffect( () => {
            getWallet();
            return () => { };
        }, []);

        return (
            <div className="scroller">
                <table className="tablehistory">
                    <thead>
                        <tr>
                            <th scope="col">Varlık</th>
                            <th scope="col">Miktar</th>
                        </tr>
                    </thead>
                        {wallet}
                </table>
            </div>
        )
        
        
    }

export default Balance;