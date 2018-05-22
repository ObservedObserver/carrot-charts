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
    }
    drawAxis.call(this)
    drawAxisInfo.call(this)
    drawBar.call(this)

  }
}
 export default CarrotCharts;
