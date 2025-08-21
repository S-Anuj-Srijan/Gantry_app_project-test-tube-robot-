import { app } from "electron";
import path from "path";

export function getPreloadPath() {
  // Preload is compiled into dist-electron/preload.js by your transpile step
  return path.join(app.getAppPath(), "dist-electron", "preload.js");
}

export function getScriptPath(rel: string) {
  // Python scripts: dev → repo root; prod → resources/
  return app.isPackaged
    ? path.join(process.resourcesPath, rel) // e.g., scripts/hello.py
    : path.join(process.cwd(), rel);
}
