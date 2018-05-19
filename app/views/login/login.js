let page = null

exports.pageLoaded = function (args) {
  page = args.object
  page.actionBarHidden = true
}

exports.gridLoaded = function (args) {
  let background = args.object

  background.animate({
    scale: { x: 1.1, y: 1.1 },
    duration: 10000
  })
}