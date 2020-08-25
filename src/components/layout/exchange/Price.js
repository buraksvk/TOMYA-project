import React from 'react'

class Price extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            intervalID : '',
            symbol : this.props.symbol,
            data  : '',
        }
    }
    componentDidMount(){
        const getData = () => {
            fetch('https:pro.tomya.com/api/providers/trading/price?asset='+this.props.symbol)
              .then(response => response.json())
              .then(data => {
                this.setState({data: data.price});
                
                this.intervalID = setTimeout(getData.bind(this), 1000);
              });
              
              
        }
        getData();
        return () => {
            clearTimeout(this.intervalID);
        };
    }

    render()
    {    
        
    return this.state.data    

    }
        
}  

export default Price;