import * as React from 'react';
import './index.css';
import { widget } from '../../charting_library/charting_library.min';

import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { setProduct } from "../../redux/actions";
import { setTheme } from "../../redux/actions/themeActions";

function getLanguageFromURL() {
	const regex = new RegExp('[\\?&]lang=([^&#]*)');
	const results = regex.exec(window.location.search);
	return results === null ? null : decodeURIComponent(results[1].replace(/\+/g, ' '));
}

export class TVChartContainer extends React.PureComponent {
	constructor(props){
        super(props);
        this.state = {
			symbol : this.props.symbol,
			theme : "Dark",
        }
    }
	static defaultProps = {
		symbol: 'BTCUSDT',
		interval: '60',
		timezone: "Etc/UTC",
		theme: "Dark",
		style: "1",
		locale: "tr",
		toolbar_bg: "rgba(0, 0, 0, 1)",
		enable_publishing: false,
		allow_symbol_change: true,
		toolbar_bg: "rgba(0, 0, 0, 1)",
		containerId: 'tv_chart_container',
		datafeedUrl: 'https:pro.tomya.com/api/providers/tradingview',
		libraryPath: '/charting_library/',
		chartsStorageUrl: 'https://saveload.tradingview.com',
		chartsStorageApiVersion: '1.1',
		clientId: 'tradingview.com',
		userId: 'public_user_id',
		fullscreen: false,
		autosize: true,
		studiesOverrides: {},
	};

	// Interval types "15" "60" "120" "180" "D" "5D" "W" "2W" "M" "3M" "12M"

	tvWidget = null;

	componentDidUpdate(){

		const widgetOptions = {
			symbol: this.props.symbol,
			// custom
			//asfdsg
			theme: this.props.themes?"Dark":"Light",
			toolbar_bg: this.props.toolbar_bg,
			enable_publishing: this.props.enable_publishing,
			timezone: 'Europe/Istanbul',
			// BEWARE: no trailing slash is expected in feed URL
			datafeed: new window.Datafeeds.UDFCompatibleDatafeed(this.props.datafeedUrl),
			interval: this.props.interval,
			container_id: this.props.containerId,
			library_path: this.props.libraryPath,

			locale: getLanguageFromURL() || 'tr',
			disabled_features: ['use_localstorage_for_settings'],
			enabled_features: ['study_templates'],
			charts_storage_url: this.props.chartsStorageUrl,
			charts_storage_api_version: this.props.chartsStorageApiVersion,
			client_id: this.props.clientId,
			user_id: this.props.userId,
			fullscreen: this.props.fullscreen,
			autosize: this.props.autosize,
			studies_overrides: this.props.studiesOverrides,
		};
		
		const tvWidget = new widget(widgetOptions);
		this.tvWidget = tvWidget;

		tvWidget.onChartReady(() => {
			tvWidget.headerReady().then(() => {
				const button = tvWidget.createButton();
				button.setAttribute('title', 'Click to show a notification popup');
				button.classList.add('apply-common-tooltip');
				button.addEventListener('click', () => tvWidget.showNoticeDialog({
					title: 'Notification',
					body: 'API Sorunsuz şekilde çalışıyor',
					callback: () => {
						//console.log('Noticed!');
					},
				}));

				button.innerHTML = 'API Kontrol';
			});
		});
		

	}

	componentDidMount() {
		const widgetOptions = {
			symbol: this.props.symbol,
			// custom
			//asfdsg
			theme: this.props.themes?"Dark":"Light",
			toolbar_bg: this.props.toolbar_bg,
			enable_publishing: this.props.enable_publishing,
			timezone: 'Europe/Istanbul',
			// BEWARE: no trailing slash is expected in feed URL
			datafeed: new window.Datafeeds.UDFCompatibleDatafeed(this.props.datafeedUrl),
			interval: this.props.interval,
			container_id: this.props.containerId,
			library_path: this.props.libraryPath,

			locale: getLanguageFromURL() || 'tr',
			disabled_features: ['use_localstorage_for_settings'],
			enabled_features: ['study_templates'],
			charts_storage_url: this.props.chartsStorageUrl,
			charts_storage_api_version: this.props.chartsStorageApiVersion,
			client_id: this.props.clientId,
			user_id: this.props.userId,
			fullscreen: this.props.fullscreen,
			autosize: this.props.autosize,
			studies_overrides: this.props.studiesOverrides,
		};
		
		const tvWidget = new widget(widgetOptions);
		this.tvWidget = tvWidget;

		tvWidget.onChartReady(() => {
			tvWidget.headerReady().then(() => {
				const button = tvWidget.createButton();
				button.setAttribute('title', 'Click to show a notification popup');
				button.classList.add('apply-common-tooltip');
				button.addEventListener('click', () => tvWidget.showNoticeDialog({
					title: 'Notification',
					body: 'API Sorunsuz şekilde çalışıyor',
					callback: () => {
						//console.log('Noticed!');
					},
				}));

				button.innerHTML = 'API Kontrol';
			});
		});
	}

