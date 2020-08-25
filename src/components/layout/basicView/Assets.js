import React, {useState, useEffect, useRef} from 'react'


const Assets = () => {
    // let intervalID = '';

    // const [data, setData] = useState(0);

    // const getData = () => {
    //     fetch('https://pro.tomya.com/api/providers/trading/trades?asset=BTCUSDT')
    //       .then(response => response.json())
    //       .then(data => {
    //         setData(data.trades);
    //         intervalID = setTimeout(getData.bind(this), 1000);
    //       });
    // }

    // useEffect(() => {
    //     getData();
    //     return () => {
    //         clearTimeout(this.intervalID);
    //     };
    //   }, []);

    // if (data[0] === undefined) {
    //     return <span>Yükleniyor...</span>;
    // } else { 
        var isLogin = [];
        let user = 1;
        if(user== 0){
            isLogin=
            <div>

            </div>
        }
        else{
            isLogin=
            <div className="ml-2">
                
                <p> Kullanılabilir BTC : 0.124214</p>
                
                <p> Kullanılabilir USDT : 4.124216</p>
            </div>
        }
        return (
            <div>
                      <div className="crypt-boxed-area">
                        <div className="no-gutters">
                            <div className="row">
                            <h6 style={{marginLeft:"30px", marginTop:"20px"}}>Varlıklarım</h6>
                            </div>
                            
                            <div className="row">
                                <div className="col ml-2">
                                    <button style={{width:"100%"}}className="percent-btn">Yatırım</button>
                                </div>
                                <div className="col mr-2">
                                <button style={{width:"100%"}} className="percent-btn">Çekim</button>
                                </div>
                                
                                
                            </div>
                            {isLogin}
                        </div>
                    </div>
            </div>
        )
    
}
export default Assets;