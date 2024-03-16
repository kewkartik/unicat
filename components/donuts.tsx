"use client";

import { DonutChart } from '@tremor/react';

const datahero = [
  {
    name: 'Male',
    value: 540,
  },
  {
    name: 'Female',
    value: 112,
  },
];

const dataFormatter = (number: number) =>
  `${Intl.NumberFormat('inr').format(number).toString()}`;

export const DonutChartHero = () => (
  <>
    <div className="mx-auto space-y-12">
      <div className="space-y-3">
        <span className="text-center block font-mono text-tremor-default text-dark-tremor-content">
          donut variant 1
        </span>
        <div className="flex justify-center">
          <DonutChart
            data={datahero}
            variant="donut"
            valueFormatter={dataFormatter}
            onValueChange={(v) => console.log(v)}
          />
        </div>
      </div>
    </div>
  </>
);