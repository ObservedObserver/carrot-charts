import zrender from 'zrender'

class CarrotCharts {
  constructor (dom) {
    this.dom = document.querySelector(dom)
    console.log(this.dom)
    this.chart = zrender.init(this.dom)
    console.log(this.chart)
  }
  setOption (option) {
    this.option = option
  }
  render () {
    var circle = new zrender.Circle({
        shape: {
            cx: 150,
            cy: 50,
            r: 40
        },
        style: {
            fill: 'none',
            stroke: '#F00'
        }
    });
    this.chart.add(circle);
    // this.chart.render()
  }
}
 export default CarrotCharts;
