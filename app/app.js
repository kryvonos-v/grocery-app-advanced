const application = require('application')
const statusBar = require('./shared/platforms/status-bar')

statusBar.setStatusBarColors(application)

application.run({ moduleName: 'app' })