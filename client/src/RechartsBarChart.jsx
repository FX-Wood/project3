import React, { Component } from 'react';
import { BarChart, XAxis, Tooltip, CartesianGrid, Bar} from 'recharts';

class RechartsBarChart extends Component {
    render() {

        let data = [
            {name: 'page a', uv: 10, pv: 5},
            {name: 'page b', uv: 7, pv: 4}
        ]
        return (
            <BarChart
                width={400}
                height={300}
                data={data}
                margin={{ top: 5, right: 20, left: 10, bottom: 5 }}
                >
                <XAxis dataKey="name" />
                <Tooltip />
                <CartesianGrid />
                <Bar dataKey="uv" stroke="#ff7300" />
                <Bar dataKey="pv" stroke="#387908" />
            </BarChart>
        )            
    }
}

export default RechartsBarChart;