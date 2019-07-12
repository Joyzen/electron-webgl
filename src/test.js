const { ipcRenderer } = require('electron');

ipcRenderer.on('asynchronous-reply', (event, arg) => {
    console.log(arg) // prints "pong"
});

//异步通信
function async () {
    ipcRenderer.send('asynchronous-message', 'ping')
}

//同步通信
function sync () {
    console.log(ipcRenderer.sendSync('synchronous-message', 'ping'))
}

const canvas =document.getElementById("canvas");
const ctx = canvas.getContext('webgl2');

console.log(ctx)