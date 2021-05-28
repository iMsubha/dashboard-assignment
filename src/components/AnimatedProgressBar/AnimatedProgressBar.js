import { Animation, ValueScale } from '@devexpress/dx-react-chart';
import {
  ArgumentAxis,
  Chart,
  SplineSeries, ValueAxis
} from '@devexpress/dx-react-chart-bootstrap4';
import React from 'react';
const AnimatedProgressBar = () => {
      const data= [
        { month: 'Jan', sale: 10, total: 100 },
        { month: 'Feb', sale: 20, total: 430 },
        { month: 'Mar', sale: 50, total: 120 },
        { month: 'Apr', sale: 12, total: 715 },
        { month: 'May', sale: 10, total: 434 },
        { month: 'Jun', sale: 18, total: 752 },
        { month: 'Jul', sale: 15, total: 538 },
        { month: 'Aug', sale: 12, total: 259 },
        { month: 'Sep', sale: 59, total: 270 },
        { month: 'Oct', sale: 13, total: 280 },
        { month: 'Nov', sale: 66, total: 345 },
        { month: 'Dec', sale: 55, total: 326 },
      ]
    return (
          <Chart 
          data={data}
          >
          <ValueScale name="sale" />
          <ValueScale name="total" />
          <ArgumentAxis />
          <ValueAxis scaleName="sale" showGrid={false} showLine showTicks />
          <ValueAxis scaleName="total" position="right" showGrid={false} showLine showTicks />

          <SplineSeries
            name="Units Sold"
            valueField="sale"
            argumentField="month"
            scaleName="sale"
          />

          <SplineSeries
            name="Total Transactions"
            valueField="total"
            argumentField="month"
            // scaleName="total"
          />
          <Animation />
          {/* <Legend /> */}
         </Chart>
    );
};

export default AnimatedProgressBar;