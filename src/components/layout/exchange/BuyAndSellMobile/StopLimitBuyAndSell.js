import React from 'react'

const BuyAndSell = () => {
    return (
        <div>
            <div className="crypt-boxed-area">
                    <h6 className="crypt-bg-head">Stop Limit <b className="crypt-up">Al</b> / <b className="crypt-down">Sat</b></h6>
                    <div className="row no-gutters">
                        <div className="col-md-6">
                            <div className="crypt-buy-sell-form">
                                <p>Alış <span className="crypt-up">BTC</span> <span className="fright">Mevcut: <b className="crypt-up">20 BTC</b></span></p>
                                <div className="crypt-buy">
                                    <div className="input-group mb-3">
                                        <div className="input-group-prepend"> <span className="input-group-text">Fiyat</span> </div>
                                        <input type="text" className="form-control" placeholder="0.02323476" readOnly/>
                                        <div className="input-group-append"> <span className="input-group-text">BTC</span> </div>
                                    </div>
                                    <div className="input-group mb-3">
                                        <div className="input-group-prepend"> <span className="input-group-text">Miktar</span> </div>
                                        <input type="number" className="form-control"/>
                                        <div className="input-group-append"> <span className="input-group-text">BTC</span> </div>
                                    </div>
                                    <div className="input-group mb-3">
                                        <div className="input-group-prepend"> <span className="input-group-text">Toplam</span> </div>
                                        <input type="text" className="form-control" readOnly/>
                                        <div className="input-group-append"> <span className="input-group-text">BTC</span> </div>
                                    </div>
                                    <div>
                                        <p>Ücret: <span className="fright">100%x0.2=0.02</span></p>
                                    </div>
                                    <div className="text-center mt-3 mb-3 crypt-up">
                                        <p></p>
                                        <h4>0.09834 BTC</h4></div>
                                    <div className="menu-green"><a href="" className="crypt-button-green-full">Alış</a></div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="crypt-buy-sell-form">
                                <p>Satış <span className="crypt-down">BTC</span> <span className="fright">Mevcut: <b className="crypt-down">20 BTC</b></span></p>
                                <div className="crypt-sell">
                                    <div className="input-group mb-3">
                                        <div className="input-group-prepend"> <span className="input-group-text">Fiyat</span> </div>
                                        <input type="text" className="form-control" placeholder="0.02323476" readOnly/>
                                        <div className="input-group-append"> <span className="input-group-text">BTC</span> </div>
                                    </div>
                                    <div className="input-group mb-3">
                                        <div className="input-group-prepend"> <span className="input-group-text">Miktar</span> </div>
                                        <input type="number" className="form-control"/>
                                        <div className="input-group-append"> <span className="input-group-text">BTC</span> </div>
                                    </div>
                                    <div className="input-group mb-3">
                                        <div className="input-group-prepend"> <span className="input-group-text">Toplam</span> </div>
                                        <input type="text" className="form-control" readOnly/>
                                        <div className="input-group-append"> <span className="input-group-text">BTC</span> </div>
                                    </div>
                                    <div>
                                        <p>Ücret: <span className="fright">100%x0.2=0.02</span></p>
                                    </div>
                                    <div className="text-center mt-3 mb-3 crypt-down">
                                        <p></p>
                                        <h4>0.09834 BTC</h4></div>
                                    <div><a href="" className="crypt-button-red-full">Satış</a></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
        </div>
    )
}

export default BuyAndSell;
