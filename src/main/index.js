import { app, BrowserWindow ,ipcMain,globalShortcut} from 'electron'
import * as xml2js from 'xml2js'
import * as _ from 'lodash'
/**
 * Set `__static` path to static files in production
 * https://simulatedgreg.gitbooks.io/electron-vue/content/en/using-static-assets.html
 */
if (process.env.NODE_ENV !== 'development') {
  global.__static = require('path').join(__dirname, '/static').replace(/\\/g, '\\\\')
}

let mainWindow
const winURL = process.env.NODE_ENV === 'development'
  ? `http://localhost:9080`
  : `file://${__dirname}/index.html`

function createWindow () {
  /**
   * Initial window options
   */
  mainWindow = new BrowserWindow({
    height: 768,
    useContentSize: true,
    width: 2048,
    maxHeight:768,
    maxWidth:2048,
    frame:false,
    webPreferences: {
      webSecurity: false
    },
    resizable :false,
    x:0,
    y:0,
    fullscreen:true
  })

  mainWindow.loadURL(winURL)

  mainWindow.on('closed', () => {
    mainWindow = null
  })
  mainWindow.webContents.on('did-finish-load', () => {
    const ret = globalShortcut.register('Left', () => {
      // console.log('CommandOrControl+X is pressed')
      mainWindow.webContents.send('key','left')
    })
    const right = globalShortcut.register('Right',()=>{
      
      mainWindow.webContents.send('key','right')
    })
    const back = globalShortcut.register('BackSpace',()=>{
      mainWindow.webContents.send('key','back')
    })
    const enter = globalShortcut.register('Enter',()=>{
      mainWindow.webContents.send('key','enter')
    })
  })
  
}
const baseUrl = app.getAppPath()
var pics = []
const filePath =require('path').join(baseUrl,'../../','/config.xml') 
 
ipcMain.on('asynchronous-message', (event, arg) => {
  console.log('------')
        require('fs').readFile(filePath,function(err,data){
        xml2js.parseString(data, {explicitArray : false}, function(err, json){ 
             _.map(json.data.node,item=>{
              console.log(item.$.pic)
              var p= require('path').join(baseUrl,'../../',item.$.pic) 
              pics.push(p)
              return p
            }) 
            event.sender.send('asynchronous-reply', pics)
          })
        })
})


app.on('ready', createWindow)

app.on('window-all-closed', () => {
  globalShortcut.unregisterAll()
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', () => {
  if (mainWindow === null) {
    createWindow()
  }
})

/**
 * Auto Updater
 *
 * Uncomment the following code below and install `electron-updater` to
 * support auto updating. Code Signing with a valid certificate is required.
 * https://simulatedgreg.gitbooks.io/electron-vue/content/en/using-electron-builder.html#auto-updating
 */

/*
import { autoUpdater } from 'electron-updater'

autoUpdater.on('update-downloaded', () => {
  autoUpdater.quitAndInstall()
})

app.on('ready', () => {
  if (process.env.NODE_ENV === 'production') autoUpdater.checkForUpdates()
})
 */
