const { resolve } = require('path');
const { BrowserWindow } = require('electron');
const icon = resolve(__dirname, '../', 'build', 'icon.png');

function createWindow () {
  const win = new BrowserWindow({
    icon,
    title: 'coinTrackr',
    frame: false,
    width: 290,
    height: 200,
    transparent: true,
    skipTaskbar: true,
    alwaysOnTop: true,
    webPreferences: {
      nodeIntegration: true,
      enableRemoteModule: true,
      contextIsolation: false
    },
    resizable: false,
    fullscreenable: false
  });
  win.hide();
  win.removeMenu();
  // win.openDevTools();
  win.loadFile('src/index.html');

  return win;
}

module.exports = createWindow;
