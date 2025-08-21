import { isDev } from "./util.js";
import { app } from "electron";
import path from "path";

export function getPreloadPath() {
  return path.join(
    app.getAppPath(),               // <-- correct function call
    isDev() ? "." : "..",           // dev = current folder, prod = parent folder
    "dist-electron",                // no leading slash
    "preload.cjs"                   // built preload file
  );
}
