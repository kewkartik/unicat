"use client";
import { LineChart } from '@tremor/react';

const chartdata = [
  {
    date: '2018-19',
    Library: 11094868,
    'Laboratory': 29069535,
    'Worskhop': 1550000,
  },
  {
    date: '2019-20',
    Library: 9417898,
    'Laboratory': 56348605,
    'Worskhop': 2351360,
  },
  {
    date: '2020-21',
    Library: 11129682,
    'Laboratory': 55311993,
    'Worskhop': 1611121,
  
  },
];

export function LineChartHero() {

    const dataFormatter = (number : number) =>
    `₹${Intl.NumberFormat('inr').format(number).toString()}`;
  
    return (
    <LineChart
      className="h-80 mx-auto w-full max-w-4xl"
      data={chartdata}
      index="date"
      categories={['Library', 'Laboratory', 'Worskhop']}
      colors={['indigo', 'rose', 'green']}
      valueFormatter={dataFormatter}
      yAxisWidth={60}
      onValueChange={(v) => console.log(v)}
    />
  );
}