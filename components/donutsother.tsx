"use client";

import { DonutChart } from '@tremor/react';

const datahero = [
  {
    name: 'Postive',
    value: 24,
  },
  {
    name: 'Negative',
    value: 2,
  },
];

const dataFormatter = (number: number) =>
  `${Intl.NumberFormat('inr').format(number).toString()}`;

export const DonutChartHeros = () => (
  <>
      <div className="space-y-3">
        <span className="text-center block font-mono text-tremor-default text-tremor-content dark:text-dark-tremor-content">
        </span>
        <div className="flex justify-center">
          <DonutChart
            data={datahero}
            variant="pie"
            valueFormatter={dataFormatter}
            onValueChange={(v) => console.log(v)}
          />
        </div>
      </div>

  </>
);