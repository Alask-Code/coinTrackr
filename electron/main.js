const { app, BrowserWindow } = require('electron');

function createWindow () {
  const win = new BrowserWindow({
    height: 600,
    width: 800,
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false,
      enableRemoteModule: true
    },
    title: 'My App'
  });

  win.setTitle('My App');
  win.loadFile('index.html');
  win.webContents.openDevTools();
}

app.whenReady().then(createWindow);
