import React from 'react'
import { Link } from 'react-router-dom';
import {AuthService} from '../../../services/AuthService'

import { ApiService } from '../../../services/apiService';

export default class Navbar extends React.Component {

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
//desktop navbar
  render(){
    let button;
    let button2;
    if(this.state.isLoggedin) {
      button = <li className="crypt-box-menu menu-red"> <a onClick={this.logout} style={{cursor: "pointer"}}>Çıkış yap</a> </li>
      button2 = [];
    } else { 
      button = <li style={{backgroundColor:"#9932CC",marginRight:"25px"}}><a href='https://sso.tomya.com/uye-ol'>Kayıt Ol</a></li>
      button2 = <li className="crypt-box-menu menu-green"> <a onClick={this.login} style={{cursor: "pointer"}}>Girişa yap</a> </li>
    }
    return (
      <div className="col-xl-8 col-lg-8 col-md-8 d-none d-md-block d-lg-block">
          <ul className="crypt-heading-menu fright">
              <li>
                <Link to='/basic'>Al-SAT</Link>
              </li>
              <li>
                <Link to='/exchange'>Borsa</Link>
              </li>
              {button}
              {button2}
          </ul>
      </div>
    )
  }
  
}