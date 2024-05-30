const extratednumber = (input) => {
    let output = [];
    for (let item of input){
        let match = item.match(/[a-zA-Z]+|\d+/g);
         output.push(...match.map(el=>isNaN(el)?el:parseInt(el)))
    }
    return output

};

const input = ["Hello123", "World456", "49", "Another789"];
console.log(extratednumber(input));