import fs from "node:fs";
import os from "node:os";

const text = fs.readFileSync("sample.txt","utf-8");
const osVersion = os.version();

console.log(text);
console.log("OS version: " + osVersion);