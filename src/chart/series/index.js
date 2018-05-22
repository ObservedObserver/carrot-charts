import zrender from 'zrender'
const COLORS = [
  '#1890ff',
  '#fadb14',
  '#13c2c2',
  '#eb2f96',
  '#2f54eb',
  '#fa541c',
  '#f5222d',
  '#faad14',
  '#52c41a',
  '#a0d911',
  '#722ed1',
  '#fa8c16'
]
var drawBar = function () {
  let {series, board} = this.option
  let data = series[0].data
  let chart = this.chart
  let dataLen = data.length
  let itemWidth = board.width * (1 - board.left - board.right) / dataLen
  let subItemWidth = itemWidth / series.length;
  let rectWidth = subItemWidth * 0.79
  let itemMaxValue = Math.max(...series.map(ser => Math.max(...ser.data.map(item => item[1]))))
  let itemMaxHeight = board.height * (1 - board.top - board.bottom)
  series.forEach((ser, serIndex) => {
    ser.data.forEach((item, index) => {
      let val = [item[0].toString(), item[1]]
      let x_ = itemWidth * index + subItemWidth * serIndex + ((subItemWidth - rectWidth) / 2)
      let y_ = val[1] / itemMaxValue * itemMaxHeight
      let {x, y} = transCoord({x: x_, y: y_, board})
      let rect = new zrender.Rect({
        shape: {
          x,
          y,
          width: rectWidth,
          height: y_
        },
        style: {
          fill: COLORS[serIndex % COLORS.length]
        }
      })
      chart.add(rect)
    })
  })
};

var drawAxisInfo = function () {
  let {series, board} = this.option
  let data = series[0].data
  let chart = this.chart
  let dataLen = data.length
  let itemWidth = board.width * (1 - board.left - board.right) / dataLen
  let ans, ansx, ansy
  data.forEach((item, index) => {
    let x_ = itemWidth * index + itemWidth / 2
    let y_ = -10
    let {x, y} = transCoord({x: x_, y: y_, board})
    let text = new zrender.Text({
      style: {
        text: item[0].toString(),
        textAlign: 'center'
      },
      position: [x, y]
    })
    chart.add(text)
  })

  let itemMaxValue = Math.max(...series.map(ser => Math.max(...ser.data.map(item => item[1]))))
  console.log(itemMaxValue)
  let itemMaxHeight = board.height * (1 - board.top - board.bottom)

  for (let i = 0; i < dataLen; i++) {
    let x_ = -10
    let y_ = (i + 1) / dataLen * itemMaxHeight

    let {x, y} = transCoord({x: x_, y: y_, board})
    let text = new zrender.Text({
      style: {
        text: ((i + 1) / dataLen * itemMaxValue).toFixed(0),
        textAlign: 'right'
      },
      position: [x, y]
    })

    chart.add(text)
  }

  for (let i = 0; i < dataLen; i++) {
    let x_ = 0
    let y_ = (i + 1) / dataLen * itemMaxHeight

    let {x, y} = transCoord({x: x_, y: y_, board})

    let line = new zrender.Line({
      shape: {
        x1: x,
        y1: y,
        x2: (1 - board.right) * board.width,
        y2: y
      },
      style: {
        opacity: 0.2
      }
    })
    chart.add(line)
  }

}

var transCoord = ({x, y, board}) => {
  const {top, bottom, left, right, width, height} = board
  let x0 = left * width
  let y0 = (1 - bottom) * height
  let x1 = (1 - right) * width
  let y1 = top * height
  return {
    x: x + x0,
    y: y0 - y
  }
}

export {drawBar, drawAxisInfo}
