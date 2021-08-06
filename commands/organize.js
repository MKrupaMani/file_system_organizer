let fs = require('fs');
let path = require('path');
function organizefn(dirPath) {
     // console.log("organize command successfully implemented for "+dirPath);
     let destPath;
     if (dirPath === undefined) {
          destPath = process.cwd();
          return;
     }

     else {
          let doesExist = fs.existsSync(dirPath);
          if (doesExist) {
               destPath = path.join(dirPath, "organized_files");
               if (fs.existsSync(destPath) == false) {
                    fs.mkdirSync(destPath);
               }
          }
          else {
               console.log("Kindly enter a valid path");
               return;
          }

     }
     organizeHelper(dirPath, destPath);

}

function organizeHelper(source, destination) {
     let children = fs.readdirSync(source);
     for (let i = 0; i < children.length; i++) {
          let childAddress = path.join(source, children[i]);
          if (fs.lstatSync(childAddress).isFile()) {
               let category = getExtension(children[i]);
               sendFiles(childAddress, destination, category);
          }
     }

}

function getExtension(name) {
     let ext = path.extname(name).slice(1);
     for (let type in types) {
          let childArray = types[type];
          for (let i = 0; i < childArray.length; i++) {
               if (ext == childArray[i]) {
                    return type;
               }
          }
     }
     return "other";
}
function sendFiles(childAddress, destination, category) {
     let catFolder = path.join(destination, category);
     if (fs.existsSync(catFolder) === false) {
          fs.mkdirSync(catFolder);
     }
     else {
          let childDestPath = path.join(catFolder, path.basename(childAddress));
          fs.copyFileSync(childAddress, childDestPath);
          fs.unlinkSync(childAddress);
     }
}

module.exports={
     organizeKey : organizefn
};