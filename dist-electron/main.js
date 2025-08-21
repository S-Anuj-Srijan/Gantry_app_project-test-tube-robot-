import { app, BrowserWindow, ipcMain } from "electron";
import path from "path";
import { isDev } from "./util.js";
import { getPreloadPath } from "./pathresolver.js";
import { runPythonScript } from "./resourceManager.js";
app.on("ready", () => {
    const mainWindow = new BrowserWindow({
        width: 1000,
        height: 700,
        webPreferences: {
            preload: getPreloadPath(),
            contextIsolation: true,
            nodeIntegration: false,
            sandbox: false
        },
    });
    if (isDev()) {
        mainWindow.loadURL("http://localhost:5123");
    }
    else {
        mainWindow.loadFile(path.join(app.getAppPath(), "/dist-react/index.html"));
    }
});
ipcMain.handle("run-python", async (_evt, { scriptPath, args }) => {
    try {
        const out = await runPythonScript(scriptPath, args ?? []);
        return { success: true, output: out };
    }
    catch (e) {
        return { success: false, error: e?.message || String(e) };
    }
});
