import React, {Fragment} from 'react'

const Header = () => {
    return (
        <header>
        <div className="container-full-width">
            <div className="crypt-header">
                <div className="row">
                    <div className="col-xl-4 col-lg-4 col-md-4 col-sm-5">
                        <div className="row">
                            <div className="col-xs-2">
                                <div className="crypt-logo"><img src="images/logo.jpg" alt=""/></div>
                            </div>
                            <div className="col-xs-2">
                                
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-8 col-lg-8 col-md-8 d-none d-md-block d-lg-block">
                        <ul className="crypt-heading-menu fright">
                            <li className="crypto-has-dropdown"><a href="exchange.html">Exchange</a>
                                <ul className="crypto-dropdown">
                                    <li><a href="exchange-2.html">Exchange 2</a></li>
                                    <li><a href="exchange-3.html">Exchange 3</a></li>
                                    <li><a href="exchange-4.html">Exchange 4</a></li>
                                </ul>
                            </li>
                            <li><a href="market-overview.html">Piyasa Bakış</a></li>
                            <li><a href="marketcap.html">Market Cap</a></li>
                            <li><a href="trading.html">Trading</a></li>
                            <li><a href="withdrawl.html">Account</a></li>
                            <li className="crypt-box-menu menu-red"><a href="register.html">register</a></li>
                            <li className="crypt-box-menu menu-green"><a href="login.html">login</a></li>
                        </ul>
                    </div><i className="menu-toggle pe-7s-menu d-xs-block d-sm-block d-md-none d-sm-none"></i></div>
            </div>
        </div>
        <div className="crypt-mobile-menu">
            <ul className="crypt-heading-menu">
                <li className="active"><a href="">Exchange</a></li>
                <li><a href="">Market Cap</a></li>
                <li><a href="">Treanding</a></li>
                <li><a href="">Tools</a></li>
                <li className="crypt-box-menu menu-red"><a href="">register</a></li>
                <li className="crypt-box-menu menu-green"><a href="">login</a></li>
            </ul>
            <div className="crypt-gross-market-cap">
                <h5>$34.795.90 <span className="crypt-up pl-2">+3.435 %</span></h5>
                <h6>0.7925.90 BTC <span className="crypt-down pl-2">+7.435 %</span></h6></div>
        </div>
    </header>
    )
}

export default Header;
