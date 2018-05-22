import zrender from 'zrender'

var drawBar = ({data, board}) => {
  // 已知数据量，计算width / 数据量
  // react_width * 0.618
  let dataLen = data.length
  let itemWidth = board.width * (1 - board.left - board.right) / dataLen
  console.log('itemWidth', data, board)
  let rectWidth = itemWidth * 0.618
  let itemMaxValue = Math.max(...data.map(item => item[1]))
  let itemMaxHeight = board.height * (1 - board.top - board.bottom)
  return data.map((item, index) => {
    let val = [item[0].toString(), item[1]]
    let x_ = itemWidth * index + ((itemWidth - rectWidth) / 2)
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
        fill: 'rgb(106, 219, 196)'
      }
    })
    return rect
  })
}

var drawAxisInfo = ({data, board}) => {
  let dataLen = data.length
  let itemWidth = board.width * (1 - board.left - board.right) / dataLen
  let ans, ansx, ansy
  ansx = data.map((item, index) => {
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
    // console.log([x, y])
    return text
  })

  let itemMaxValue = Math.max(...data.map(item => item[1]))
  console.log(itemMaxValue)
  let itemMaxHeight = board.height * (1 - board.top - board.bottom)
  ansy = data.map((item, index) => {
    let x_ = -10
    let y_ = (index + 1) / dataLen * itemMaxHeight

    let {x, y} = transCoord({x: x_, y: y_, board})
    let text = new zrender.Text({
      style: {
        text: ((index + 1) / dataLen * itemMaxValue).toFixed(0),
        textAlign: 'right'
      },
      position: [x, y]
    })
    let line = new zrender.Line({
      shape: {
        x1: 0,
        y1: y,
        x2: (1 - board.right) * board.width,
        y2: y
      }
    })
    console.log(((index + 1) / dataLen * itemMaxValue).toFixed(0))
    return line, text
  })
  ans = data.map((item, index) => {
    let x_ = 0
    let y_ = (index + 1) / dataLen * itemMaxHeight

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
    return line
  })
  console.log(ansy)
  return ansx.concat(ansy, ans)
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
