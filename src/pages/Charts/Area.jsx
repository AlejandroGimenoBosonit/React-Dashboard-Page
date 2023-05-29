import React from 'react';

import {
  ChartComponent,
  SeriesCollectionDirective,
  SeriesDirective,
  Inject,
  SplineAreaSeries,
  DateTime,
  Legend
} from '@syncfusion/ej2-react-charts';

import { Header } from '../../components';

// data
import {
  areaCustomSeries, 
  areaPrimaryXAxis, 
  areaPrimaryYAxis
} from '../../data/dummy';

//  state
import { useStateContext } from '../../contexts/ContextProvider';

const Area = () => {

  const { currentMode } = useStateContext();

  return (
    <div className='m-4 md:m-10 mt-24 p-10 bg-white dark:bg-secondary-dark-bg rounded-3xl'>

      <Header category={"Chart"} title={"Inflation Range in Percentage"} />

      <ChartComponent
        id="area-chart"
        height="420px"
        width=''
        primaryXAxis={areaPrimaryXAxis}
        primaryYAxis={areaPrimaryYAxis}
        chartArea={{ border: { width: 0 }}}
        tooltip={{ enable: true }}
        background={currentMode === 'Dark' ? '#33373E' : '#fff'}
      >
        
        <Inject services={[SplineAreaSeries, DateTime, Legend]} />
      
        <SeriesCollectionDirective>
          {
            areaCustomSeries.map((item, index) => (
              <SeriesDirective key={index} {...item} />
            ))
          }
        </SeriesCollectionDirective>
      
      </ChartComponent>
    </div>
    
  )
}

export default Area