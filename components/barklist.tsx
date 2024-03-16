"use client";
import { BarList, Card } from '@tremor/react';

const data = [
  {
    name: '112',
    value: 120,
  },
];

export function BarListHero() {
  return (
    <Card className="mx-auto max-w-lg">
      <h3 className="text-tremor-title text-tremor-content-strong dark:text-dark-tremor-content-strong font-medium">Placement Satistics</h3>
      <p className="mt-4 text-tremor-default flex items-center justify-between text-tremor-content dark:text-dark-tremor-content">
        <span>Placed</span>
        <span>Graduated</span>
      </p>
      <BarList data={data} className="mt-2" />
    </Card>
  );
}