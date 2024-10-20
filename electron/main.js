process.env.ELECTRON_DISABLE_SECURITY_WARNINGS = true;
require('electron-reload')('../');

const { app } = require('electron');
const createTray = require('./Tray');

app.whenReady().then(() => {
  createTray();
});

app.setAppUserModelId('coinTrackr');
