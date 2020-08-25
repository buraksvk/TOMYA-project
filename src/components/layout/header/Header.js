import React from 'react'
// import Navbar from "./Navbar";
import {Navbar,Nav} from "react-bootstrap";

import {Router,Route,Link} from "react-router-dom"

import {AuthService} from '../../../services/AuthService'
import { ApiService } from '../../../services/apiService';

import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { setTheme } from "../../../redux/actions";

class Header extends React.Component{
  constructor(props){
    super(props);
    this.authService = new AuthService();
    this.apiService = new ApiService();
    this._onButtonClick = this._onButtonClick.bind(this);

    this.state = {
      isLoggedin : ''
    }
  }
  async componentWillMount() { 
    this.setState({
      isLoggedin: await this.apiService.isLoggedin() 
    })
  }
  _onButtonClick() {
     if(this.props.themes == false){
        document.body.className = 'crypt-dark'
        const payload = true;
        this.props.setTheme(payload);
     }
     else{
      document.body.className = 'crypt-light'
      const payload = false;
      this.props.setTheme(payload);
     }

    }

  login = () => {
    this.authService.login();
  };
  
  logout = () => {
    this.authService.logout();
  }

  register = 'https://sso.' + window.location.hostname.replace('pro.', '');

  render(){
    let button1;
    let button2;
    if(this.state.isLoggedin) {
      button1 = [];
      button2 = <a onClick={this.logout} style={{cursor: "pointer"}}><Nav.Link style={{background:"red",textAlign:"center"}} className="text-light mr-1 ml-1 mb-1  mt-1"><button style={{border:"none",background:"red",color:"white"}}><b>ÇIKIŞ YAP</b></button></Nav.Link></a>
    } else { 
      button1 = <a style={{cursor: "pointer", textDecoration: "none"}}><Nav.Link href={this.register} style={{background:"transparent",textAlign:"center"}} className="text-light mr-1 ml-1 mb-1 mt-1">KAYIT OL</Nav.Link></a>
      button2 = <a onClick={this.login} style={{cursor: "pointer"}}><Nav.Link style={{background:"transparent",textAlign:"center"}} className="text-light mr-1 ml-1 mb-1  mt-1">GİRİŞ YAP</Nav.Link></a>
    }
    return ( 
      <header>
        <div className="container-full-width">
          <div className="crypt-header">
          <Navbar expand="lg" style={{background:"#202943",paddingBottom:"1px",paddingTop:"3px"}}>
              <Navbar.Brand href="/">
              <img
                      src="/Tomya-Pro-White.svg"
                      style={{ margin: "-65px",paddingLeft:"60px" }}
                      alt=""
                    />
             </Navbar.Brand>

             <Navbar.Collapse style={{float: "left"}} className="mobileHide">
                <Nav style={{marginLeft:"125px"}}>
                  <Nav.Link style={{textAlign:"center", borderLeft:"1px solid #fff", paddingLeft: "10px"}} className="text-light mt-1 mr-1 ml-1" ><Link to="/basic" exact className="header-links" activeClassName="selected" style={{paddingRight: "20px",paddingLeft: "10px", borderRight: "1px solid #fff"}}>Basit Al-Sat</Link></Nav.Link>
                  <Nav.Link className="text-light mt-1"><Link to="/" exact={true} className="header-links"  activeClassName="selected">Borsa</Link></Nav.Link>
                </Nav>
              </Navbar.Collapse>
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ml-auto">
                  <Nav.Link style={{textAlign:"center", paddingTop: "10px"}} className=" mr-1 modeButton ml-1" onClick={this._onButtonClick}>{this.props.themes? <span style={{fontSize: "17px", color: "#fff"}}><i class="fas fa-sun"></i></span>:<span style={{fontSize: "17px", color: "#fff"}}><i class="fas fa-moon"></i></span>}</Nav.Link>
                
                  <Nav.Link style={{textAlign:"center"}} className="text-light mobileShow mt-1 mr-1 ml-1" ><Link to="/basic" exact className="header-links" activeClassName="selected">Basit Al-Sat</Link></Nav.Link>
                  <Nav.Link style={{textAlign:"center"}} className="text-light mobileShow mt-1"><Link to="/" exact={true} className="header-links"  activeClassName="selected">Borsa</Link></Nav.Link>



                  {button1}
                  {button2}
                </Nav>
              </Navbar.Collapse>
            </Navbar>
        </div>
        </div>
    </header>
    );

  }
    
  }

  const mapStateToProps = (state) => {
    return {
      themes: state.themeReducer.themes,
    };
  };
  const mapDispatchToProps = (dispatch) => ({
    setTheme: (payload) => dispatch(setTheme(payload)),
  });
  
  export default withRouter(
    connect(mapStateToProps, mapDispatchToProps)(Header)
  );

// <div className="container-full-width">
// <div className="crypt-header">
//   <div className="row">
//     <div className="col-xl-4 col-lg-4 col-md-4 col-sm-5">
//       <div className="row">
//         <div className="col-xs-2">
//           <div className="crypt-logo">
//             <img
//               src="/Tomya-Pro-White.svg"
//               style={{ marginLeft: "25px" }}
//               alt=""
//             />
//           </div>
//         </div>

//         <div className="col-xs-2">
          
//         <div id="content-mobile" >
//           {button}
          
//           </div>
//         </div>

//       </div>
      
//     </div>
//     <Navbar authService={this.props.authService} />
        
  
// </div>
// </div>
// </div>