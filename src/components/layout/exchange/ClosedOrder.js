import React, {useState, useEffect, useRef} from 'react'
import moment from 'moment';
import 'moment/locale/tr';
import { ApiService } from '../../../services/apiService';


import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { setProduct } from "../../../redux/actions";
import { setTheme } from "../../../redux/actions";



const ClosedOrder = () => {

        let closedOrderData ;
        let api;
        

        const [closedOrder,setClosedOrder] = useState([]);

        async function getClosedOrder() {

            api = new ApiService();

            if(await api.isLoggedin()) {
                closedOrderData = await api.callApi("history/GetAllOrders?pageIndex=0&pageSize=10");
                let dataAppendString = ''
                for (let index = 0; index < closedOrderData.data.data.length; index++) {
                //dataAppendString += '<tr> <th>'+closedOrderData.data.data[index].executedQuantity+'</th> <td>'+closedOrderData.data.data[index].id+'</td></tr>';
                dataAppendString += '<tr>';
                dataAppendString += '<th>'+moment(closedOrderData.data.data[index].createdAtUtc).format('L LTS')+'</th>';
                if(closedOrderData.data.data[index].side === 1)
                    dataAppendString += '<td> Satış </td>';
                else
                    dataAppendString += '<td> Alış </td>';
                dataAppendString += '<td>'+closedOrderData.data.data[index].symbol+'</td>';
                if(closedOrderData.data.data[index].orderType === 1)
                    dataAppendString += '<td> Piyasa</td>';
                if(closedOrderData.data.data[index].orderType === 2)
                    dataAppendString += '<td> Limit</td>';
                dataAppendString += '<td>'+closedOrderData.data.data[index].originalQuantity+'</td>';
                dataAppendString += '<td>'+closedOrderData.data.data[index].executedQuantity+'</td>';
                dataAppendString += '<td>'+(closedOrderData.data.data[index].cummulativeQuoteQuantity / closedOrderData.data.data[index].executedQuantity).toFixed(2).replace(/0+$/, "")+'</td>';
                dataAppendString += '<td>'+closedOrderData.data.data[index].cummulativeQuoteQuantity.toFixed(4).replace(/0+$/, "")+'</td>';
                if(closedOrderData.data.data[index].orderStatus === 3)
                    dataAppendString += '<td> Tamamlandı</td>';
                if(closedOrderData.data.data[index].orderStatus === 2)
                    dataAppendString += '<td> Kısmi Gerçekleşti</td>';
                if(closedOrderData.data.data[index].orderStatus === 1)
                    dataAppendString += '<td> Yeni</td>';
                if(closedOrderData.data.data[index].orderStatus === 0)
                    dataAppendString += '<td> Blokaj Bekleniyor</td>';
                if(closedOrderData.data.data[index].orderStatus === -1)
                    dataAppendString += '<td> Reddedildi</td>';
                if(closedOrderData.data.data[index].orderStatus === -2)
                    dataAppendString += '<td> İptal Edildi</td>';
                dataAppendString += '</tr>';
            }
            setClosedOrder(<tbody dangerouslySetInnerHTML={{ __html:dataAppendString}}></tbody>);
            
            } else {
                setClosedOrder(<tbody><tr><th className="crypt-up">Lütfen Giriş Yapın</th><th></th><th></th><th></th><th></th><th></th></tr></tbody>);
            }
        }
        async function getClosedOrderUpdate() {

            api = new ApiService();

            if(await api.isLoggedin()) {
                closedOrderData = await api.callApi("history/GetAllOrders?pageIndex=0&pageSize=10");
                let dataAppendString = ''
                for (let index = 0; index < closedOrderData.data.data.length; index++) {
                //dataAppendString += '<tr> <th>'+closedOrderData.data.data[index].executedQuantity+'</th> <td>'+closedOrderData.data.data[index].id+'</td></tr>';
                dataAppendString += '<tr>';
                dataAppendString += '<th>'+moment(closedOrderData.data.data[index].createdAtUtc).format('L LTS')+'</th>';
                if(closedOrderData.data.data[index].side === 1)
                    dataAppendString += '<td> Satış </td>';
                else
                    dataAppendString += '<td> Alış </td>';
                dataAppendString += '<td>'+closedOrderData.data.data[index].symbol+'</td>';
                if(closedOrderData.data.data[index].orderType === 1)
                    dataAppendString += '<td> Piyasa</td>';
                if(closedOrderData.data.data[index].orderType === 2)
                    dataAppendString += '<td> Limit</td>';
                dataAppendString += '<td>'+closedOrderData.data.data[index].originalQuantity+'</td>';
                dataAppendString += '<td>'+closedOrderData.data.data[index].executedQuantity+'</td>';
                dataAppendString += '<td>'+(closedOrderData.data.data[index].cummulativeQuoteQuantity / closedOrderData.data.data[index].executedQuantity).toFixed(2).replace(/0+$/, "")+'</td>';
                dataAppendString += '<td>'+closedOrderData.data.data[index].cummulativeQuoteQuantity.toFixed(4).replace(/0+$/, "")+'</td>';
                if(closedOrderData.data.data[index].orderStatus === 3)
                    dataAppendString += '<td> Tamamlandı</td>';
                if(closedOrderData.data.data[index].orderStatus === 2)
                    dataAppendString += '<td> Kısmi Gerçekleşti</td>';
                if(closedOrderData.data.data[index].orderStatus === 1)
                    dataAppendString += '<td> Yeni</td>';
                if(closedOrderData.data.data[index].orderStatus === 0)
                    dataAppendString += '<td> Blokaj Bekleniyor</td>';
                if(closedOrderData.data.data[index].orderStatus === -1)
                    dataAppendString += '<td> Reddedildi</td>';
                if(closedOrderData.data.data[index].orderStatus === -2)
                    dataAppendString += '<td> İptal Edildi</td>';
                dataAppendString += '</tr>';
            }
            setClosedOrder(<tbody dangerouslySetInnerHTML={{ __html:dataAppendString}}></tbody>);
            
            } else {
                setClosedOrder(<tbody><tr><th className="crypt-up">Lütfen Giriş Yapın</th><th></th><th></th><th></th><th></th><th></th></tr></tbody>);
            }
        }
        useEffect( () => {
            getClosedOrder();
            return () => { };
        }, []);

        useEffect( () => {
            const timer = setTimeout(() => {
                getClosedOrderUpdate()
              }, 5000);
              return () => clearTimeout(timer);
        }, [closedOrder]);
            
            return (
                <div className="scroller">
                    <table className="tableclosedorder">
                        <thead>
                            <tr>
                                <th scope="col">Tarih/Saat</th>
                                <th scope="col" style={{paddingRight:"50px"}}>Alış/Satış</th>
                                <th scope="col" style={{paddingRight:"50px"}}>Sembol</th>
                                <th scope="col" style={{paddingRight:"50px"}}>Tür</th>
                                <th scope="col" style={{paddingRight:"50px"}}>Açılan İşlem</th>
                                <th scope="col" style={{paddingRight:"50px"}}>Tamamlanan İşlem</th>
                                <th scope="col" style={{paddingRight:"50px"}}>Fiyat</th>
                                <th scope="col" style={{paddingRight:"50px"}}>Toplam</th>
                                <th scope="col">İşlem Durumu</th>
                            </tr>
                        </thead>
                        {closedOrder}
                    </table>
                </div>
            )
        }
      export default ClosedOrder
