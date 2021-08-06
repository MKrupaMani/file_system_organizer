function helpfn() {
     console.log(`Here is the list of all commands
                         1. node main.js tree "dirPath"
                         2. node main.js organize "dirPath"
                         3. node main.js help`
     );
}

module.exports={
     helpKey : helpfn
};