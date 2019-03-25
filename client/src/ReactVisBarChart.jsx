import React, { Component } from 'react';
import { XYPlot, VerticalBarSeries, VerticalGridLines, HorizontalGridLines, XAxis, YAxis } from 'react-vis';
import '../node_modules/react-vis/dist/style.css';

class ReactVisBarChart extends Component {
    render() {
        let data = [
            {x: 'b', y: 5},
            {x: 'c', y: 3}
        ]
        let data2 = [
            {x: 'a', y:2}
        ]
        
        return (
            <XYPlot xType="ordinal" height={ 300 } width={ 300 } >
            <VerticalGridLines />
            <HorizontalGridLines />
            <XAxis />
            <YAxis />
                <VerticalBarSeries data={ data } />
                <VerticalBarSeries data={ data2 } />
            </XYPlot>


        )
    }
}

export default ReactVisBarChart;