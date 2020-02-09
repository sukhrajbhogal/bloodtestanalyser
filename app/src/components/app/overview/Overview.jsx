import React from 'react';
import 'antd/dist/antd.css';
import './Overview.scss';
import AppContext from '../../../context/AppContext';
import { Card } from 'antd';

import {
  Chart,
  ChartTitle,
  ChartSeries,
  ChartSeriesItem,
  ChartCategoryAxis,
  ChartCategoryAxisItem,
  ChartValueAxis,
  ChartValueAxisItem,
  ChartSeriesItemTooltip,
  ChartTooltip
} from '@progress/kendo-react-charts';
import { align } from '@progress/kendo-drawing';
import { Redirect } from 'react-router';

// eslint-disable-next-line react/prefer-stateless-function
class Overview extends React.Component {

  // eslint-disable-next-line no-useless-constructor
  constructor(props) {
    super(props);
  }

  chartContainer = (data) => {
    const hidden = { visible: true };
    const { loRange, hiRange } = data;
    const userValue = data.value;
    const title = data.name;
    const top = hiRange * 1.05;
    const bottom = (loRange <= .025) ? hiRange - top : loRange * .95;
    console.log(bottom);
    console.log(loRange);
    const lowerBadBand = {
      from: bottom,
      to: loRange,
      color: '#87b6ff',
      opacity: 1
    }
    const healthyBand = {
      from: loRange,
      to: hiRange,
      color: '#99c1ff',
      opacity: 1
    }
    const upperBadBand = {
      from: hiRange,
      to: top,
      color: '#87b6ff',
      opacity: 1
    }
    const userValueBand = {
      from: userValue,
      to: userValue + ((top - bottom) * 0.005),
      color: '#000000',
      opacity: 1
    }
    const plotBands = [
      lowerBadBand,
      healthyBand,
      upperBadBand,
      userValueBand
    ];

    const temp = [[]];

    const tooltipRender = ({ point }) => {
      const { value } = point;

      return (
        <span>
          Maximum: {value.target}
          <br />
          Average: {value.current}
        </span>
      )
    };

    return (
      <div className="chartWrapper">
        <h1 style={{marginLeft: '9.5vw'}}>{title}</h1>
        <Chart style={{ height: 120, width: '80%', margin: 'auto' }} >
          {/* <ChartTitle text={title} color="black" font="19pt sans-serif" /> */}
          <ChartSeries>
            <ChartSeriesItem type="bullet" color="#0058e9" data={temp} />
          </ChartSeries>
          <ChartCategoryAxis>
            {/* left */}
            <ChartCategoryAxisItem majorGridLines={hidden} minorGridLines={hidden} />
          </ChartCategoryAxis>
          <ChartValueAxis>
            {/* bottom */}
            <ChartValueAxisItem labels={{ color: '#0a0' }} majorGridLines={hidden} minorTicks={hidden} min={bottom} max={top} plotBands={plotBands} />

          </ChartValueAxis>
          {/* <ChartSeriesItemTooltip background="red" /> */}
          <ChartTooltip render={tooltipRender} style="right=0 !important"/>
 
        </Chart>
      </div>
    );
  }

  render() {
    return (
      <AppContext.Consumer>
        {
          (appData) => {
            const keyList = Object.keys(appData);
            console.log(keyList);
            return <div className="containerMain">
              {keyList.map((item) => {
                const title = item.replace('_', ' ');
                return (
                  <div key={title} style={{width:'100%', padding: '8px'}}>
                    <h1 style={{textAlign: 'center'}}>{title}</h1>
                    {
                      appData[item].map((metric) => {
                        console.log(metric)
                        return (
                          this.chartContainer(metric)
                        )
                      })
                    }
                  </div>
                );
              })}
            </div>
          }
        }
      </AppContext.Consumer>
    );
  }
};

export default Overview;
