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
    }
  ]
})
