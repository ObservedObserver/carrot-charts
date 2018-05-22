import zrender from 'zrender'

var drawAxis = ({xAxis, yAxis, board = {}}) => {
  // let {} = xAxis
  const {left = 0.1, right = 0.1, top = 0.1, bottom = 0.1, width = 600, height = 600} = board
  let xLine, yLine
  if (true) {
    xLine = new zrender.Line({
      shape: {
        x1: left * width - 10,
        y1: (1 - bottom) * height + 1,
        x2: (1 - right) * width,
        y2: (1 - bottom) * height + 1
      }
    })
  }
  yLine = new zrender.Line({
    shape: {
      x1: left * width - 1,
      y1: (1 - bottom) * height + 1,
      x2: left * width - 1,
      y2: top * height
    }
  })
  return {
    xLine,
    yLine
  }
}
export {drawAxis}
