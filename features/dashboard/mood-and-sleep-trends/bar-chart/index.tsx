'use client';

import {
  Bar,
  BarChart as RechartsBarChart,
  ReferenceLine,
  ResponsiveContainer,
  XAxis,
  YAxis,
} from 'recharts';
import { MOOD_AND_SLEEP_TRENDS_DATA } from '../data';
import { CustomBar } from './custom-bar';
import { XAxisTick } from './x-axis-tick';
import { Y_AXIS_WIDTH, YAxisTick } from './y-axis-tick';

const MIN_BAR_SLOT = 60;
const X_AXIS_RECHARTS_HEIGHT = 50;
const CHART_DOMAIN: [number, number] = [0, 5];
const CHART_TICKS = [1, 2, 3, 4, 5];

/** TODO: Still need to adress the Y Axis problems with ticks  */

const BarChart = () => {
  const minBarsWidth = MOOD_AND_SLEEP_TRENDS_DATA.length * MIN_BAR_SLOT;

  return (
    <div className="w-full h-78 flex">
      <div
        style={{ width: Y_AXIS_WIDTH + 8 }}
        className="[&_.recharts-surface]:overflow-visible"
      >
        <ResponsiveContainer width="100%" height="100%">
          <RechartsBarChart
            data={MOOD_AND_SLEEP_TRENDS_DATA}
            margin={{ top: 0, left: 8, right: 0 }}
          >
            <XAxis
              dataKey="date"
              interval={0}
              tick={<XAxisTick />}
              axisLine={false}
              tickLine={false}
              height={X_AXIS_RECHARTS_HEIGHT}
              tickMargin={6}
              padding={{ left: 0, right: 0 }}
            />
            <YAxis
              dataKey="value"
              width={Y_AXIS_WIDTH}
              ticks={CHART_TICKS}
              domain={CHART_DOMAIN}
              tick={<YAxisTick />}
              axisLine={false}
              tickLine={false}
            />
          </RechartsBarChart>
        </ResponsiveContainer>
      </div>
      <div className="h-full min-w-0 flex-1 overflow-x-auto">
        <div style={{ minWidth: minBarsWidth }} className="h-full">
          <ResponsiveContainer width="100%" height="100%">
            <RechartsBarChart
              data={MOOD_AND_SLEEP_TRENDS_DATA}
              margin={{ top: 0, left: 0, right: -9 }}
            >
              <XAxis
                dataKey="date"
                interval={0}
                tick={<XAxisTick />}
                axisLine={false}
                tickLine={false}
                height={X_AXIS_RECHARTS_HEIGHT}
                tickMargin={6}
                padding={{ left: 0, right: 0 }}
              />
              <YAxis
                width={0}
                ticks={CHART_TICKS}
                domain={CHART_DOMAIN}
                axisLine={false}
                tickLine={false}
                tick={false}
              />
              <Bar
                dataKey="value"
                barSize={40}
                isAnimationActive={false}
                shape={props => <CustomBar {...props} />}
              />
              {CHART_TICKS.map(tick => (
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

export { BarChart };
