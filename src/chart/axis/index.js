import zrender from 'zrender'

var drawAxis = function () {
  const {left = 0.1, right = 0.1, top = 0.1, bottom = 0.1, width = 600, height = 600} = this.option.board
  let xLine, yLine
  xLine = new zrender.Line({
    shape: {
      x1: left * width - 10,
      y1: (1 - bottom) * height + 1,
      x2: (1 - right) * width,
      y2: (1 - bottom) * height + 1
    }
  })
  yLine = new zrender.Line({
    shape: {
      x1: left * width - 1,
      y1: (1 - bottom) * height + 1,
      x2: left * width - 1,
      y2: top * height
    }
  })
  this.chart.add(xLine)
  this.chart.add(yLine)
}
export {drawAxis}
