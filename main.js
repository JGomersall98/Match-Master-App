// src/main.js
const { app, BrowserWindow } = require('electron');
const path = require('path');

async function createWindow() {
  let isDev;
  try {
    const electronIsDev = await import('electron-is-dev');
    isDev = electronIsDev.default;
  } catch (error) {
    console.error('Failed to load electron-is-dev:', error);
    isDev = false; // Fallback in case the dynamic import fails
  }

  const win = new BrowserWindow({
    width: 1280,
    height: 832,
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false, // It's recommended to enable context isolation for security.
    },
  });

  const startURL = isDev
    ? 'http://localhost:3000'
    : `file://${path.join(__dirname, '../public/index.html')}`;
  
  win.loadURL(startURL);
}

app.whenReady().then(createWindow);

// Quit when all windows are closed, except on macOS.
app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

// On macOS, re-create a window in the app when the dock icon is clicked and there are no other windows open.
app.on('activate', () => {
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow();
  }
});
