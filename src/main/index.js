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

let ppfp ="";

if(process.env.NODE_ENV !== 'development'){
  let base  = app.getAppPath();
  ppfp= process.arch=='x64'? require('path').join(base,'../../','/pepflashplayer64_30_0_0_113.dll'):require('path').join(baase,'../../','/pepflashplayer32_30_0_0_113.dll')
}else{

  ppfp= process.arch=='x64'? require('path').join(__static,'flash/pepflashplayer64_30_0_0_113.dll'):require('path').join(__static,'/flash/pepflashplayer32_30_0_0_113.dll')
}
//设定插件
// console.log(app.getPath('pepperFlashSystemPlugin'))
// console.log(ppfp)
app.commandLine.appendSwitch('ppapi-flash-path',ppfp);
//设定插件版本（不知道是否真有用，不匹配貌似也能运行）
app.commandLine.appendSwitch('ppapi-flash-version', '30.0.0.113');

let mainWindow
const winURL = process.env.NODE_ENV === 'development'
  ? `http://localhost:9080`
  : `file://${__dirname}/index.html`

function createWindow () {
  /**
   * Initial window options
   */
  mainWindow = new BrowserWindow({
    height: 1080,
    useContentSize: true,
    width: 1920,
    maxHeight:1080,
    maxWidth:1920,
    frame:false,
    webPreferences: {
      webSecurity: false,
      plugins: true
    },
    resizable :false,
    x:0,
    y:0,
    fullscreen:process.env.NODE_ENV!=='development'
  })

  mainWindow.loadURL(winURL)

  mainWindow.on('closed', () => {
    mainWindow = null
  })
  mainWindow.webContents.on('did-finish-load', () => {
    // const ret = globalShortcut.register('Left', () => {
    //   // console.log('CommandOrControl+X is pressed')
    //   mainWindow.webContents.send('key','right')
    // })
    // const right = globalShortcut.register('Right',()=>{
      
    //   mainWindow.webContents.send('key','left')
    // })
    // // const back = globalShortcut.register('BackSpace',()=>{
    // //   mainWindow.webContents.send('key','back')
    // // })
    // const enter = globalShortcut.register('C',()=>{
    //   mainWindow.webContents.send('key','back')
    // })
    // const exit = globalShortcut.register('Esc',()=>{
    //   app.quit()
    // })const exit = globalShortcut.register('Esc',()=>{
    //   app.quit()
    // })
  })
  
}

var baseUrl ;
var pics = [];
var filePath ;

if(process.env.NODE_ENV !=='development'){
  baseUrl = require('path').join(app.getAppPath(),'../../');
}else{
  baseUrl = app.getPath('desktop');
}
filePath = require('path').join(baseUrl,'/config.xml')


ipcMain.on('asynchronous-message', (event, arg) => {
        require('fs').readFile(filePath,function(err,data){
        xml2js.parseString(data, {explicitArray : false}, function(err, json){ 
            console.log(json.data.node)
             _.map(json.data.node,item=>{
               if(item){ 
                 var p = {}
                 p.pic= require('path').join(baseUrl,item.$.pic2) 
                 p.name = item.$.textTitle
                 p.content = item.$.content
                 p.time = item.$.say
                 p.guid =item.$.guid
                 pics.push(p)
                }
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
