import React, { Component, Fragment } from 'react'
import Head from './Head'
import Header from '../header/Header'
import Exchange from './Exchange';

import GetSymbol from './GetSymbol'
import { ApiService } from '../../../services/apiService';
import ReactNotification from 'react-notifications-component'


import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { setTheme } from "../../../redux/actions";

let api = new ApiService();
class index extends Component {
    
    constructor(props) {
        super(props)

        this.state = {
            user : ''
        }
    }

    async componentDidMount() {
        this.setState({user:await api.authService.getUser()});
        this.setState({isLoggedin:await api.isLoggedin()});
    }

    render() {
        var user = [];
        
        if(this.state.isLoggedin) {
            user=<Fragment>
                <ReactNotification />
                <Head/>
                <body className={this.props.themes?'crypt-dark':'crypt-light'} >
                    <Header />
                    <Exchange symbol={GetSymbol()} />
                </body>
            </Fragment> 
        } else{
            user=
            <Fragment>
                <ReactNotification />
                <Head/>
                <body className={this.props.themes?'crypt-dark':'crypt-light'}>
                    <Header/>
                    <Exchange symbol={GetSymbol()} />
                </body>
            </Fragment> 
        }
        return (
            <div>{user}</div>
        )
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
    connect(mapStateToProps, mapDispatchToProps)(index)
  );