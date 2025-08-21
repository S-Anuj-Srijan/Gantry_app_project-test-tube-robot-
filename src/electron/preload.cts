import { subscribe } from "diagnostics_channel";

const electron = require('electron');

electron.contextBridge.exposeInMainWorld("electron",{
    getStaticData:()=>console.log("static"),    
    
    
}) 