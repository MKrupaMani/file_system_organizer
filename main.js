#!/usr/bin/env node

let treeObj = require("./commands/tree");
let organizeObj = require("./commands/organize");
let helpObj = require("./commands/help");
let arr = process.argv.slice(2);
let command = arr[0];
let types = {
     media: ["mp4", "mkv"],
     archives: ["zip", "7z", "rar", "tar", "gz", "ar", "iso", "xz"],
     documents: ["docx", "doc", "pdf", "xlsx", "xls", "odt", "ods", "odp", "odg", "odf", "txt", "ps", "tex"],
     app: ["exe", "dmg", "pkg", "deb"]
};
switch (command) {
     case 'tree':
          treeObj.treeKey(arr[1]);
          break;
     case 'organize':
          organizeObj.organizeKey(arr[1]);
          break;
     case 'help':
          helpObj.helpKey();
          break;
     default:
          console.log("kindly enter a valid command ✅");
}