	componentWillUnmount() {
		if (this.tvWidget !== null) {
			this.tvWidget.remove();
			this.tvWidget = null;
		}
	}

	render() {
		return (
			<div
				id={ this.props.containerId }
				className={ 'TVChartContainer' }
			/>
		);
	}
}

const mapStateToProps = (state) => {
    return {
	  product: state.testRedux.product,
	  
    };
  };
  const mapDispatchToProps = (dispatch) => ({
	setProduct: (payload) => dispatch(setProduct(payload)),
	
  });
  
  export default withRouter(connect(mapStateToProps, mapDispatchToProps)(TVChartContainer));


/*
import * as React from 'react';
import './index.css';
import { widget } from '../../charting_library/charting_library.min';

function getLanguageFromURL() {
	const regex = new RegExp('[\\?&]lang=([^&#]*)');
	const results = regex.exec(window.location.search);
	return results === null ? null : decodeURIComponent(results[1].replace(/\+/g, ' '));
}

export class TVChartContainer extends React.PureComponent {
	static defaultProps = {
		symbol: 'BTCUSD',
		interval: 'D',
		timezone: "Etc/UTC",
		theme: "Dark",
		style: "1",
		locale: "tr",
		toolbar_bg: "rgba(0, 0, 0, 1)",
		enable_publishing: false,
		allow_symbol_change: true,
		toolbar_bg: "rgba(0, 0, 0, 1)",
		containerId: 'tv_chart_container',
		datafeedUrl: 'https://demo_feed.tradingview.com',
		libraryPath: '/charting_library/',
		chartsStorageUrl: 'https://saveload.tradingview.com',
		chartsStorageApiVersion: '1.1',
		clientId: 'tradingview.com',
		userId: 'public_user_id',
		fullscreen: false,
		autosize: true,
		studiesOverrides: {},
	};

	tvWidget = null;

	componentDidMount() {
		const widgetOptions = {
			symbol: this.props.symbol,
			// BEWARE: no trailing slash is expected in feed URL
			datafeed: new window.Datafeeds.UDFCompatibleDatafeed(this.props.datafeedUrl),
			interval: this.props.interval,
			container_id: this.props.containerId,
			library_path: this.props.libraryPath,

			locale: getLanguageFromURL() || 'en',
			disabled_features: ['use_localstorage_for_settings'],
			enabled_features: ['study_templates'],
			charts_storage_url: this.props.chartsStorageUrl,
			charts_storage_api_version: this.props.chartsStorageApiVersion,
			client_id: this.props.clientId,
			user_id: this.props.userId,
			fullscreen: this.props.fullscreen,
			autosize: this.props.autosize,
			studies_overrides: this.props.studiesOverrides,
		};

		const tvWidget = new widget(widgetOptions);
		this.tvWidget = tvWidget;

		tvWidget.onChartReady(() => {
			tvWidget.headerReady().then(() => {
				const button = tvWidget.createButton();
				button.setAttribute('title', 'Click to show a notification popup');
				button.classList.add('apply-common-tooltip');
				button.addEventListener('click', () => tvWidget.showNoticeDialog({
					title: 'Notification',
					body: 'TradingView Charting Library API works correctly',
					callback: () => {
						console.log('Noticed!');
					},
				}));

				button.innerHTML = 'Check API';
			});
		});
	}

	componentWillUnmount() {
		if (this.tvWidget !== null) {
			this.tvWidget.remove();
			this.tvWidget = null;
		}
	}

	render() {
		return (
			<div
				id={ this.props.containerId }
				className={ 'TVChartContainer' }
			/>
		);
	}
}

*/