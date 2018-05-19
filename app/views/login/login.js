let page = null

exports.pageLoaded = function (args) {
  page = args.object
  page.actionBarHidden = true
}