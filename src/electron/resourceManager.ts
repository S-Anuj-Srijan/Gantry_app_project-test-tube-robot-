import { PythonShell } from "python-shell";
import path from "path";
import { getScriptPath } from "./pathresolver.js";

export async function runPythonScript(scriptPath: string, args: string[] = []) {
  const abs = path.isAbsolute(scriptPath) ? scriptPath : getScriptPath(scriptPath);

  const messages = await PythonShell.run(abs, {
    args,
    pythonOptions: ["-u"], // unbuffered for timely prints
    // pythonPath: process.platform === "win32" ? "py" : "python3", // set if needed
    // cwd: path.dirname(abs),
  });

  return messages; // array of stdout lines
}
