import React from 'react'
import NavbarUser from "./NavbarUser";
import MobileNavBar from "./MobileNavBar"
import HeaderCryptoMarketStatus from "./HeaderCryptoMarketStatus"

const HeaderUser = () => {
  return (
    <header>
      <div className="container-full-width">
        <div className="crypt-header">
          <div className="row">
            <div className="col-xl-4 col-lg-4 col-md-4 col-sm-5">
              <div className="row">
                <div className="col-xs-2">
                  <div className="crypt-logo">
                    <img
                      src="/Tomya-Pro-White.svg"
                      style={{ marginLeft: "25px" }}
                      alt=""
                    />
                  </div>
                </div>
                <div className="col-xs-2">
                  <div className="crypt-mega-dropdown-menu">
                    {" "}                   
                    <HeaderCryptoMarketStatus />
                  </div>
                </div>
              </div>
            </div>
            <NavbarUser />
            <i className="menu-toggle pe-7s-menu d-xs-block d-sm-block d-md-none d-sm-none"></i>
          </div>
        </div>
      </div>
      <MobileNavBar />
    </header>
  );
}

export default HeaderUser