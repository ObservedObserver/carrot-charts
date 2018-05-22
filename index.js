import CarrotCharts from './src/index.js'

var cc = new CarrotCharts('#main');
cc.setOption({
  board: {
    top: 0.05,
    left: 0.05,
    right: 0.05,
    bottom: 0.05
  },
  xAxis: {},
  yAxis: {},
  series: [
    {
      type: 'bar',
      data: [
        ['Alice', 12],
        ['Bob', 20],
        ['Carl', 32],
        ['Duke', 22],
        ['Eilson', 8],
        ['Jack', 16],
        ['Milk', 17]
      ]
    },
    {
      type: 'bar',
      data: [
        ['Alice', 36],
        ['Bob', 24],
        ['Carl', 42],
        ['Duke', 8],
        ['Eilson', 18],
        ['Jack', 26],
        ['Milk', 15]
      ]
    },
    {
      type: 'bar',
      data: [
        ['Alice', 25],
        ['Bob', 46],
        ['Carl', 21],
        ['Duke', 6],
        ['Eilson', 5],
        ['Jack', 32],
        ['Milk', 12]
      ]
    }
  ]
})
