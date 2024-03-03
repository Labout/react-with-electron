const { app, BrowserWindow } = require('electron')

require('@electron/remote/main').initialize()

function createWindow() {
    // Create the browser window.
    const win = new BrowserWindow({
        width:800,
        height: 600,
        webPreferences: {
            enableRemoteModule:true
        }
    })

    win.loadURL('http://localhost:3000')

}

app.on('ready', createWindow)

app.on('window-all-closed', function() {
    // On OS X it is common for applications and their menu bar to stay
    // active until the user quits explicitly with cmd + Q
    if (process.platform !== 'darwin') {
        app.quit()
    }
})

app.on('activate', function() {
    // On OS X it is common to re-create a window in the app when the 
    // doc icon is clicked and thee are no other window open
    if (BrowserWindow.getAllWindows.length === 0) createWindow()
})