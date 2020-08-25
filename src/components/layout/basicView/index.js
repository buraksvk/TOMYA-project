import React, { Component, Fragment } from 'react'
import Head from './Head'
import Header from '../header/Header'
import Basic from './Basic';

import ReactNotification from 'react-notifications-component'

import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { setTheme } from "../../../redux/actions";


class index extends Component {

    constructor(props) {
        super(props)
    }

    render() {

        return (
            <div>
                <Fragment>
                <Head/>
                <body className={this.props.themes?'crypt-dark':'crypt-light'}>
                    <ReactNotification />
                    <Header/>
                    <Basic/>
                </body>
                <footer></footer>
                </Fragment>     
            </div>
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