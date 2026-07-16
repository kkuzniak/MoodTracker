'use client';

import { useRef } from 'react';
import {
  Bar,
  BarChart as RechartsBarChart,
  ReferenceLine,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts';
import { ChartTooltip } from './chart-tooltip';
import { CustomBar } from './custom-bar';
import { DataPoint } from './types';
import { XAxisTick } from './x-axis-tick';
import { Y_AXIS_WIDTH, YAxisTick } from './y-axis-tick';

const MIN_BAR_SLOT = 57.5;
const X_AXIS_RECHARTS_HEIGHT = 50;
const Y_AXIS_DOMAIN: [number, number] = [0, 5];
const Y_AXIS_TICKS = [1, 2, 3, 4, 5];
export const BAR_WIDTH = 40;

type Props = {
  data: DataPoint[];
};

const MoodBarChart = ({ data }: Props) => {
  const chartAreaRef = useRef<HTMLDivElement>(null);

  const isEmpty = data.length === 0;
  const minBarsWidth = data.length * MIN_BAR_SLOT;
  const rechartsData = isEmpty ? [{}] : data;

  return (
    <div className="w-full h-78 flex">
      <div
        style={{ width: Y_AXIS_WIDTH + 8 }}
        className="[&_.recharts-surface]:overflow-visible"
      >
        <ResponsiveContainer width="100%" height="100%">
          <RechartsBarChart
            data={rechartsData}
            margin={{ top: 0, left: 8, right: 0 }}
          >
            <XAxis
              dataKey="date"
              interval={0}
              tick={isEmpty ? false : <XAxisTick />}
              axisLine={false}
              tickLine={false}
              height={X_AXIS_RECHARTS_HEIGHT}
              tickMargin={6}
              padding={{ left: 0, right: 0 }}
            />
            <YAxis
              dataKey="value"
              width={Y_AXIS_WIDTH}
              ticks={Y_AXIS_TICKS}
              domain={Y_AXIS_DOMAIN}
              tick={<YAxisTick />}
              axisLine={false}
              tickLine={false}
            />
          </RechartsBarChart>
        </ResponsiveContainer>
      </div>
      <div className="h-full min-w-0 flex-1 overflow-x-auto">
        <div
          ref={chartAreaRef}
          style={{ minWidth: isEmpty ? '100%' : minBarsWidth }}
          className="h-full"
        >
          <ResponsiveContainer width="100%" height="100%">
            <RechartsBarChart
              data={rechartsData}
              margin={{ top: 0, left: 0, right: -9 }}
            >
              <XAxis
                dataKey="date"
                interval={0}
                tick={isEmpty ? false : <XAxisTick />}
                axisLine={
                  isEmpty
                    ? { stroke: 'var(--color-blue-100)', strokeOpacity: 0.4 }
                    : false
                }
                tickLine={false}
                height={X_AXIS_RECHARTS_HEIGHT}
                tickMargin={6}
                padding={{ left: 0, right: 0 }}
              />
              <YAxis
                width={0}
                ticks={Y_AXIS_TICKS}
                domain={Y_AXIS_DOMAIN}
                axisLine={false}
                tickLine={false}
                tick={false}
              />
              <Tooltip
                cursor={false}
                isAnimationActive={false}
                portal={
                  typeof document === 'undefined' ? undefined : document.body
                }
                wrapperStyle={{
                  position: 'fixed',
                  top: 0,
                  left: 0,
                  width: 0,
                  height: 0,
                  zIndex: 20,
                  outline: 'none',
                }}
                content={props => (
                  <ChartTooltip
                    {...props}
                    anchorRect={chartAreaRef.current?.getBoundingClientRect()}
                  />
                )}
              />
              <Bar
                dataKey="value"
                barSize={BAR_WIDTH}
                isAnimationActive={false}
                shape={props => <CustomBar {...props} />}
              />
              {Y_AXIS_TICKS.map(tick => (
                <ReferenceLine
                  key={tick}
                  y={tick}
                  stroke="var(--color-blue-100)"
                  strokeWidth={1}
                  strokeOpacity={0.4}
                  zIndex={-100}
                />
              ))}
            </RechartsBarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};

export { MoodBarChart };
