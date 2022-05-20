import './style.css';
import dayjs from 'dayjs';
import advancedFormat from 'dayjs/plugin/advancedFormat';
import echarts from 'echarts/dist/echarts-en.common';
import axios from 'axios';

dayjs.extend(advancedFormat);
window.dayjs = dayjs;

export function colorHash(str) {
  let hash = 0;
  for (let i = 0; i < str.length; i++) {
    hash = str.charCodeAt(i) + ((hash << 5) - hash);
    hash = hash & hash;
  }
  // Range calculation
  // diff = max - min;
  // x = ((hash % diff) + diff) % diff;
  // return x + min;
  // Calculate HSL values
  // Range from 0 to 360
  let h = ((hash % 360) + 360) % 360;
  // Range from 75 to 100
  let s = (((hash % 25) + 25) % 25) + 75;
  // Range from 40 to 60
  let l = (((hash % 20) + 20) % 20) + 40;
  return `hsl(${h}, ${s}%, ${l}%)`;
}

axios.get(import.meta.env.VITE_API_URL).then(() => {
  const series = users

    // The user must have at least flagged once
    .filter((user) => user.data.length > 0 && user.success)

    // Format the data
    .map((user) => {
      let score = 0;
      const scores = user.data.map((challenge) => {
        score += challenge.challenge.value;
        return [dayjs(challenge.date).toDate(), score];
      });

      return {
        name: user.data[0].user.name,
        type: 'line',
        label: {
          normal: {
            position: 'top',
          },
        },
        itemStyle: {
          normal: {
            color: colorHash(user.data[0].user.name),
          },
        },
        data: scores,
      };
    });

  console.log(series);

  const option = {
    title: {
      left: 'center',
      text: 'Classement Team',
    },
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'cross',
      },
    },
    legend: {
      type: 'scroll',
      orient: 'horizontal',
      align: 'left',
      bottom: 35,
      data: series.map((serie) => serie.name),
    },
    toolbox: {
      feature: {
        dataZoom: {
          yAxisIndex: 'none',
        },
        saveAsImage: {},
      },
    },
    grid: {
      containLabel: true,
    },
    xAxis: [
      {
        type: 'time',
        boundaryGap: false,
        data: [],
      },
    ],
    yAxis: [
      {
        type: 'value',
      },
    ],
    dataZoom: [
      {
        id: 'dataZoomX',
        type: 'slider',
        xAxisIndex: [0],
        filterMode: 'filter',
        height: 20,
        top: 35,
        fillerColor: 'rgba(233, 236, 241, 0.4)',
      },
    ],
    series,
  };

  const chart = echarts.init(document.getElementById('score-graph'));
  chart.setOption(option);
});
