"use client";
import { BarChart } from '@tremor/react';

const chartdata = [
  {
    name: '2018-19',
    'Sponsored Projects': 113,
    'Funding Agencies': 32,
    'Amount (Crores)': 54,
  },
  {
    name: '2019-20',
    'Sponsored Projects': 102,
    'Funding Agencies': 42,
    'Amount (Crores)': 52,
  },
  {
    name: '2020-21',
    'Sponsored Projects': 123,
    'Funding Agencies': 48,
    'Amount (Crores)': 72,
  },
];

const dataFormatter = (number: number) =>
  Intl.NumberFormat('inr').format(number).toString ();

export function BarChartExp() {
  return (
    <>
      <div className='pb-20 md:pb-72'>
        <h3 className="text-lg font-medium text-dark-tremor-content-strong">
          Sponsored Research Details
        </h3>
        <BarChart
          className="mt-6"
          data={chartdata}
          index="name"
          categories={[
            'Sponsored Projects',
            'Funding Agencies',
            'Amount (Crores)',
          ]}
          colors={['blue', 'teal', 'amber']}
          valueFormatter={dataFormatter}
          yAxisWidth={48}
        />
      </div>
    </>
  );
}