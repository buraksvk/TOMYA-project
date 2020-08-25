import React from 'react'
import { Helmet } from 'react-helmet';

const Header = () => {
    return (
        <Helmet className="crypt-dark" >
                <meta charset="UTF-8"/>
                <meta name="viewport" content="width=device-width, initial-scale=1"/>
                <title>Tomya Pro Exchange</title>
                <link rel="stylesheet" href="bootstrap/css/bootstrap.min.css"/>
                <link rel="stylesheet" href="css/style.css"/>
                <link rel="stylesheet" href="css/icons.css"/>
                <link rel="stylesheet" href="css/ui.css"/>
                <script src="https://s3.tradingview.com/tv.js"></script>
                <script src="js/tv.js"></script>
                <script src="js/depthchart.js"></script>
                <script src="js/main.js"></script>
        </Helmet>
    )
}

export default Header;
