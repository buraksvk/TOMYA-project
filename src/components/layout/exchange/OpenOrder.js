import React from "react";

//?

const OpenOrder = () => {
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

  return (
    <div className="scroller">
      <table className="tablehistory">
        <thead>
          <tr>
            <th scope="col">Tarih</th>
            <th scope="col">Al/sat</th>
            <th scope="col">BTC Fiyatı</th>
            <th scope="col">Toplam Baz puan</th>
            <th scope="col">Bitmiş Baz puan</th>
            <th scope="col">İşlem</th>
          </tr>
          <tr>
                <td scope="col"></td>
                <td scope="col" style={{paddingRight:"100px"}}></td>
                <td scope="col" style={{paddingRight:"100px"}}></td>
                <td scope="col" style={{paddingRight:"100px"}}></td>
                <td scope="col" style={{paddingRight:"100px"}}></td>
                <td scope="col" style={{paddingRight:"50px"}}></td>
          </tr>
        </thead>
      </table>
      <div className="no-orders text-center">
      </div>
    </div>
  );
};

export default OpenOrder;
