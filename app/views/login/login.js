const Animation = require('ui/animation').Animation

let pageView = null
let loginStartView = null
let loginFormView = null
let outerLogoView = null

exports.pageLoaded = function (args) {
  pageView = args.object
  loginStartView = pageView.getViewById('loginStart')
  loginFormView = pageView.getViewById('loginForm')
  outerLogoView = pageView.getViewById('outerLogo')

  pageView.actionBarHidden = true
}

exports.showLoginForm = async function (args) {
  if (!loginFormView) return

  await loginStartView.animate({
    opacity: 0
  })

  loginStartView.visibility = 'collapse'
  loginFormView.visibility = 'visible'
  outerLogoView.visibility = 'visible'

  const animations = []
  const duration = 500

  animations.push({ target: loginFormView, opacity: 1, duration })
  animations.push({ target: outerLogoView, opacity: 1, duration })

  await new Animation(animations, false).play()
}