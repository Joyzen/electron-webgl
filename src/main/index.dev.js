/**
 * This file is used specifically and only for development. It installs
 * `electron-debug` & `vue-devtools`. There shouldn't be any need to
 *  modify this file, but it can be used to extend your development
 *  environment.
 */

/* eslint-disable */

// Install `electron-debug` with `devtron`
const { BrowserWindow } = require('electron');
require('electron-debug')({ showDevTools: true });
const path = require('path');
const os = require('os');

// Install `vue-devtools`
require('electron').app.on('ready', () => {
  // let installExtension = require('electron-devtools-installer')
  // installExtension.default(installExtension.VUEJS_DEVTOOLS)
  //   .then(() => {})
  //   .catch(err => {
  //     console.log('Unable to install `vue-devtools`: \n', err)
  //   })
  BrowserWindow.addDevToolsExtension(
    path.join(os.homedir(), '/AppData/Local/Google/Chrome/User Data/Default/Extensions/nhdogjmejiglipccpnnnanhbledajbpd/5.3.3_0')
  );
})

// Require `main` process to boot app
require('./index')