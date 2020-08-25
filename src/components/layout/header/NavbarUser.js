import React from 'react'
import { Link } from 'react-router-dom';
import {AuthService} from '../../../services/AuthService'

export default class NavbarUser extends React.Component {
  render(){
    return (
      <div className="col-xl-8 col-lg-8 col-md-8 d-none d-md-block d-lg-block">
          <ul className="crypt-heading-menu fright">
              <li className="crypt-box-menu menu-red">
                <a onClick={this.login} style={{cursor: "pointer"}}>Çıkış yap</a>
              </li>
          </ul>
      </div>
    )
  }



  
}