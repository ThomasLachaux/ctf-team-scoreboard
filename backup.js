import './style.css';
import Chart from 'chart.js/auto';
import 'chartjs-adapter-moment';
const users = [
  {
    success: true,
    data: [
      {
        challenge: { id: 23, name: 'Bienvenue', value: 50, category: 'Divers' },
        team: null,
        date: '2022-05-16T13:06:33+00:00',
        user: { id: 947, name: 'Saperlu' },
        id: 2258,
        challenge_id: 23,
        type: 'correct',
      },
      {
        challenge: {
          id: 36,
          name: 'Equipement d\u00e9suet',
          value: 100,
          category: 'Renseignement en sources ouvertes',
        },
        team: null,
        date: '2022-05-16T13:09:43+00:00',
        user: { id: 947, name: 'Saperlu' },
        id: 2283,
        challenge_id: 36,
        type: 'correct',
      },
      {
        challenge: { id: 68, name: 'Fich\u00e9 JS', value: 100, category: 'Web' },
        team: null,
        date: '2022-05-16T13:50:46+00:00',
        user: { id: 947, name: 'Saperlu' },
        id: 2610,
        challenge_id: 68,
        type: 'correct',
      },
      {
        challenge: { id: 73, name: 'Discord', value: 50, category: 'Divers' },
        team: null,
        date: '2022-05-16T14:15:35+00:00',
        user: { id: 947, name: 'Saperlu' },
        id: 2770,
        challenge_id: 73,
        type: 'correct',
      },
      {
        challenge: { id: 24, name: 'Pierre-papier-Hallebarde', value: 100, category: 'Divers' },
        team: null,
        date: '2022-05-16T23:16:55+00:00',
        user: { id: 947, name: 'Saperlu' },
        id: 6532,
        challenge_id: 24,
        type: 'correct',
      },
      {
        challenge: { id: 47, name: 'D\u00e9coup\u00e9', value: 957, category: 'Programmation' },
        team: null,
        date: '2022-05-17T12:17:29+00:00',
        user: { id: 947, name: 'Saperlu' },
        id: 8531,
        challenge_id: 47,
        type: 'correct',
      },
      {
        challenge: {
          id: 77,
          name: "\u00c0 l'aube d'un \u00e9change",
          value: 847,
          category: 'Renseignement en sources ouvertes',
        },
        team: null,
        date: '2022-05-17T12:56:23+00:00',
        user: { id: 947, name: 'Saperlu' },
        id: 8719,
        challenge_id: 77,
        type: 'correct',
      },
      {
        challenge: { id: 52, name: 'Par c\u00e2ble', value: 999, category: 'Divers' },
        team: null,
        date: '2022-05-17T14:11:17+00:00',
        user: { id: 947, name: 'Saperlu' },
        id: 9200,
        challenge_id: 52,
        type: 'correct',
      },
      {
        challenge: { id: 60, name: 'PNG : Un logo ob\u00e8se [1/4]', value: 735, category: 'St\u00e9ganographie' },
        team: null,
        date: '2022-05-17T15:04:04+00:00',
        user: { id: 947, name: 'Saperlu' },
        id: 9492,
        challenge_id: 60,
        type: 'correct',
      },
      {
        challenge: { id: 49, name: 'Le braquage', value: 971, category: 'Web' },
        team: null,
        date: '2022-05-17T20:01:26+00:00',
        user: { id: 947, name: 'Saperlu' },
        id: 10891,
        challenge_id: 49,
        type: 'correct',
      },
      {
        challenge: { id: 28, name: 'Ping Pong', value: 963, category: 'Analyse forensique' },
        team: null,
        date: '2022-05-18T00:11:47+00:00',
        user: { id: 947, name: 'Saperlu' },
        id: 11843,
        challenge_id: 28,
        type: 'correct',
      },
      {
        challenge: { id: 69, name: 'Je suis une th\u00e9i\u00e8re', value: 987, category: 'Divers' },
        team: null,
        date: '2022-05-18T16:17:22+00:00',
        user: { id: 947, name: 'Saperlu' },
        id: 13865,
        challenge_id: 69,
        type: 'correct',
      },
      {
        challenge: {
          id: 83,
          name: 'Nous sommes infiltr\u00e9s !',
          value: 969,
          category: 'Renseignement en sources ouvertes',
        },
        team: null,
        date: '2022-05-18T19:27:52+00:00',
        user: { id: 947, name: 'Saperlu' },
        id: 14458,
        challenge_id: 83,
        type: 'correct',
      },
      {
        challenge: { id: 57, name: 'Collaborateur suspect', value: 983, category: 'Renseignement en sources ouvertes' },
        team: null,
        date: '2022-05-19T01:06:50+00:00',
        user: { id: 947, name: 'Saperlu' },
        id: 15196,
        challenge_id: 57,
        type: 'correct',
      },
      {
        challenge: { id: 45, name: '128code128', value: 999, category: 'Programmation' },
        team: null,
        date: '2022-05-20T15:37:15+00:00',
        user: { id: 947, name: 'Saperlu' },
        id: 19343,
        challenge_id: 45,
        type: 'correct',
      },
      {
        challenge: { id: 78, name: 'Un utilisateur suspicieux [1/2]', value: 999, category: 'Divers' },
        team: null,
        date: '2022-05-20T18:31:29+00:00',
        user: { id: 947, name: 'Saperlu' },
        id: 19727,
        challenge_id: 78,
        type: 'correct',
      },
      {
        challenge: { id: 79, name: 'Un utilisateur suspicieux [2/2]', value: 1000, category: 'Divers' },
        team: null,
        date: '2022-05-20T19:04:40+00:00',
        user: { id: 947, name: 'Saperlu' },
        id: 19848,
        challenge_id: 79,
        type: 'correct',
      },
    ],
  },
  {
    success: true,
    data: [
      {
        challenge: { value: 50, id: 23, name: 'Bienvenue', category: 'Divers' },
        id: 7081,
        date: '2022-05-17T07:22:57+00:00',
        challenge_id: 23,
        team: null,
        user: { id: 1405, name: 'Herel' },
        type: 'correct',
      },
      {
        challenge: { value: 50, id: 73, name: 'Discord', category: 'Divers' },
        id: 7095,
        date: '2022-05-17T07:25:31+00:00',
        challenge_id: 73,
        team: null,
        user: { id: 1405, name: 'Herel' },
        type: 'correct',
      },
      {
        challenge: { value: 100, id: 24, name: 'Pierre-papier-Hallebarde', category: 'Divers' },
        id: 7239,
        date: '2022-05-17T07:58:39+00:00',
        challenge_id: 24,
        team: null,
        user: { id: 1405, name: 'Herel' },
        type: 'correct',
      },
      {
        challenge: { value: 957, id: 47, name: 'D\u00e9coup\u00e9', category: 'Programmation' },
        id: 7313,
        date: '2022-05-17T08:22:04+00:00',
        challenge_id: 47,
        team: null,
        user: { id: 1405, name: 'Herel' },
        type: 'correct',
      },
      {
        challenge: { value: 971, id: 49, name: 'Le braquage', category: 'Web' },
        id: 7630,
        date: '2022-05-17T09:21:49+00:00',
        challenge_id: 49,
        team: null,
        user: { id: 1405, name: 'Herel' },
        type: 'correct',
      },
      {
        challenge: { value: 973, id: 37, name: 'Renverse la tour ! [1/2]', category: 'R\u00e9tro-ing\u00e9nierie' },
        id: 8300,
        date: '2022-05-17T11:39:18+00:00',
        challenge_id: 37,
        team: null,
        user: { id: 1405, name: 'Herel' },
        type: 'correct',
      },
      {
        challenge: {
          value: 847,
          id: 77,
          name: "\u00c0 l'aube d'un \u00e9change",
          category: 'Renseignement en sources ouvertes',
        },
        id: 8651,
        date: '2022-05-17T12:39:11+00:00',
        challenge_id: 77,
        team: null,
        user: { id: 1405, name: 'Herel' },
        type: 'correct',
      },
      {
        challenge: { value: 100, id: 51, name: 'Floppy', category: 'Analyse forensique' },
        id: 8870,
        date: '2022-05-17T13:15:43+00:00',
        challenge_id: 51,
        team: null,
        user: { id: 1405, name: 'Herel' },
        type: 'correct',
      },
      {
        challenge: { value: 735, id: 60, name: 'PNG : Un logo ob\u00e8se [1/4]', category: 'St\u00e9ganographie' },
        id: 8912,
        date: '2022-05-17T13:27:47+00:00',
        challenge_id: 60,
        team: null,
        user: { id: 1405, name: 'Herel' },
        type: 'correct',
      },
      {
        challenge: { value: 100, id: 84, name: 'Un RSA incassable?', category: 'Cryptanalyse' },
        id: 11682,
        date: '2022-05-17T22:34:30+00:00',
        challenge_id: 84,
        team: null,
        user: { id: 1405, name: 'Herel' },
        type: 'correct',
      },
      {
        challenge: { value: 100, id: 35, name: 'Pense-b\u00eate', category: 'Web3' },
        id: 11780,
        date: '2022-05-17T23:12:53+00:00',
        challenge_id: 35,
        team: null,
        user: { id: 1405, name: 'Herel' },
        type: 'correct',
      },
      {
        challenge: { value: 963, id: 28, name: 'Ping Pong', category: 'Analyse forensique' },
        id: 11865,
        date: '2022-05-18T00:43:12+00:00',
        challenge_id: 28,
        team: null,
        user: { id: 1405, name: 'Herel' },
        type: 'correct',
      },
      {
        challenge: { value: 100, id: 68, name: 'Fich\u00e9 JS', category: 'Web' },
        id: 11870,
        date: '2022-05-18T01:00:07+00:00',
        challenge_id: 68,
        team: null,
        user: { id: 1405, name: 'Herel' },
        type: 'correct',
      },
      {
        challenge: { value: 987, id: 69, name: 'Je suis une th\u00e9i\u00e8re', category: 'Divers' },
        id: 14085,
        date: '2022-05-18T17:29:14+00:00',
        challenge_id: 69,
        team: null,
        user: { id: 1405, name: 'Herel' },
        type: 'correct',
      },
      {
        challenge: {
          value: 969,
          id: 83,
          name: 'Nous sommes infiltr\u00e9s !',
          category: 'Renseignement en sources ouvertes',
        },
        id: 14213,
        date: '2022-05-18T18:05:44+00:00',
        challenge_id: 83,
        team: null,
        user: { id: 1405, name: 'Herel' },
        type: 'correct',
      },
      {
        challenge: { value: 996, id: 29, name: 'SOS RAID [1/2]', category: 'Analyse forensique' },
        id: 14250,
        date: '2022-05-18T18:16:57+00:00',
        challenge_id: 29,
        team: null,
        user: { id: 1405, name: 'Herel' },
        type: 'correct',
      },
      {
        challenge: {
          value: 100,
          id: 36,
          name: 'Equipement d\u00e9suet',
          category: 'Renseignement en sources ouvertes',
        },
        id: 15130,
        date: '2022-05-18T22:57:53+00:00',
        challenge_id: 36,
        team: null,
        user: { id: 1405, name: 'Herel' },
        type: 'correct',
      },
      {
        challenge: { value: 983, id: 57, name: 'Collaborateur suspect', category: 'Renseignement en sources ouvertes' },
        id: 15168,
        date: '2022-05-18T23:42:54+00:00',
        challenge_id: 57,
        team: null,
        user: { id: 1405, name: 'Herel' },
        type: 'correct',
      },
      {
        challenge: { value: 100, id: 64, name: 'La plume \u00e0 la main', category: 'St\u00e9ganographie' },
        id: 16659,
        date: '2022-05-19T16:10:06+00:00',
        challenge_id: 64,
        team: null,
        user: { id: 1405, name: 'Herel' },
        type: 'correct',
      },
      {
        challenge: { value: 999, id: 52, name: 'Par c\u00e2ble', category: 'Divers' },
        id: 17607,
        date: '2022-05-19T22:08:07+00:00',
        challenge_id: 52,
        team: null,
        user: { id: 1405, name: 'Herel' },
        type: 'correct',
      },
      {
        challenge: { value: 100, id: 53, name: 'Mot de passe ?', category: 'R\u00e9tro-ing\u00e9nierie' },
        id: 17711,
        date: '2022-05-19T22:48:32+00:00',
        challenge_id: 53,
        team: null,
        user: { id: 1405, name: 'Herel' },
        type: 'correct',
      },
      {
        challenge: { value: 997, id: 25, name: 'Mise \u00e0 jour requise', category: 'R\u00e9tro-ing\u00e9nierie' },
        id: 18396,
        date: '2022-05-20T09:49:57+00:00',
        challenge_id: 25,
        team: null,
        user: { id: 1405, name: 'Herel' },
        type: 'correct',
      },
      {
        challenge: { value: 999, id: 78, name: 'Un utilisateur suspicieux [1/2]', category: 'Divers' },
        id: 18661,
        date: '2022-05-20T12:01:09+00:00',
        challenge_id: 78,
        team: null,
        user: { id: 1405, name: 'Herel' },
        type: 'correct',
      },
      {
        challenge: { value: 1000, id: 79, name: 'Un utilisateur suspicieux [2/2]', category: 'Divers' },
        id: 19424,
        date: '2022-05-20T16:09:25+00:00',
        challenge_id: 79,
        team: null,
        user: { id: 1405, name: 'Herel' },
        type: 'correct',
      },
    ],
  },
];

