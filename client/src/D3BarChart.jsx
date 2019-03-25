import React, { Component } from 'react';
import * as d3 from 'd3';

var data = [18, 10, 5, 15, 13, 4]

class d3BarChart extends Component {
    constructor(props) {
        super(props)
        this.state = {
            d3: ''
        }
    }
    
    componentDidMount() {
        let el = React.createElement('div', null ,'hello')
        this.setState({
            d3: el
        })
        console.log(el)
    }

    render() {
        let el = this.state.el
        console.log(el)
        if (el) {
            el.innerHTML = 'asdkjf;lasdhfkljashdkjashdklfjhdsakl'
            console.log( 'logging el', el)
            return {el}
        } else {
            return null
        }
    }

}

export default d3BarChart;