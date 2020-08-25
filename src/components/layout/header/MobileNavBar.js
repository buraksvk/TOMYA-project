import React, {Fragment} from 'react'
import { Link } from 'react-router-dom';
import {AuthService} from '../../../services/AuthService'

import { ApiService } from '../../../services/apiService';

class Header extends React.Component{
  constructor(props) {
    super(props);
    this.authService = new AuthService();
    this.apiService = new ApiService();

    this.state = {
      isLoggedin : ''
    }
  }

  async componentWillMount() { 
    this.setState({
      isLoggedin: await this.apiService.isLoggedin() 
    })
  }

  login = () => {
    this.authService.login();
  };
  
  logout = () => { 
    this.authService.logout();
  }

  render() {
    let button;
    if(this.state.isLoggedin) {
      button = <li className="crypt-box-menu menu-red"> <a onClick={this.logout} style={{cursor: "pointer"}}>Çıkış yap</a> </li>
    } else { 
      button = <li className="crypt-box-menu menu-green"> <a onClick={this.login} style={{cursor: "pointer"}}>Giriş yap</a> </li>
    }
    return (
      <header>
      <div className="crypt-mobile-menu">
          <ul className="crypt-heading-menu">
              <li className="active"><button style={{background:"#4138e0", border:"none"}}><Link to='/basic'>AL-SAT</Link></button></li>
              {button}
          </ul>
      </div>
  </header>
  );
  }
   
}

export default Header;
