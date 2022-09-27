let analytics

if (!process.env.IS_WEB) {
  // const Analytics = require('electron-ga').default
  // analytics = new Analytics(process.env.GA_TRACKING_ID)
  analytics = {
    send: () => {}
  }
} else {
  analytics = {
    send: () => {}
  }
}

export default analytics
