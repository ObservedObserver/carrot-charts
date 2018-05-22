import zrender from 'zrender'
import {drawAxis} from './chart/axis'
import {drawBar, drawAxisInfo} from './chart/series'
class CarrotCharts {
  constructor (dom) {
    this.dom = document.querySelector(dom)
    console.log(this.dom)
    this.chart = zrender.init(this.dom)
    console.log(this.chart)
  }
  setOption (option) {
    this.option = option
    if (typeof this.option.board !== 'undefined') {
      this.option.board.width = this.chart.getWidth();
      this.option.board.height = this.chart.getHeight();
    }
    if (typeof this.option.series !== 'undefined') {
      // this.cha
    }
    let chart = this.chart
    let {xLine, yLine} = drawAxis({
      xAxis: this.option.xAxis,
      yAxis: this.option.yAxis,
      board: this.option.board
    })
    chart.add(xLine)
    chart.add(yLine)
    let xTexts = drawAxisInfo({
      data: this.option.series[0].data,
      board: this.option.board
    })
    xTexts.forEach((text) => {
      chart.add(text)
    })
    let rects = drawBar({
      data: this.option.series[0].data,
      board: this.option.board
    })
    rects.forEach((rect) => {
      chart.add(rect)
    })
  }
}
 export default CarrotCharts;