const dataPoints = users.map((user) => {
  let score = 0;
  const userPoints = user.data.map((challenge) => {
    score += challenge.challenge.value;
    return { x: new Date(challenge.date), y: score };
  });

  return {
    type: 'line',
    name: user.data[0].user.name,
    legendText: user.data[0].user.name,
    showInLegend: true,
    dataPoints: userPoints,
  };
});

const ctx = document.getElementById('myChart');

const totalDuration = 500;
const delayBetweenPoints = totalDuration / data.length;
const previousY = (ctx) =>
  ctx.index === 0
    ? ctx.chart.scales.y.getPixelForValue(100)
    : ctx.chart.getDatasetMeta(ctx.datasetIndex).data[ctx.index - 1].getProps(['y'], true).y;
const animation = {
  x: {
    type: 'number',
    easing: 'linear',
    duration: delayBetweenPoints,
    from: NaN, // the point is initially skipped
    delay(ctx) {
      if (ctx.type !== 'data' || ctx.xStarted) {
        return 0;
      }
      ctx.xStarted = true;
      return ctx.index * delayBetweenPoints;
    },
  },
  y: {
    type: 'number',
    easing: 'linear',
    duration: delayBetweenPoints,
    from: previousY,
    delay(ctx) {
      if (ctx.type !== 'data' || ctx.yStarted) {
        return 0;
      }
      ctx.yStarted = true;
      return ctx.index * delayBetweenPoints;
    },
  },
};

const myChart = new Chart(ctx, {
  type: 'line',
  data: {
    datasets: [
      {
        label: '# of Votes',
        data: [
          {
            x: '2021-11-06 23:39:30',
            y: 50,
          },
          {
            x: '2021-11-07 01:00:28',
            y: 60,
          },
          {
            x: '2021-11-07 09:00:28',
            y: 20,
          },
        ],

        borderWidth: 1,
      },
    ],
  },
  options: {
    responsive: true,
    legend: {
      display: false,
    },
    animation,

    scales: {
      x: {
        type: 'time',
        time: {
          unit: 'day',
        },
      },
    },
  },
});
