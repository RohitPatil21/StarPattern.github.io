//----------------------------------Square star printing------------------------------

/*
    *****
    *****
    *****
    *****
    *****
*/

let n = 7;
let s = "";

for(let i=0; i<n; i++){
    for(let j=0; j<n; j++){
        s = s + "*";
    }
    s = s + "\n"           //new line
}
console.log(s)